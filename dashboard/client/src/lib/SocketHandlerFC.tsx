import * as React from 'react';
import ReactDOM from 'react-dom';

// import socket class
// @ts-ignore
import Socket from './socket';

export const SocketHandler: React.FC = () => {
	const [connected, setConnected] = React.useState(false);
	const [socket, setSocket] = React.useState<Socket>();

	React.useEffect(() => {
		let ws = new WebSocket(
			'ws://' + window.location.hostname + ':' + window.location.port + '/ws',
		);

		setSocket(new Socket(ws));
	}, []);

	React.useEffect(() => {
		if (socket) {
			socket.on('connect', onConnect);
			socket.on('disconnect', onDisconnect);

			/* EVENT LISTENERS */
			// event listener to handle 'hello' from a server
			socket.on('healtcheck_server', healtcheck_server);
		}
	}, [socket]);

	React.useEffect(() => {
		console.log({ connected });
	}, [connected]);

	function onConnect() {
		setConnected(true);
	}

	function onDisconnect() {
		setConnected(false);
	}

	function healtcheck_server(data: any) {
		console.log('hello from server! message:', data);
	}

	function helloFromClient() {
		console.log('saying hello');
		socket.emit('healthcheck', { msg: 'hello' });
	}

	return (
		<div>
			<hr />
			<button onClick={helloFromClient}>Say Hello to Backend Server</button>
		</div>
	);
};
