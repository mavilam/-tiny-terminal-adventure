const chalk = require('chalk')

const {sleep, getRandomElement} = require('../../utils/jsUtils')

const quotes = ["Esta casa está un poco descuidada, ¿quién vivirá aquí?... Me están entrando ganas de ordenar",
 "La decoración no es muy moderna. Lo más actual es la típica estantería Billy de Ikea.", 
 "Las plantas están mustias y bastante secas. Voy a regarlas, no puedo verlas así."]

async function initStageRoom() {

  await sleep(1000)

  console.log(
    chalk.yellow(getRandomElement(quotes))
  )
}

module.exports = {
  execute: initStageRoom
}
