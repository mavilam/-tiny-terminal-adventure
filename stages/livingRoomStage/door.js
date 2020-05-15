const chalk = require('chalk')

const {sleep} = require('../../utils/jsUtils')

async function initStageDoor(hasClue, hasStick) {

  await sleep(1000)

  if (hasClue && hasStick) {
    console.log(
      chalk.blue.italic('Solo quedan dos habitaciones por mirar, sigamos.')
    ); 
    return true
  } else {
    console.log(
      chalk.blue.italic('Tienes la sensación de que te estas dejando algo, no puedes quitártelo de la cabeza y vuelves a mirar')
    ); 
    return false
  }
}

module.exports = {  
  execute: initStageDoor
}
