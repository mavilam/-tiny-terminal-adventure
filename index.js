const chalk = require('chalk');
const clear = require('clear');

const inquirier = require('./services/inquirier')
const {sleep} = require('./utils/jsUtils')

clear();

async function main() {
  console.log(
    chalk.yellow.italic(`... ¿dónde estoy?... ¿Qué hago aquí?`)
  );

  await sleep(3000)

  const nameInquiry = await inquirier.runPrompt("name", "input", "Mmmm ¿Cómo me llamaba?");

  console.log(
    chalk.yellow(`Ah sí, ya recuerdo. Me llamo ${nameInquiry.name}`)
  );
}

main()
