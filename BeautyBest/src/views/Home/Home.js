import React, { useState, useEffect } from "react";
import { useTransition, a } from "react-spring";
import shuffle from "lodash/shuffle";
import useMeasure from "./useMeasure";
import useMedia from "./useMedia";
import data from "./data";
import "./styles.css";
import "./App.css";
import Login from "./Login.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
export default function Home() {
  // Hook1: Tie media queries to the number of columns
  const columns = useMedia(
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
    [5, 4, 3],
    2
  );
  // Hook2: Measure the width of the container element
  const [bind, { width }] = useMeasure();
  // Hook3: Hold items
  const [items, set] = useState(data);
  // Hook4: shuffle data every 2 seconds
  useEffect(() => void setInterval(() => set(shuffle), 2000), []);
  // Form a grid of stacked items using width & columns we got from hooks 1 & 2
  let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
  let gridItems = items.map((child, i) => {
    const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    const xy = [
      (width / columns) * column,
      (heights[column] += child.height / 2) - child.height / 2,
    ]; // X = container width / number of columns * column index, Y = it's just the height of the current column
    return { ...child, xy, width: width / columns, height: child.height / 2 };
  });
  // Hook5: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, (item) => item.css, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  return (
    <GridContainer className="App">
      <GridItem>
        <header className="App-header">
          <p className="app_Logo">Logo here</p>
          <p>Quote</p>
        </header>
      </GridItem>
      <GridContainer>
        <table className="app_table" id="mytable">
          <tr>
            <td>
              <div
                {...bind}
                class="list"
                style={{ height: Math.max(...heights) }}
              >
                {transitions.map(({ item, props: { xy, ...rest }, key }) => (
                  <a.div
                    key={key}
                    style={{
                      transform: xy.interpolate(
                        (x, y) => `translate3d(${x}px,${y}px,0)`
                      ),
                      ...rest,
                    }}
                  >
                    <div style={{ backgroundImage: item.css }} />
                  </a.div>
                ))}
              </div>
            </td>
            <td>
              <Login />
            </td>
          </tr>
        </table>
      </GridContainer>
      <div className="app_bottom">
        <h1>bottom line</h1>
      </div>
    </GridContainer>
  );
}
