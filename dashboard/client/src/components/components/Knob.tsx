import * as React from "react";
import CanvasKnob from 'react-canvas-knob';
import { usePrevious } from "../../lib/usePrevious";

const { useEffect, useState } = React;

interface KnobSettings {
  step: number,
  min: number,
  max: number,
  resultValue: number,
  setResultValue: (value: number) => void,
  stopOnEnd?: boolean,
}

enum Direction {
  CLOCKWISE = 'CLOCKWISE',
  ANTICLOCKWISE = 'ANTICLOCKWISE',
}

export const Knob: React.FC<KnobSettings> = ({ step, min, max, resultValue, setResultValue, stopOnEnd }) => {
  const [knobValue, setKnobValue] = useState(0);

  const getResultValue = (direction: Direction): number => {
    const add = direction === Direction.CLOCKWISE ? step : -step;
    return resultValue + add;
  }

  const prevValue= usePrevious(knobValue);

  useEffect(() => {

    const exception_clock = knobValue < 10 && prevValue > 90;
    const exception_anti = knobValue > 90 && prevValue < 10;

    let _direction;

    if ((exception_clock || knobValue > prevValue) && !exception_anti) {
      _direction = Direction.CLOCKWISE;
    } else {
      _direction = Direction.ANTICLOCKWISE;
    }

    const newResultValue = getResultValue(_direction);
    const setContinuous = newResultValue > max ? min : newResultValue < min ? max : newResultValue;
    
    if (!stopOnEnd) {
      setResultValue(setContinuous);
    } else {
      if (newResultValue <= max && newResultValue >= min) {
        setResultValue(newResultValue);
      }
    }
  }, [knobValue]);
  
  return (
    <div>
      <div>{resultValue}</div>
      <CanvasKnob value={knobValue} onChange={setKnobValue} width={100} height={100} thickness={0.4} cursor={10} bgColor="#000" fgColor="#fff"  />
    </div>
  )
}