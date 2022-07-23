// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Input, Button } from "antd";
// import { Tooltip } from "builder/components/tooltip";
// import { Section, selectCss } from "builder/appearance/components";
// import { fas as icons } from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line import/no-extraneous-dependencies
// import { IconProp } from "@fortawesome/fontawesome-svg-core";

// const trimIconName = (text: string) => {
//   return text
//     .replace(/^fa/, "")
//     .replace(/([A-Z])/g, " $1")
//     .trim()
//     .toLowerCase();
// };


// MY CODE START ------------------------------------------------
// interface SelectIconProps {
//   value: string;
//   options: string[];
//   onChange: (value: string) => void;
//   onChangeIcon: (value: string) => void;
//   readonlyIcon: boolean;
// }

// const SelectIcon: React.FC<SelectIconProps> = ({ ...props }) => {
//   const [filter, setFilter] = useState<string | null>();
//   const [clickedIcon, setClickedIcon] = useState<IconProp>();
//   const [showDropdown, setShowDropdown] = useState(false);
//   const { value, readonlyIcon, onChangeIcon, onChange } = props;

//   useEffect(() => {
//     setFilter(null);
//   }, [value]);

//   return (
//     <div style={{ position: "relative" }}>
//       <div className="flex h-10">
//         {clickedIcon && (
//           <FontAwesomeIcon
//             icon={clickedIcon}
//             style={{
//               position: "absolute",
//               zIndex: "4",
//               top: "0.7rem",
//               left: "0.8rem",
//             }}
//           />
//         )}
//         <Input
//           allowClear
//           css={selectCss}
//           style={{
//             paddingLeft: clickedIcon !== undefined ? "2.4rem" : "0.5rem",
//           }}
//           value={filter ?? value}
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//             if (!readonlyIcon) onChangeIcon(e.target.value);
//             setShowDropdown(true);
//             setFilter(e.target.value);
//             setClickedIcon(undefined);
//           }}
//           onClick={() =>
//             showDropdown ? setShowDropdown(false) : setShowDropdown(true)
//           }
//         />
//       </div>
//       <div
//         className="flex-wrap overflow-auto w-100 absolute bg-white border-gray-300 shadow-lg"
//         style={{
//           maxHeight: "20rem",
//           display: showDropdown ? "flex" : "none",
//           zIndex: 3,
//         }}
//       >
//         {Object.entries(icons)
//           .filter(([name]) => !filter || trimIconName(name).includes(filter))
//           .map(([name, icon]) => (
//             <Tooltip title={trimIconName(name)}>
//               <div
//                 className="space-x-2 p-4 cursor-pointer"
//                 onMouseOver={(e: React.MouseEvent<HTMLDivElement>) => {
//                   e.currentTarget.style.background = "#f0f0f0";
//                 }}
//                 onMouseOut={(e: React.MouseEvent<HTMLDivElement>) => {
//                   e.currentTarget.style.background = "";
//                 }}
//                 onClick={() => {
//                   if (!readonlyIcon) onChangeIcon(name);
//                   onChange(trimIconName(name));
//                   setClickedIcon(icon);
//                   setShowDropdown(false);
//                   console.log(icon.iconName);
//                 }}
//               >
//                 <FontAwesomeIcon icon={icon} swapOpacity />
//               </div>
//             </Tooltip>
//           ))}
//       </div>
//     </div>
//   );
// };

// export const IconField: React.FC<
//   FieldProps<string> & { doubleClickAutofocus?: boolean }
// > = observer(function IconField({
//   disabled,
//   formData: value,
//   uiSchema,
//   onChange,
//   readonly,
//   schema,
//   doubleClickAutofocus,
// }) {
//   const ref = useRef<BaseSelectRef | null>(null);
//   const canvasStore = useContext(CanvasStoreContext);
//   const { i18n } = useLingui();
//   const title = i18n._((uiSchema["ui:title"] as string) || schema.title || "");
//   const description = i18n._(
//     (uiSchema["ui:description"] as string) || schema.description || ""
//   );

