export type State = {
	com1: {
		active: {
			kHz: number;
			mHz: number;
		};
		standby: {
			kHz: number;
			mHz: number;
		};
	};
	com2: {
		active: {
			kHz: number;
			mHz: number;
		};
		standby: {
			kHz: number;
			mHz: number;
		};
	};
	nav1: {
		active: {
			kHz: number;
			mHz: number;
		};
		standby: {
			kHz: number;
			mHz: number;
		};
	};
	nav2: {
		active: {
			kHz: number;
			mHz: number;
		};
		standby: {
			kHz: number;
			mHz: number;
		};
	};
	dme1: {
		distance: number;
	};
};

export type NavComActions = SetCom1Active | SetCom1Standby | SetCom1StandbyKhz | SetCom1StandbyMhz;

export type SetCom1Active = {
	type: 'SET_COM1_ACTIVE';
	payload: {
		frequency: { kHz: 0; mHz: 0 };
	};
};

export type SetCom1Standby = {
	type: 'SET_COM1_STANDBY';
	payload: {
		frequency: { kHz: 0; mHz: 0 };
	};
};

export type SetCom1StandbyKhz = {
	type: 'SET_COM1_STANDBY_KHZ';
	payload: {
		Hz: number;
	};
};

export type SetCom1StandbyMhz = {
	type: 'SET_COM1_STANDBY_MHZ';
	payload: {
		Hz: number;
	};
};
