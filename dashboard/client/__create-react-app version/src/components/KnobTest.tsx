import * as React from "react";
import Knob from 'react-canvas-knob';

const { useEffect, useState } = React;

export const KnobTest: React.FC = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
    <div>value: {value}</div>
    <Knob value={value} onChange={setValue} width={100} />
    </div>
  )
}