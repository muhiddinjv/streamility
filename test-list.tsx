{
  /* import { AutoSizer, List } from "react-virtualized";
import React from "react";

const ITEMS_COUNT = 98;
const ITEM_SIZE = 100;

interface TestListParams {
  rowCount: number;
  rowHeight: number;
  rowRenderer: number;
}

// Render your list
export const TestList = () => (
  <AutoSizer>
    {({ height, width }) => {
      const itemsPerRow = Math.floor(width / ITEM_SIZE);
      const rowCount = Math.ceil(ITEMS_COUNT / itemsPerRow);

      return (
        <List
          className="List"
          width={width}
          height={height}
          rowCount={rowCount}
          rowHeight={ITEM_SIZE}
          rowRenderer={({ index, key, style }) => {
            const items = [];
            const fromIndex = index * itemsPerRow;
            const toIndex = Math.min(fromIndex + itemsPerRow, ITEMS_COUNT);

            for (let i = fromIndex; i < toIndex; i = i + 1) {
              items.push(
                <div className="Item" key={i}>
                  Item {i}
                </div>
              );
            }

            return (
              <div className="Row" key={key} style={style}>
                {items}
              </div>
            );
          }}
        />
      );
    }}
  </AutoSizer>
);

*/
}
