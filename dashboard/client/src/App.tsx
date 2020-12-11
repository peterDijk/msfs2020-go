import * as React from 'react';
import { Knob } from './components/Knob';
import { SocketHandler } from './lib/SocketHandler';
import { TrackedNavComProvider } from './lib/NavComState/reducer';
const { useEffect, useState } = React;

export const sleep = (time: number): Promise<unknown> =>
	new Promise((resolve) => {
		setTimeout(() => resolve(), time);
	});

export const App = () => {
	return (
		<TrackedNavComProvider>
			<SocketHandler />
		</TrackedNavComProvider>
	);
};
