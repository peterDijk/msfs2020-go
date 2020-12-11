import * as React from 'react';
import { Knob } from './Knob';
import { useTrackedNavComState, useNavComDispatch } from '../lib/NavComState/reducer';
import { setCom1StandbyKhz, setCom1StandbyMhz } from '../lib/NavComState/actions';

export const Com1: React.FC = () => {
	const state = useTrackedNavComState();
	const dispatch = useNavComDispatch();
	const {
		com1: { active, standby },
	} = state;

	return (
		<div>
			<div className="text-center text-7xl">
				{standby.kHz}.{standby.mHz}
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
