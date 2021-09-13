import net from 'net';

class Server {
  constructor(ativo) {
    this.ativo = ativo;
  }

  connet() {
    return net.createServer((con, err) => {
      if (err) {
        console.error(err);
      }
      console.info('-V- Cliente connected -V-\n');
      if (this.ativo) {
        con.write('Temperatura_1 ATIVADO 30');
        this.getInfo(con);
      } else {
        con.write('Temperatura_1 DESATIVADO');
      }
    });
  }

  getInfo(con) {
    setInterval(() => {
      con.write(`${Math.random()}°`);
    }, 30000);

    con.on('end', () => {
      console.info('-V- Client disconnected -V-\n');
    });
  }
}

export default Server;
