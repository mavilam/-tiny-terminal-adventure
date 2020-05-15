const chalk = require('chalk')

const {sleep} = require('../../utils/jsUtils')

async function stick() {
  await sleep(1000)

  console.log(
    chalk.yellow('Vaya, un bastón')
  )

  await sleep(1000)

  console.log(
    chalk.blue.italic('¿Qué es esta energía que te atrae hacia él? Lo coges, claramente es algo importante para tu propósito.')
  )

  await sleep(1000)

  console.log(
    chalk.yellow('Cada vez me es más familiar esta casa...')
  )

  return true
}

module.exports = {
  execute: stick
}
