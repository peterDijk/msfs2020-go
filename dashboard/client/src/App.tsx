import * as React from "react";
import { Knob } from "./components/components/Knob";
const { useEffect, useState } = React;

export const sleep = (time: number): Promise<unknown> =>
  new Promise(resolve => {
    setTimeout(() => resolve(), time);
  });

export const App = () => {
  const [text, setText] = useState("...");

  useEffect(() => {
    sleep(1000).then(res => {
      setText("React Typescript w/ Rollup");
    });
  }, []);

  return (
    <div>
      <Knob step={5} min={0} max={999} />
    </div>
  );
};
