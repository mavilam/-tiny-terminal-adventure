const chalk = require('chalk')

const {sleep} = require('../../utils/jsUtils')

async function initStageDoor(hasClue) {

  await sleep(1000)

  if (hasClue) {
    console.log(
      chalk.blue.italic('Después de escuchar el quejido algo de tu interior te insta a cruzar la puerta.')
    ); 
    return true
  } else {
    console.log(
      chalk.blue.italic('La puerta parece cerrada sin llave, pero hay algo dentro de ti que te impide cruzarla.')
    ); 
    return false
  }
}

module.exports = {  
  execute: initStageDoor
}
