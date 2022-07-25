import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, Input } from "antd";
import { FieldProps } from "@rjsf/core";
import { useLingui } from "@lingui/react";
import { Tooltip } from "builder/components/tooltip";
import { Section } from "builder/appearance/components";
import { fas as icons } from "@fortawesome/free-solid-svg-icons";
import { observer } from "mobx-react";
import { CanvasStoreContext } from "builder/store/canvas";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Grid } from "react-virtualized";
// import { IconDefinition } from "@fortawesome/pro-solid-svg-icons";

interface CellRendererParams {
  key: string;
  style: React.CSSProperties;
  columnIndex: number;
  rowIndex: number;
}

// DAVRON's SOLUTION BELOW
export const IconField: React.FC<
  FieldProps<string> & { doubleClickAutofocus?: boolean }
> = observer(function IconField({
  disabled,
  formData: iconName,
  uiSchema,
  onChange,
  readonly,
  schema,
  doubleClickAutofocus,
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const canvasStore = useContext(CanvasStoreContext);
  const { i18n } = useLingui();
  const title = i18n._((uiSchema["ui:title"] as string) || schema.title || "");
  const description = i18n._(
    (uiSchema["ui:description"] as string) || schema.description || ""
  );
  const [searchStr, setSearchStr] = useState<string>();
  const [isInputFocused, setIsInputFocused] = useState(false);
  useEffect(() => {
    if (
      canvasStore &&
      canvasStore.shouldFocusContent &&
      inputRef.current &&
      doubleClickAutofocus
    ) {
      inputRef.current?.focus();
    }
  }, [
    inputRef,
    doubleClickAutofocus,
    canvasStore?.shouldFocusContent,
    canvasStore,
  ]);

  const selectedIcon = useMemo(() => {
    return icons[iconName];
  }, [iconName]);

  const filteredIcons = useMemo(() => {
    return Object.entries(icons).filter(
      ([, icon]) =>
        !searchStr ||
        icon.iconName
          .toLowerCase()
          .replace("-", " ")
          .includes(searchStr.replace("-", " ").toLowerCase())
    );
  }, [searchStr]);

  const rowCount = Math.ceil(filteredIcons.length / 10);
  return (
    <Section title={title}>
      <Dropdown
        visible={isInputFocused}
        overlay={
          <Grid
            style={{ background: "white" }}
            columnCount={10}
            rowCount={rowCount} // 1946-items
            cellRenderer={({
              columnIndex,
              key,
              rowIndex,
              style,
            }: CellRendererParams) => {
              const [name, icon] =
                filteredIcons[rowIndex * 10 + columnIndex] || [];
              if (!icon) return null;

              return (
                <div
                  key={key}
                  style={{
                    ...style,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.background = "#f0f0f0";
                  }}
                  onMouseOut={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.background = "";
                  }}
                  onMouseDown={() => {
                    onChange(name);
                    inputRef.current?.blur();
                    setSearchStr("");
                  }}
                >
                  <Tooltip title={icon.iconName}>
                    <FontAwesomeIcon icon={icon} />
                  </Tooltip>
                </div>
              );
            }}
            columnWidth={30}
            rowHeight={30}
            height={Math.min(200, rowCount * 30)}
            width={320}
            autoWidth
          />
        }
        placement="bottomCenter"
        trigger={["click"]}
      >
        <div style={{ position: "relative" }}>
          {iconName && (
            <FontAwesomeIcon
              icon={selectedIcon}
              style={{
                position: "absolute",
                zIndex: "4",
                top: "0.7rem",
                left: "0.8rem",
              }}
            />
          )}
          <Input
            style={{
              paddingLeft: iconName !== undefined ? "2.4rem" : "0.5rem",
            }}
            onFocus={() => {
              setIsInputFocused(true);
            }}
            onBlur={() => {
              setIsInputFocused(false);
            }}
            allowClear
            readOnly={false}
            value={
              isInputFocused ? searchStr : selectedIcon.iconName || iconName
            }
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchStr(e.target.value);
            }}
            placeholder="input icon name"
          />
        </div>
      </Dropdown>
    </Section>
  );
});
