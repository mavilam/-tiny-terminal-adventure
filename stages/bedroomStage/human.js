const chalk = require('chalk')

const {sleep} = require('../../utils/jsUtils')

async function human() {
  await sleep(1000)

  console.log(
    chalk.blue.italic("Das la vuelta a la cama y ves a la persona de frente.")
  )

  await sleep(4000)

  console.log(
    chalk.yellow.bold("Es un anciano y tiene pinta de estar sufriendo.")
  )

  await sleep(4000)

  console.log(
    chalk.blue.italic("Al ver su cara sientes que tu actitud hacia él cambia. Te acercas, le das una pastilla del bote y le acercas el bastón.")
  )

  await sleep(4000)

  console.log(
    chalk.blue.italic("El anciano traga y te mira con cara entrañable. Acerca la mano a tu cabeza, toca algo en tu nuca y...")
  )
  return true
}

module.exports = {
  execute: human
}