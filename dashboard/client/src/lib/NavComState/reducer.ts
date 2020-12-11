import * as React from 'react';
import { createContainer } from 'react-tracked';
import { produce } from 'immer';
import { State, NavComActions } from './types';

const initialState: State = {
	com1: {
		active: { kHz: 0, mHz: 0 },
		standby: { kHz: 0, mHz: 0 },
	},
	com2: {
		active: { kHz: 0, mHz: 0 },
		standby: { kHz: 0, mHz: 0 },
	},
	nav1: {
		active: { kHz: 0, mHz: 0 },
		standby: { kHz: 0, mHz: 0 },
	},
	nav2: {
		active: { kHz: 0, mHz: 0 },
		standby: { kHz: 0, mHz: 0 },
	},
	dme1: {
		distance: 0,
	},
};

function reducer(state: State, action: NavComActions): State {
	switch (action.type) {
		case 'SET_COM1_ACTIVE':
      return produce(state, (draft) => {
        const { payload } = action;
				draft.com1.active.kHz = payload.frequency.kHz;
				draft.com1.active.mHz = payload.frequency.mHz;
			});
		case 'SET_COM1_STANDBY':
      return produce(state, (draft) => {
        const { payload } = action;
				draft.com1.standby.kHz = payload.frequency.kHz;
				draft.com1.standby.mHz = payload.frequency.mHz;
			});
		case 'SET_COM1_STANDBY_KHZ':
			return produce(state, (draft) => {
        const { payload } = action;
				draft.com1.standby.kHz = payload.Hz;
			});
		case 'SET_COM1_STANDBY_MHZ':
			return produce(state, (draft) => {
        const { payload } = action;
				draft.com1.standby.mHz = payload.Hz;
			});
		default:
			return state;
	}
}

const useValue = (props?: { initialState?: State }) =>
	React.useReducer(reducer, props?.initialState ?? initialState);

export const {
	Provider: TrackedNavComProvider,
	useTrackedState: useTrackedNavComState,
	useUpdate: useNavComDispatch,
} = createContainer<State, React.Dispatch<NavComActions>, { initialState?: State }>(useValue);
