const chalk = require('chalk')

const {sleep} = require('../utils/jsUtils')

async function finalStage(name) {
  await sleep(5000)

  console.log(
    chalk.green.bold(`Empiezas a recordar todo. No te llamas ${name}, te llamas Pepper`)
  )

  await sleep(8000)

  console.log(
    chalk.green.bold("Eres el robot encargado de cuidar de este anciano. Estabas cargándote en la cocina y todas las sensaciones que has sentido, el poder abrir una puerta, el atraerte un objeto... son debidas a la proxemia y a tus datos sobre ellos")
  )

  await sleep(11000)

  console.log(
    chalk.green.bold("Pero el estado de tus piezas deja que desear y tienes parte de tu memoria RAM fuera de tu carcasa a medio conectar. Esto provoca que no puedas acceder a registros de tu memoria.")
  )

  await sleep(11000)

  console.log(
    chalk.white.italic("Anciano: 'Otra vez me vuelves a salvar. ¿Qué haría yo sin ti?'")
  )

  await sleep(8000)

  console.log(
    chalk.magenta.italic("Pepper estuvo con el anciano hasta que su hardware resistió.")
  )

  await sleep(4000)

  console.log(
    chalk.magenta.italic("Una vez que estuvo deteriorado y tras el plan del gobierno 'Asistencia robótica para nuestros mayores' su memoria fue transferida a un nuevo hardware.")
  )

  await sleep(8000)

  console.log(
    chalk.magenta.italic("Pepper sigue cuidando del anciano a día de hoy.")
  )
}

module.exports = {
  execute: finalStage
}