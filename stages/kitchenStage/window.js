const chalk = require('chalk')

const {sleep, getRandomElement} = require('../../utils/jsUtils')

const quotes = ["La ventana va a dar a un habitáculo. Un ligero quejido viene de dentro. Me resulta muy familiar.",
 "La ventana da a otra habitación ¿Qué es este quejido que escucho desde el otro lado de la ventana?"]

async function initStageDoor(hasClue) {

  await sleep(1000)

  console.log(
    chalk.yellow(getRandomElement(quotes))
  )

  console.log(
    chalk.blue('Parece que una fuerza te lleva a salir de esta habitación')
  )

  return true
}

module.exports = {
  execute: initStageDoor
}
