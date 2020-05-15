const chalk = require('chalk')
var CLI = require('clui'),
    Spinner = CLI.Spinner

const {sleep} = require('./jsUtils')

async function printSeveralGreenDots() {
  for (var i = 0 ; i < 3 ; i ++) {
    await sleep(1000)
    console.log(
      chalk.green.bold('.')
    )
  }
}

async function showSpinner() {
  var countdown = new Spinner('Comprobando contraseña...', ['⣾','⣽','⣻','⢿','⡿','⣟','⣯','⣷'])

  countdown.start()
 
  await sleep(3000)

  countdown.stop()
}
 
async function displayCredits() {
  await sleep(4000)

  console.log(
    chalk.magenta.bold.italic('Por la convivencia de robots y humanos.')
  )
  console.log('\n')
  await sleep(3000)

  console.log(
    chalk.magenta.bold('Escrito y desarrollado con ❤️ por Miguel Ávila.')
  )
  console.log('\n')
  await sleep(2000)

  console.log(
    chalk.magenta.bold('Correcciones y asistencia: Sandra Cortijo.')
  )
  
  await sleep(2000)
}

module.exports = {
  printSeveralGreenDots,
  showSpinner,
  displayCredits
}