//   useEffect(() => {
//     if (
//       canvasStore &&
//       canvasStore.shouldFocusContent &&
//       ref.current &&
//       doubleClickAutofocus
//     ) {
//       ref.current?.focus();
//     }
//   }, [ref, doubleClickAutofocus, canvasStore?.shouldFocusContent, canvasStore]);

//   const [iconValue, setIconValue] = useState("");

//   return (
//     <Section title={title}>
//       <Tooltip title={description}>
//         <SelectIcon
//           options={["1"]}
//           value={iconValue}
//           onChange={(v: string) => setIconValue(v)}
//           readonlyIcon={readonly}
//           onChangeIcon={onChange}
//         />
//       </Tooltip>
//     </Section>
//   );
// });


// <SelectIcon
//   options={["1"]}
//   value={iconValue}
//   onChange={(v: string) => setIconValue(v)}
//   readonlyIcon={readonly}
//   onChangeIcon={onChange}
// />
// MY CODE END ------------------------------------------------





// SENIOR KHURSHID CODE -------------------------------------
// const trimIconName = (text: string) => {
//   return text
//     .replace(/^fa/, "")
//     .replace(/([A-Z])/g, " $1")
//     .trim()
//     .toLowerCase();
// };

// export const IconField: React.FC<
//   FieldProps<string> & { doubleClickAutofocus?: boolean }
// > = observer(function IconField({
//   disabled,
//   formData: value,
//   uiSchema,
//   onChange,
//   readonly,
//   schema,
//   doubleClickAutofocus,
// }) {
//   const ref = useRef<BaseSelectRef | null>(null);
//   const canvasStore = useContext(CanvasStoreContext);
//   const { i18n } = useLingui();
//   const title = i18n._((uiSchema["ui:title"] as string) || schema.title || "");
//   const description = i18n._(
//     (uiSchema["ui:description"] as string) || schema.description || ""
//   );

//   const [iconInputValue, setIconInputValue] = useState("");
//   const [filter, setFilter] = useState<string | null>();

//   useEffect(() => {
//     if (
//       canvasStore &&
//       canvasStore.shouldFocusContent &&
//       ref.current &&
//       doubleClickAutofocus
//     ) {
//       ref.current?.focus();
//     }
//   }, [ref, doubleClickAutofocus, canvasStore?.shouldFocusContent, canvasStore]);

//   const [iconValue, setIconValue] = useState("");

//   return (
//     <Section title={title}>
//       <Tooltip title={description}>
//         <Select
//           ref={ref}
//           showSearch
//           allowClear
//           value={value}
//           css={selectCss}
          // virtual={false}
          // style={{ width: "100%" }}
//           onChange={(newValue) => {
//             if (!readonly) onChange(newValue);
//           }}
//           placeholder="custom dropdown render"
//           dropdownRender={(menu: any) => {
//             return (
//               <div>
//                 <div
//                   css={css`
//                     .rc-virtual-list-holder-inner {
//                       flex-direction: row !important;
//                       flex-wrap: wrap;
//                       width: 100%;
//                     }
//                   `}
//                 >
//                   {menu}
//                 </div>
//               </div>
//             );
//           }}
//         >
//           {Object.entries(icons).map(([name, icon]) => {
//             return (
//               <Select.Option value={name} key={name}>
//                 <Tooltip title={trimIconName(name)}>
//                   <div className="space-x-2">
//                     <FontAwesomeIcon icon={icon} />
//                   </div>
//                 </Tooltip>
//               </Select.Option>
//             );
//           })}
//         </Select>
//       </Tooltip>
//     </Section>
//   );
// });





