import * as React from 'react';
import { Knob } from './Knob';
import { useTrackedNavComState, useNavComDispatch } from '../lib/NavComState/reducer';
import { setCom1StandbyKhz, setCom1StandbyMhz, com1SwapActive } from '../lib/NavComState/actions';

export const Com1: React.FC = () => {
	const state = useTrackedNavComState();
	const dispatch = useNavComDispatch();
	const {
		com1: { active, standby },
	} = state;

	function parseDigits(value: number): string {
		const strValue = value.toString();
		if (strValue.length === 2) {
			return '0' + strValue;
		}
		if (strValue.length === 1) {
			return '00' + strValue;
		}

		return strValue;
	}

	return (
		<div>
			<div className="flex flex-row justify-around items-center">
				<div className="text-center text-7xl">
					{parseDigits(active.kHz)}.{parseDigits(active.mHz)}
				</div>
				<button
					className="bg-white rounded-sm w-16 h-12 text-black"
					onClick={() => dispatch(com1SwapActive())}
				>
					{'<'}
				</button>
				<div className="text-center text-7xl">
					{parseDigits(standby.kHz)}.{parseDigits(standby.mHz)}
				</div>
			</div>
			<div className="flex justify-around">
				<Knob
					step={1}
					min={117}
					max={137}
					resultValue={standby.kHz}
					setResultValue={(value) => dispatch(setCom1StandbyKhz(value))}
					knobStep={10}
				/>
				<Knob
					step={25}
					min={0}
					max={950}
					resultValue={standby.mHz}
					setResultValue={(value) => dispatch(setCom1StandbyMhz(value))}
					knobStep={4}
					isInner
				/>
			</div>
		</div>
	);
};
