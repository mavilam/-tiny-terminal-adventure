const chalk = require('chalk')

const {sleep, getRandomElement} = require('../../utils/jsUtils')

const quotes = ["Yo ya he estado aquí antes. Todo empieza a aclararse...",
 "Creo que me empieza todo a encajar, pero me falta alguna pieza. He estado aquí antes..."]

async function room() {
  await sleep(1000)

  console.log(
    chalk.yellow(getRandomElement(quotes))
  )
}

module.exports = {
  execute: room
}