// MY CUSTOM COMPONENT
{/* const trimIconName = (text: string) => {
  return text
    .replace(/^fa/, "")
    .replace(/([A-Z])/g, " $1")
    .trim()
    .toLowerCase();
};

interface SelectIconProps {
  value: string;
options: string[];
  onChange: (value: string) => void;
  onChangeIcon: (value: string) => void;
  readonlyIcon: boolean;
}

interface CellRendererParams {
  key: string;
  style: React.CSSProperties;
  columnIndex: number;
  rowIndex: number;
}

const SelectIcon: React.FC<SelectIconProps> = ({ ...props }) => {
  const [filter, setFilter] = useState<string | null>();
  const [clickedIcon, setClickedIcon] = useState<IconProp>();
  const [showDropdown, setShowDropdown] = useState(false);
  const { value, readonlyIcon, onChangeIcon, onChange } = props;

  console.log(clickedIcon);

  useEffect(() => {
    setFilter(null);
  }, [value]);

  const cellRenderer = ({
    columnIndex,
    key,
    rowIndex,
    style,
  }: CellRendererParams) => {
    const icon = Object.entries(icons).filter(
      ([name]) => !filter || trimIconName(name).includes(filter)
    )[rowIndex];
    console.log(icon[1]);
    const iconName = trimIconName(icon.name);

    return (
      <div
        key={key}
        style={style}
        onClick={() => {
          if (!readonlyIcon) onChangeIcon(icon[0]);
          onChange(trimIconName(icon[0]));
          setClickedIcon(icon[1]);
        }}
      >
        <Tooltip title={trimIconName(icon[0])}>
          <FontAwesomeIcon icon={icon[1]} />
        </Tooltip>
      </div>
    );
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="flex h-10">
        {clickedIcon && (
          <FontAwesomeIcon
            icon={clickedIcon}
            style={{
              position: "absolute",
              zIndex: "4",
              top: "0.7rem",
              left: "0.8rem",
            }}
          />
        )}
        <Input
          allowClear
          css={selectCss}
          style={{
            paddingLeft: clickedIcon !== undefined ? "2.4rem" : "0.5rem",
          }}
          value={filter ?? value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (!readonlyIcon) onChangeIcon(e.target.value);
            setShowDropdown(true);
            setFilter(e.target.value);
            setClickedIcon(undefined);
          }}
          onClick={() =>
            showDropdown ? setShowDropdown(false) : setShowDropdown(true)
          }
        />
        <Button
          className="h-10"
          onClick={() => {
            setFilter(" ");
            setClickedIcon(undefined);
          }}
        >
          Clear
        </Button>
      </div>
      <div
        className="overflow-auto absolute bg-white border-gray-300 shadow-lg"
        style={{
          width: "80%",
          maxHeight: "20rem",
          display: showDropdown ? "flex" : "none",
          zIndex: 3,
        }}
      >
        {Object.entries(icons)
          .filter(([name]) => !filter || trimIconName(name).includes(filter))
          .map(([name, icon]) => (
            <div
              className="space-x-2 p-4 cursor-pointer"
              onClick={() => {
                if (!readonlyIcon) onChangeIcon(name);
                onChange(trimIconName(name));
                setClickedIcon(icon);
                console.log("icon:", icon);
              }}
            >
              <Tooltip title={trimIconName(name)}>
                <FontAwesomeIcon icon={icon} swapOpacity />
              </Tooltip>
            </div>
          ))} 
        <Grid
          columnCount={10}
          rowCount={50}
          columnWidth={30}
          rowHeight={30}
          height={200}
          width={500}
          cellRenderer={cellRenderer}
        />
      </div>
    </div>
  );
};

export const IconField: React.FC<
  FieldProps<string> & { doubleClickAutofocus?: boolean }
> = observer(function IconField({
  disabled,
  formData: value,
  uiSchema,
  onChange,
  readonly,
  schema,
  doubleClickAutofocus,
}) {
  const ref = useRef<BaseSelectRef | null>(null);
  const canvasStore = useContext(CanvasStoreContext);
  const { i18n } = useLingui();
  const title = i18n._((uiSchema["ui:title"] as string) || schema.title || "");
  const description = i18n._(
    (uiSchema["ui:description"] as string) || schema.description || ""
  );

  const [iconInputValue, setIconInputValue] = useState("");
  const [filter, setFilter] = useState<string | null>();
const loadMenuFast = useMemo(() => {
    const menu = (
      <div
        className="flex flex-wrap overflow-auto w-80 bg-white"
        style={{ border: "1px solid #999", maxHeight: "20rem" }}
        css={selectCss}
      >
        {Object.entries(icons)
          .filter(([name, icon]) => trimIconName(name).includes(value))
          .map(([name, icon]) => {
            return (
              <div
                className="space-x-2 p-4 cursor-pointer"
                key={name}
                onClick={() => {
                  if (!readonly) onChange(name);
                  setIconInputValue(trimIconName(name));
                }}
              >
                <Tooltip title={trimIconName(name)}>
                  <FontAwesomeIcon icon={icon} />
                </Tooltip>
              </div>
            );
          })}
      </div>
    );
    return menu;
  }, [readonly, onChange]);
 

  useEffect(() => {
    if (
      canvasStore &&
      canvasStore.shouldFocusContent &&
      ref.current &&
      doubleClickAutofocus
    ) {
      ref.current?.focus();
    }
  }, [ref, doubleClickAutofocus, canvasStore?.shouldFocusContent, canvasStore]);

  const [iconValue, setIconValue] = useState("");

  return (
    <Section title={title}>
      <Tooltip title={description}>
        <SelectIcon
          value={iconValue}
          onChange={(v: string) => setIconValue(v)}
          readonlyIcon={readonly}
          onChangeIcon={onChange}
        />
      </Tooltip>

 <Dropdown
        destroyPopupOnHide={false}
        overlay={loadMenuFast}
        placement="bottomCenter"
        trigger={["click"]}
      >
        <Input.Search
          readOnly={false}
          defaultValue={iconInputValue}
          value={filter || iconInputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (!readonly) onChange(e.target.value);
            // setFilter(e.target.value);
          }}
          placeholder="input icon name"
          onSearch={(searchValue: string) => {
            if (!readonly) onChange(searchValue);
          }}
        />
      </Dropdown> 
      <Root disabled={disabled}>
        <Tooltip title={description}>
          <Select
            ref={ref}
            bordered={false}
            showSearch
            value={value}
            size="small"
            onChange={(newValue) => {
              if (!readonly) onChange(newValue);
            }}
            css={selectCss}
          >
            {Object.entries(icons).map(([name, icon]) => {
              return (
                <Select.Option value={name} key={name}>
                  <div className="space-x-2">
                    <span className="w-4 text-center">
                      <FontAwesomeIcon icon={icon} />
                    </span>
                    <span>{trimIconName(name)}</span>
                  </div>
                </Select.Option>
              );
            })}
          </Select>
        </Tooltip>
      </Root>
    </Section>
  );
}); */}


