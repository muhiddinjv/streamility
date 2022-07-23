import "./virtualized-grid.css";
import { useState, useEffect } from "react";
import { VirtualizedGrid } from "@mierak/react-virtualized-grid";

export default function GridVirtualized() {
//   const [selected, setSelected] = useState([]);
  const [height, setHeight] = useState(20);
  const elements = [...new Array(2000)].map((_, index) => index);

//   function select(e) {
//     if (selected.indexOf(e.target.innerHTML) > -1) {
//       setSelected(selected.filter((item) => item !== e.target.innerHTML));
//     } else {
//       setSelected([...selected, e.target.innerHTML]);
//     }
//   }

  function iconHeight() {
    let cell = document.querySelector(".cell");
    if (cell) {
      setHeight(cell.clientWidth);
    }
  }

  useEffect(() => {
    iconHeight();
    window.addEventListener("resize", iconHeight);
    return () => window.removeEventListener("resize", iconHeight);
  }, []);

  return (
    <>
      {/* <div className="stats">
        <div>Height: {height}</div>
        <div>Selected: {selected + ""}</div>
      </div> */}
      <VirtualizedGrid
        itemCount={elements.length}
        rowHeight={height}
        cellWidth={50}
        gridGap={5}
        gridHeight={"calc(100vh - 26px)"}
        prerenderScreens={30}
      >
        {(index) => (
          <div>
          {elements[index]}
          </div>
        )}
      </VirtualizedGrid>
    </>
  );
}


