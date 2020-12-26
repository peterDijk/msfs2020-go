import React from 'react';
import ReactDOM from 'react-dom';

// import socket class
// @ts-ignore
import Socket from './socket';

export class SocketHandler extends React.Component<{}, { connected: boolean }> {
	socket: Socket;

	constructor(props: any) {
		super(props);
		this.state = {
			connected: false,
		};
	}

	componentDidMount() {
		let ws = new WebSocket(
			'ws://' + window.location.hostname + ':' + window.location.port + '/ws',
		);

		let socket = (this.socket = new Socket(ws));

		socket.on('connect', this.onConnect);
		socket.on('disconnect', this.onDisconnect);

		/* EVENT LISTENERS */
		// event listener to handle 'hello' from a server
		socket.on('healtcheck_server', this.healtcheck_server);
	}

	// onConnect sets the state to true indicating the socket has connected
	//    successfully.
	onConnect = () => {
		this.setState({ connected: true });
	};

	// onDisconnect sets the state to false indicating the socket has been
	//    disconnected.
	onDisconnect = () => {
		this.setState({ connected: false });
	};

	// helloFromClient is an event emitter that sends a hello message to the backend
	//    server on the socket.
	helloFromClient = () => {
		console.log('saying hello...');
		this.socket.emit('healthcheck', { msg: 'hello' });
	};

	// helloFromServer is an event listener/consumer that handles hello messages
	//    from the backend server on the socket.
	healtcheck_server = (data: any) => {
		console.log('hello from server! message:', data);
	};

	render() {
		return (
			<div>
				<hr />
				<button onClick={this.helloFromClient}>Say Hello to Backend Server</button>
			</div>
		);
	}
}