// import { css } from "@emotion/react";
// import { InfiniteLoader, Grid, AutoSizer, List } from "react-virtualized";
// import { number } from "yargs";
// {/* <Button
//   className="h-10"
//   onClick={() => {
//     setFilter(" ");
//     setClickedIcon(undefined);
//   }}
// >
//   Clear
// </Button> */}




// MY FINAL DROPDOWN
// export const IconField: React.FC<
//   FieldProps<string> & { doubleClickAutofocus?: boolean }
// > = observer(function IconField({
//   disabled,
//   formData: value,
//   uiSchema,
//   onChange,
//   readonly,
//   schema,
//   doubleClickAutofocus,
// }) {
//   const ref = useRef<BaseSelectRef | null>(null);
//   const canvasStore = useContext(CanvasStoreContext);
//   const { i18n } = useLingui();
//   const title = i18n._((uiSchema["ui:title"] as string) || schema.title || "");
//   const description = i18n._(
//     (uiSchema["ui:description"] as string) || schema.description || ""
//   );

//   const [iconInputValue, setIconInputValue] = useState("");
//   const [filter, setFilter] = useState<string | null>();
//   const [clickedIcon, setClickedIcon] = useState<IconProp>();

//   useEffect(() => {
//     setFilter(null);
//   }, [value]);

