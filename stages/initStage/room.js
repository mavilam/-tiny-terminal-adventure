const chalk = require('chalk')

const {sleep, getRandomElement} = require('../../utils/jsUtils')

const quotes = ["Parece que estoy en una cocina.",
 "Este lugar me resulta familiar...", 
 "Tengo la extraña sensación de que en este lugar me siento con más energía ¿Por qué será?"]

async function initStageRoom() {

  await sleep(1000)

  console.log(
    chalk.yellow(getRandomElement(quotes))
  );
}

module.exports = {
  execute: initStageRoom
}
