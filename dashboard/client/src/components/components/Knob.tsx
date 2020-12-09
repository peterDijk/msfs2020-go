import * as React from "react";
import CanvasKnob from 'react-canvas-knob';
import { usePrevious } from "../../lib/usePrevious";

const { useEffect, useState } = React;

interface KnobSettings {
  isInner?: boolean;
  step: number,
  min: number,
  max: number,
  resultValue: number,
  setResultValue: (value: number) => void,
  stopOnEnd?: boolean,
  knobStep: number,
}

enum Direction {
  CLOCKWISE = 'CLOCKWISE',
  ANTICLOCKWISE = 'ANTICLOCKWISE',
}

export const Knob: React.FC<KnobSettings> = ({ step, min, max, resultValue, setResultValue, stopOnEnd, knobStep, isInner }) => {
  const [knobValue, setKnobValue] = useState(0);

  const getResultValue = (direction: Direction): number => {
    const add = direction === Direction.CLOCKWISE ? step : -step;
    return resultValue + add;
  }

  const getDirection = (): Direction => {
    const exception_clock = knobValue < 10 && prevValue > 90;
    const exception_anti = knobValue > 90 && prevValue < 10;

    let _direction;

    if ((exception_clock || knobValue > prevValue) && !exception_anti) {
      _direction = Direction.CLOCKWISE;
    } else {
      _direction = Direction.ANTICLOCKWISE;
    }

    return _direction
  }

  const prevValue= usePrevious(knobValue);

  useEffect(() => {

    const direction = getDirection();
    const newResultValue = getResultValue(direction);
    const setContinuous = newResultValue > max ? min : newResultValue < min ? max : newResultValue;
    
    if (!stopOnEnd) {
      setResultValue(setContinuous);
    } else {
      if (newResultValue <= max && newResultValue >= min) {
        setResultValue(newResultValue);
      }
    }
  }, [knobValue]);

  useEffect(() => {
    const range = max - min;
    console.log({ range });

    const correctedStartValue = resultValue - min;
    const percentage = (correctedStartValue * 100) / range;

    setKnobValue(percentage);

  },[])
  
  return (
    <div className="p-6">
      <CanvasKnob value={knobValue} onChange={setKnobValue} width={200} height={200} thickness={isInner ? 1 : 0.4} cursor={10} bgColor="#000" fgColor="#fff" step={knobStep} displayInput={false} />
    </div>
  )
}