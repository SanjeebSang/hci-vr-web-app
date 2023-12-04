import net from "net"


export default class SocketClient {
    port = null;
    hostname = null;
    client = null;

    constructor(hostname, port) {
        this.hostname = hostname;
        this.port = port;
        try {
            this.setupSocket();
            this.log("Socket Connected.");
        }
        catch (err) {
            this.log("Error while setting up socket.");
        }
    }

    setupSocket() {
        this.client = new net.Socket()
        this.client.connect(this.port, this.hostname, () => {
            console.log("Connected to server")
            })
           this.client.on("data", (data) => {
            console.log(data.toString("utf-8"))
            })
    }

    end() {
        this.client.end();
    }

    send(message) {
        try {
            console.log(`Socket Message: ${message}`);
            this.client.write(`${message}`);
        } catch (err) {
            this.log(`Error while sending socket message!!`);
        }
    }

    log(message) {
        console.log(`Hostname: ${this.hostname}, Post: ${this.port}, ${message}`);
    }

    error(message) {
        console.error(`Hostname: ${this.hostname}, Post: ${this.port}, ${message}`);
    }
}