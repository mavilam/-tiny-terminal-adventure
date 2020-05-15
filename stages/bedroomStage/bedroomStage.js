const inquirier = require('../../services/inquirier')
const chalk = require('chalk')

const {sleep} = require('../../utils/jsUtils')

const roomAction = require('./room')
const humanAction = require('./human')

var completedAction = false

const room = "Inspeccionar la habitación"
const human = "Mirar desde otro ángulo a la persona"

const actionMachine = {
  [room]: {
    execute: roomAction.execute
  },
  [human]: {
    execute: humanAction.execute,
    executeWithResult: completeAction,
  },
}

async function bedroomStage() {
  await sleep(2000)

  console.log(
    chalk.blue.italic('Entras en la última habitación que te queda por inspeccionar.')
  )

  await sleep(3000)

  console.log(
    chalk.blue.bold('Hay una persona tumbada en la cama.')
  )

  await sleep(4000)

  console.log(
    chalk.blue.italic('Algo en tus adentros te impide acercarte mucho a la persona.')
  )

  await sleep(2000)

  for(;;) {
    const inquiry = await inquirier.runPrompt("action", "list", "¿Qué hago ahora?", [room, human])

    console.log(
      chalk.yellow.italic(`Voy a ${inquiry.action.toLowerCase()}`)
    )

    var action = actionMachine[inquiry.action]
    const result = await action.execute()
    if (action.executeWithResult) action.executeWithResult(result)

    await sleep(5000)
    
    if (completedAction) {
      console.log(
        chalk.green.bold('Algo pasa en tu interior...')
      )
      return
    }
  }
}

function completeAction(hasActionFinished) {
  if (hasActionFinished) completedAction = true
}

module.exports = {
  execute: bedroomStage
}
