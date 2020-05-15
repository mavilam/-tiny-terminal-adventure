const chalk = require('chalk')

const {sleep} = require('../../utils/jsUtils')

async function initStageDoor(hasClue) {

  await sleep(1000)

  if (hasClue) {
    console.log(
      chalk.blue.italic('Parece que esta todo visto aquí, sigamos a ver que más hay.')
    ); 
    return true
  } else {
    console.log(
      chalk.blue.italic('Tu cabeza te dice que deberías revisar un poco el entorno, toda pista te vendría bien.')
    ); 
    return false
  }
}

module.exports = {  
  execute: initStageDoor
}
