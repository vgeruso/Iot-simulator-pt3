import readline from 'readline';
import fs from 'fs';

import Client from './app';

let lines;
fs.readFile('./src/devices/lista_dispositivos.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  lines = data.split('\n');
});

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question(
  'conecte em um dispositivo usando "SEU_NOME CONECTAR NOME_DISPOSITIVO": ',
  (dispositivos) => {
    const dispositivoNames = dispositivos.split(' ')[2];
    let address;
    lines.forEach((line) => {
      const infosLine = line.split(' ');
      const infos = {
        name: infosLine[0],
        ip: infosLine[1],
        port: infosLine[2],
      };
      if (dispositivoNames === infos.name) {
        address = infos;
      }
    });

    if (address) {
      const client = new Client(address);

      client.connect();
    }

    leitor.close();
  }
);