//   const loadMenuFast = useMemo(() => {
//     const menu = (
//       <Menu
//         className="flex flex-wrap overflow-auto w-100 bg-white"
//         style={{ border: "1px solid #999", maxHeight: "20rem" }}
//         css={selectCss}
//       >
//         {Object.entries(icons)
//           .filter(([name, icon]) => trimIconName(name).includes(value))
//           .map(([name, icon]) => {
//             return (
//               <Menu.Item
//                 className="space-x-2 p-4 cursor-pointer"
//                 key={name}
//                 onClick={() => {
//                   if (!readonly) onChange(name);
//                   setIconInputValue(trimIconName(name));
//                   setClickedIcon(icon);
//                 }}
//               >
//                 <Tooltip title={trimIconName(name)}>
//                   <FontAwesomeIcon icon={icon} />
//                 </Tooltip>
//               </Menu.Item>
//             );
//           })}
//       </Menu>
//     );
//     return menu;
//   }, [readonly, onChange]);

//   useEffect(() => {
//     if (
//       canvasStore &&
//       canvasStore.shouldFocusContent &&
//       ref.current &&
//       doubleClickAutofocus
//     ) {
//       ref.current?.focus();
//     }
//   }, [ref, doubleClickAutofocus, canvasStore?.shouldFocusContent, canvasStore]);

//   return (
//     <Section title={title}>
//       <Dropdown
//         overlayStyle={{ maxWidth: "0" }}
//         destroyPopupOnHide={false}
//         overlay={loadMenuFast}
//         placement="bottomCenter"
//         trigger={["click"]}
//       >
//         <div style={{ position: "relative" }}>
//           {clickedIcon && (
//             <FontAwesomeIcon
//               icon={clickedIcon}
//               style={{
//                 position: "absolute",
//                 zIndex: "4",
//                 top: "0.7rem",
//                 left: "0.8rem",
//               }}
//             />
//           )}
//           <Input
//             style={{
//               paddingLeft: clickedIcon !== undefined ? "2.4rem" : "0.5rem",
//             }}
//             allowClear
//             readOnly={false}
//             defaultValue={iconInputValue}
//             value={filter ?? trimIconName(value)}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//               if (!readonly) onChange(e.target.value);
//               setFilter(e.target.value);
//               setClickedIcon(undefined);
//             }}
//             placeholder="input icon name"
//           />
//         </div>
//       </Dropdown>
//       <Root disabled={disabled}>
//           <Tooltip title={description}>
//             <Select
//                 ref={ref}
//                 bordered={false}
//                 showSearch
//                 value={value}
//                 size="small"
//                 onChange={(newValue) => {
//                   if (!readonly) onChange(newValue);
//                 }}
//                 css={selectCss}
//             >
//               {Object.entries(icons).map(([name, icon]) => {
//                 return (
//                     <Select.Option value={name} key={name}>
//                       <div className="space-x-2">
//                     <span className="w-4 text-center">
//                       <FontAwesomeIcon icon={icon} />
//                     </span>
//                         <span>{trimIconName(name)}</span>
//                       </div>
//                     </Select.Option>
//                 );
//               })}
//             </Select>
//           </Tooltip>
//         </Root> 
//     </Section>
//   );
// });





// MY COMPONENT WHERE I USED GRID
// export const IconField: React.FC<
//   FieldProps<string> & { doubleClickAutofocus?: boolean }
// > = observer(function IconField({
//   disabled,
//   formData: value,
//   uiSchema,
//   onChange,
//   readonly,
//   schema,
//   doubleClickAutofocus,
// }) {
//   const ref = useRef<BaseSelectRef | null>(null);
//   const canvasStore = useContext(CanvasStoreContext);
//   const { i18n } = useLingui();
//   const title = i18n._((uiSchema["ui:title"] as string) || schema.title || "");
//   const description = i18n._(
//     (uiSchema["ui:description"] as string) || schema.description || ""
//   );

