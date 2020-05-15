const chalk = require('chalk')

const {sleep, getRandomElement} = require('../../utils/jsUtils')

const quotes = ["La persona que vive aquí tiene que querer mucho a su perro, hay más fotos de él pero bastante más crecidito.",
 "Entre fotos de los mismos niños del pasillo, hay bastantes fotos del anterior perro. Quien quiera que viva aquí querer mucho al chucho."]

async function pictures() {

  await sleep(1000)

  console.log(
    chalk.yellow(getRandomElement(quotes))
  );

  await sleep(1000)

  console.log(
    chalk.yellow('Vamos a seguir mirando por aqui...')
  );

  return true
}

module.exports = {
  execute: pictures
}
