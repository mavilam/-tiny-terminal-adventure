const chalk = require('chalk')

const {sleep} = require('../../utils/jsUtils')

async function bathroomDoor(hasClue) {

  await sleep(1000)

  if (hasClue) {
    console.log(
      chalk.blue.italic('No queda más que ver aquí, estás muy cerca del final.')
    ) 
    return true
  } else {
    console.log(
      chalk.blue.italic('Tu instinto te dice que dentro del armario hay algo necesario, tienes una sensacion similar a la del bastón.')
    ) 
    return false
  }
}

module.exports = {
  execute: bathroomDoor
}