//   const [iconInputValue, setIconInputValue] = useState("");
//   const [filter, setFilter] = useState<string | null>();
//   const [clickedIcon, setClickedIcon] = useState<IconProp>();

//   useEffect(() => {
//     setFilter(null);
//   }, [value]);

//   useEffect(() => {
//     if (
//       canvasStore &&
//       canvasStore.shouldFocusContent &&
//       ref.current &&
//       doubleClickAutofocus
//     ) {
//       ref.current?.focus();
//     }
//   }, [ref, doubleClickAutofocus, canvasStore?.shouldFocusContent, canvasStore]);

//   const cellRenderer = ({
//     columnIndex,
//     key,
//     rowIndex,
//     style,
//   }: CellRendererParams) => {
//     const icon = Object.entries(icons).filter(
//       ([name]) => !filter || trimIconName(name).includes(filter)
//     )[rowIndex * 10 + columnIndex];
//     if (!icon) return null;
//     const [name, iconObj] = icon;

//     return (
//       <div
//         key={key}
//         style={{
//           ...style,
//           paddingLeft: "10px",
//         }}
//         onClick={() => {
//           if (!readonly) onChange(iconObj);
//           onChange(trimIconName(name));
//           setIconInputValue(trimIconName(name));
//           setClickedIcon(iconObj);
//         }}
//       >
//         <Tooltip title={trimIconName(name)}>
//           <FontAwesomeIcon icon={iconObj} />
//         </Tooltip>
//       </div>
//     );
//   };

//   return (
//     <Section title={title}>
//       <Dropdown
//         overlay={
//           <Grid
//             style={{ background: "white", overflow: "auto" }}
//             columnCount={10}
//             rowCount={Object?.entries(icons)?.length} // 1946-items
//             cellRenderer={cellRenderer}
//             columnWidth={30}
//             rowHeight={30}
//             height={200}
//             width={320}
//             autoWidth
//           />
//         }
//         placement="bottomCenter"
//         trigger={["click"]}
//       >
//         <div style={{ position: "relative" }}>
//           {clickedIcon && (
//             <FontAwesomeIcon
//               icon={clickedIcon}
//               style={{
//                 position: "absolute",
//                 zIndex: "4",
//                 top: "0.7rem",
//                 left: "0.8rem",
//               }}
//             />
//           )}
//           <Input
//             style={{
//               paddingLeft: clickedIcon !== undefined ? "2.4rem" : "0.5rem",
//             }}
//             allowClear
//             readOnly={false}
//             value={filter ?? value}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//               if (!readonly) onChange(e.target.value);
//               setFilter(e.target.value);
//               setClickedIcon(undefined);
//             }}
//             placeholder="input icon name"
//           />
//         </div>
//       </Dropdown>

//       <Root disabled={disabled}>
//           <Tooltip title={description}>
//             <Select
//                 ref={ref}
//                 bordered={false}
//                 showSearch
//                 value={value}
//                 size="small"
//                 onChange={(newValue) => {
//                   if (!readonly) onChange(newValue);
//                 }}
//                 css={selectCss}
//             >
//               {Object.entries(icons).map(([name, icon]) => {
//                 return (
//                     <Select.Option value={name} key={name}>
//                       <div className="space-x-2">
//                     <span className="w-4 text-center">
//                       <FontAwesomeIcon icon={icon} />
//                     </span>
//                         <span>{trimIconName(name)}</span>
//                       </div>
//                     </Select.Option>
//                 );
//               })}
//             </Select>
//           </Tooltip>
//         </Root> 
//     </Section>
//   );
// });





// ABDULAZIZ SOLUTION
// interface CellRendererParams {
//   key: string;
//   style: React.CSSProperties;
//   columnIndex: number;
//   rowIndex: number;
// }

