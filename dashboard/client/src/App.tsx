import * as React from "react";
import { Knob } from "./components/components/Knob";
const { useEffect, useState } = React;

export const sleep = (time: number): Promise<unknown> =>
  new Promise(resolve => {
    setTimeout(() => resolve(), time);
  });

export const App = () => {
  const [knob_1, setKnob_1] = useState(122);
  const [knob_2, setKnob_2] = useState(800);

  return (
    <div className="flex justify-around">
      <Knob step={1} min={117} max={137} resultValue={knob_1} setResultValue={setKnob_1} stopOnEnd/>
      <Knob step={50} min={0} max={950} resultValue={knob_2} setResultValue={setKnob_2} />

    </div>
  );
};
