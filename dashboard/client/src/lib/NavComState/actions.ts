import { SetCom1StandbyKhz, SetCom1StandbyMhz, Com1SwapActive } from './types';

export const setCom1StandbyKhz = (Hz: number): SetCom1StandbyKhz => ({
	type: 'SET_COM1_STANDBY_KHZ',
	payload: { Hz },
});

export const setCom1StandbyMhz = (Hz: number): SetCom1StandbyMhz => ({
	type: 'SET_COM1_STANDBY_MHZ',
	payload: { Hz },
});

export const com1SwapActive = (): Com1SwapActive => ({
	type: 'COM1_SWAP_ACTIVE',
});
