import React from 'react';
import ReactDOM from 'react-dom';

// import socket class
// @ts-ignore
import Socket from './socket';


export class SocketConnect extends React.Component {
  state: any;

    constructor(props: any) {
        super(props);

        // state variables
        this.state = {
            connected: false,
        }
    }

    // componentDidMount is a react life-cycle method that runs after the component 
    //   has mounted.
    componentDidMount() {
        // establish websocket connection to backend server.
        let ws = new WebSocket('ws://localhost:9000/ws');

        // create and assign a socket to a variable.
// @ts-ignore
        let socket = this.socket = new Socket(ws);

        // handle connect and discconnect events.
        socket.on('connect', this.onConnect);
        socket.on('disconnect', this.onDisconnect);

        /* EVENT LISTENERS */
        // event listener to handle 'hello' from a server
        socket.on('healtcheck_server', this.healtcheck_server);
    }

    // onConnect sets the state to true indicating the socket has connected 
    //    successfully.
    onConnect = () => {
        this.setState({connected: true});
    }

    // onDisconnect sets the state to false indicating the socket has been 
    //    disconnected.
    onDisconnect = () => {
        this.setState({connected: false});
    }

    // helloFromClient is an event emitter that sends a hello message to the backend 
    //    server on the socket.
    helloFromClient = () => {
        console.log('saying hello...');
// @ts-ignore
        this.socket.emit('healthcheck', { msg: 'hello'});
    }

    // helloFromServer is an event listener/consumer that handles hello messages 
    //    from the backend server on the socket.
    healtcheck_server = (data: any) => {
        console.log('hello from server! message:', data);
    }


    // render returns the JSX (UI elements).
    //   h1 title
    //   button that calls the event emitter helloFromClient.
    render() {
      console.log({ connected: this.state.connected})
        const title = "Go Sockets Tutorial";

        return (
            <div>
                <h1>{title}</h1>
                <hr/>
                <button onClick={this.helloFromClient}>
                    Say Hello to Backend Server
                </button>
            </div>
        )
    }
}