// export const IconField: React.FC<
//   FieldProps<string> & { doubleClickAutofocus?: boolean }
// > = observer(function IconField({
//   disabled,
//   formData: value,
//   uiSchema,
//   onChange,
//   readonly,
//   schema,
//   doubleClickAutofocus,
// }) {
//   const ref = useRef<BaseSelectRef | null>(null);
//   const canvasStore = useContext(CanvasStoreContext);
//   const { i18n } = useLingui();
//   const title = i18n._((uiSchema["ui:title"] as string) || schema.title || "");
//   const description = i18n._(
//     (uiSchema["ui:description"] as string) || schema.description || ""
//   );

//   const [filter, setFilter] = useState<string>(value || "");
//   const [clickedIcon, setClickedIcon] = useState<IconProp>();
//   const iconsArray = useMemo(() => Object.entries(icons), [icons]);
//   const debouncedSearchString = useDebounce(filter, { wait: 300 });

//   useEffect(() => {
//     if (
//       canvasStore &&
//       canvasStore.shouldFocusContent &&
//       ref.current &&
//       doubleClickAutofocus
//     ) {
//       ref.current?.focus();
//     }
//   }, [ref, doubleClickAutofocus, canvasStore?.shouldFocusContent, canvasStore]);

//   useEffect(() => {
//     console.log("value", value);
//     const findIcon = iconsArray.find(([name, iconObj]) => {
//       return trimIconName(name) === (debouncedSearchString || value);
//     });

//     if (findIcon && !readonly) {
//       if (value != debouncedSearchString)
//         onChange(trimIconName(debouncedSearchString || ""));
//       setClickedIcon(findIcon[1]);
//     }
//   }, [debouncedSearchString]);

//   const cellRenderer =
//     // useCallback(
//     // () =>
//     ({ columnIndex, key, rowIndex, style }: CellRendererParams) => {
//       const icon = iconsArray.filter(
//         ([name]) =>
//           !debouncedSearchString ||
//           trimIconName(name).includes(debouncedSearchString)
//       )[rowIndex * 10 + columnIndex];
//       // if (!icon) return null;
//       // console.log(icon, rowIndex * 10 + columnIndex);
//       if (!icon) return null;
//       const [name, iconObj] = icon;

//       return (
//         <div
//           key={key}
//           style={{
//             ...style,
//             paddingLeft: "10px",
//           }}
//           onClick={() => {
//             setFilter(trimIconName(name));
//           }}
//         >
//           <Tooltip title={trimIconName(name)}>
//             <FontAwesomeIcon icon={iconObj} />
//           </Tooltip>
//         </div>
//       );
//     };
//   //   [debouncedSearchString, readonly, onChange, iconsArray]
//   // );

//   return (
//     <Section title={title}>
//       <Dropdown
//         overlay={
//           <Grid
//             style={{ background: "white", overflow: "auto" }}
//             columnCount={10}
//             rowCount={Math.round(iconsArray.length / 10)} // 1946-items
//             cellRenderer={cellRenderer}
//             columnWidth={30}
//             rowHeight={30}
//             height={200}
//             width={320}
//             autoWidth
//           />
//         }
//         placement="bottomCenter"
//         trigger={["click"]}
//       >
//         <div style={{ position: "relative" }}>
//           {clickedIcon && (
//             <FontAwesomeIcon
//               icon={clickedIcon}
//               style={{
//                 position: "absolute",
//                 zIndex: "4",
//                 top: "0.7rem",
//                 left: "0.8rem",
//               }}
//             />
//           )}
//           <Input
//             style={{
//               paddingLeft: clickedIcon !== undefined ? "2.4rem" : "0.5rem",
//             }}
//             allowClear
//             readOnly={false}
//             value={debouncedSearchString}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//               // if (!readonly) onChange(e.target.value);
//               setFilter(e.target.value);
//               setClickedIcon(undefined);
//             }}
//             placeholder="input icon name"
//           />
//         </div>
//       </Dropdown>
//     </Section>
//   );
// });






// Davrons Solution
// interface CellRendererParams {
//   key: string;
//   style: React.CSSProperties;
//   columnIndex: number;
//   rowIndex: number;
// }

