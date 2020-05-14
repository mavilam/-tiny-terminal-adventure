const chalk = require('chalk')

const {sleep, getRandomElement} = require('../../utils/jsUtils')

const quotes = ["Un ligero quejido viene de dentro del habitáculo ¿De qué me suena?",
 "¿Qué es eso que escucho desde el otro lado de la ventana?"]

async function initStageDoor(hasClue) {

  await sleep(1000)

  console.log(
    chalk.yellow(getRandomElement(quotes))
  );

  console.log(
    chalk.blue('Parece que una fuerza te lleva a salir de esta habitación')
  );

  return true
}

module.exports = {
  execute: initStageDoor
}
