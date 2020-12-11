import { SetCom1StandbyKhz, SetCom1StandbyMhz } from './types';

export const setCom1StandbyKhz = (Hz: number): SetCom1StandbyKhz => ({
	type: 'SET_COM1_STANDBY_KHZ',
	payload: { Hz },
});

export const setCom1StandbyMhz = (Hz: number): SetCom1StandbyMhz => ({
	type: 'SET_COM1_STANDBY_MHZ',
	payload: { Hz },
});
