import * as React from 'react';
import { Knob } from './components/Knob';
import { SocketHandler } from './lib/SocketHandlerFC';
import { TrackedNavComProvider } from './lib/NavComState/reducer';
import { Com1 } from './components/Com1';
const { useEffect, useState } = React;

export const sleep = (time: number): Promise<unknown> =>
	new Promise((resolve) => {
		setTimeout(() => resolve(), time);
	});

export const App = () => {
	return (
		<TrackedNavComProvider>
			<SocketHandler />
			<Com1 />
		</TrackedNavComProvider>
	);
};
