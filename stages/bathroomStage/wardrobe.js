const chalk = require('chalk')
const inquirier = require('../../services/inquirier')

const {sleep} = require('../../utils/jsUtils')
const {showSpinner} = require('../../utils/displayUtils')

async function wardrobe() {
  await sleep(1000)

  console.log(
    chalk.blue.italic('El armario del baño tiene un candado con clave. Es una palabra. Estás seguro de que la sabes')
  )

  for(;;) {
    const keyInquiry = await inquirier.runPrompt("key", "input", "Introduce la clave del candado:")

    await showSpinner()

    if (keyInquiry.key.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase() === 'excalibur') {
      console.log(
        chalk.red.bold('Clave correcta')
      )
      break
    }
    
    console.log(
      chalk.red.bold('Clave incorrecta. Prueba otra vez')
    )

    console.log(
      chalk.red.italic('Pista: revisa la información que has recogido anteriormente.')
    )

    await sleep(1000)
  }

  console.log(
    chalk.blue.italic("De entre todas las cosas que hay en el armario, un bote de pastillas capta tu atención. Lo coges.")
  )

  return true
}

module.exports = {
  execute: wardrobe
}
