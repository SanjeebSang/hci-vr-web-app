import SocketClient from "./socket-client";


export default class ExperimentMovementNotifier {

    ip = ''
    socketClient = null;
    port = ''

    constructor() {
        this.ip = process.env.REACT_APP_SOCKET_IP;
        this.port = process.env.REACT_APP_SOCKET_PORT;
        this.socketClient = new SocketClient(this.ip, this.port);
    }

    notify(repNumber, movNumber, timeInMillis) {
        let message = `Rep: ${repNumber}, Movement Number: ${movNumber}, startTimeInFuture: ${timeInMillis}`;
        this.socketClient.send(message);
    }

    notifyExperimentHasStarted(timeInMillis) {
        let message = `ExperimentHasStarted: Current Time: ${timeInMillis}`;
        this.socketClient.send(message);
    }
}
