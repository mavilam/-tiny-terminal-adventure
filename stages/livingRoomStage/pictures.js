const chalk = require('chalk')

const {sleep, getRandomElement} = require('../../utils/jsUtils')

const quotes = ["La persona que vive aquí tiene que querer mucho a su perro, hay más fotos de él pero bastante más crecidito.",
 "Entre algunas fotos de los mismos niños del pasillo, hay bastantes fotos del perro anterios. Quien quiera que viva aquí debe querer mucho al chucho."]

async function pictures() {

  await sleep(1000)

  console.log(
    chalk.yellow(getRandomElement(quotes))
  )

  await sleep(1000)

  console.log(
    chalk.yellow('Vamos a seguir mirando por aquí...')
  )

  return true
}

module.exports = {
  execute: pictures
}
