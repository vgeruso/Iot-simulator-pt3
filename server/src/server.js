import readline from 'readline';

import Server from './app';

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question('Está ativo? [Y/N]: ', (ativo) => {
  let atv;
  switch (ativo) {
    case 'y':
      atv = true;
      break;
    case 'Y':
      atv = true;
      break;
    case 'n':
      atv = false;
      break;
    case 'N':
      atv = false;
      break;
    default:
      break;
  }

  const server = new Server(atv);

  const PORT = 3333;
  console.info(`Server on in ${PORT}`);
  console.log('======================\n');

  server.connet().listen(PORT);
  leitor.close();
});
