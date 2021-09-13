import net from 'net';

class Client {
  constructor(address) {
    this.address = address;
  }

  connect() {
    const c = net.createConnection({
      host: this.address.ip,
      port: this.address.port,
    });

    c.on('data', (data) => {
      console.info(data.toString());
    });

    return c;
  }
}

export default Client;