// export const IconField: React.FC<
//   FieldProps<string> & { doubleClickAutofocus?: boolean }
// > = observer(function IconField({
//   disabled,
//   formData: iconName,
//   uiSchema,
//   onChange,
//   readonly,
//   schema,
//   doubleClickAutofocus,
// }) {
//   const inputRef = useRef<HTMLInputElement | null>(null);
//   const canvasStore = useContext(CanvasStoreContext);
//   const { i18n } = useLingui();
//   const title = i18n._((uiSchema["ui:title"] as string) || schema.title || "");
//   const description = i18n._(
//     (uiSchema["ui:description"] as string) || schema.description || ""
//   );
//   const [searchStr, setSearchStr] = useState<string>();
//   const [isInputFocused, setIsInputFocused] = useState(false);
//   useEffect(() => {
//     if (
//       canvasStore &&
//       canvasStore.shouldFocusContent &&
//       inputRef.current &&
//       doubleClickAutofocus
//     ) {
//       inputRef.current?.focus();
//     }
//   }, [
//     inputRef,
//     doubleClickAutofocus,
//     canvasStore?.shouldFocusContent,
//     canvasStore,
//   ]);

//   const selectedIcon = useMemo(() => {
//     return icons[iconName];
//   }, [iconName]);

//   const filteredIcons = useMemo(() => {
//     return Object.entries(icons).filter(
//       ([, icon]) =>
//         !searchStr ||
//         icon.iconName
//           .toLowerCase()
//           .replace("-", " ")
//           .includes(searchStr.replace("-", " ").toLowerCase())
//     );
//   }, [searchStr]);

//   const rowCount = Math.ceil(filteredIcons.length / 10);
//   return (
//     <Section title={title}>
//       <Dropdown
//         visible={isInputFocused}
//         overlay={
//           <Grid
//             style={{ background: "white" }}
//             columnCount={10}
//             rowCount={rowCount} // 1946-items
//             cellRenderer={({
//               columnIndex,
//               key,
//               rowIndex,
//               style,
//             }: CellRendererParams) => {
//               const [name, icon] =
//                 filteredIcons[rowIndex * 10 + columnIndex] || [];
//               if (!icon) return null;

//               return (
//                 <div
//                   key={key}
//                   style={{
//                     ...style,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     cursor: "pointer",
//                   }}
//                   onMouseOver={(e: React.MouseEvent<HTMLDivElement>) => {
//                     e.currentTarget.style.background = "#f0f0f0";
//                   }}
//                   onMouseOut={(e: React.MouseEvent<HTMLDivElement>) => {
//                     e.currentTarget.style.background = "";
//                   }}
//                   onMouseDown={() => {
//                     onChange(name);
//                     inputRef.current?.blur();
//                     setSearchStr("");
//                   }}
//                 >
//                   <Tooltip title={icon.iconName}>
//                     <FontAwesomeIcon icon={icon} />
//                   </Tooltip>
//                 </div>
//               );
//             }}
//             columnWidth={30}
//             rowHeight={30}
//             height={Math.min(200, rowCount * 30)}
//             width={320}
//             autoWidth
//           />
//         }
//         placement="bottomCenter"
//         trigger={["click"]}
//       >
//         <div style={{ position: "relative" }}>
//           {iconName && (
//             <FontAwesomeIcon
//               icon={selectedIcon}
//               style={{
//                 position: "absolute",
//                 zIndex: "4",
//                 top: "0.7rem",
//                 left: "0.8rem",
//               }}
//             />
//           )}
//           <Input
//             style={{
//               paddingLeft: iconName !== undefined ? "2.4rem" : "0.5rem",
//             }}
//             onFocus={() => {
//               setIsInputFocused(true);
//             }}
//             onBlur={() => {
//               setIsInputFocused(false);
//             }}
//             allowClear
//             readOnly={false}
//             value={
//               isInputFocused ? searchStr : selectedIcon.iconName || iconName
//             }
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//               setSearchStr(e.target.value);
//             }}
//             placeholder="input icon name"
//           />
//         </div>
//       </Dropdown>
//     </Section>
//   );
// });



