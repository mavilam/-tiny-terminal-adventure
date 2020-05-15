const inquirier = require('../../services/inquirier')
const chalk = require('chalk')

const {sleep} = require('../../utils/jsUtils')

const picturesAction = require('./pictures')
const doorAction = require('./door')
const stickAction = require('./stick')
const roomAction = require('./room')

var hasClue = false
var hasStick = false
var completedAction = false

const pictures = "Mirar las fotos de encima de los muebles"
const stick = "Rebuscar entre los objetos"
const room = "Inspecionar la habitación"
const door = "Ir hacia las habitaciones restantes"

const actionMachine = {
  [pictures]: {
    execute: picturesAction.execute,
    executeWithResult: obtainClue
  },
  [room]: {
    execute: roomAction.execute
  },
  [door]: {
    execute: doorAction.execute,
    executeWithResult: completeAction,
  },
  [stick]: {
    execute: stickAction.execute,
    executeWithResult: obtainStick,
  }
}

async function livingRoomStage() {
  await sleep(2000)

  console.log(
    chalk.blue.italic('Entras en el salón. Hay polvo suspendido en el aire.')
  )

  for(;;) {
    const inquiry = await inquirier.runPrompt("action", "list", "Sigamos, ¿Qué hago?", [door, room, stick, pictures]);

    console.log(
      chalk.yellow.italic(`Vamos a ${inquiry.action.toLowerCase()}`)
    )

    var action = actionMachine[inquiry.action]
    const result = await action.execute(hasClue, hasStick)
    if (action.executeWithResult) action.executeWithResult(result)

    await sleep(1000)
    
    if (completedAction) {
      console.log(
        chalk.blue.italic('De las dos que quedan por entrar, una esta medio cerrada y otra abierta de par en par.')
      )
      return
    }
  }
}

function obtainClue(hasObtainedTheClue) {
  if (hasObtainedTheClue) hasClue = true
}

function obtainStick(hasObtainedTheStick) {
  if (hasObtainedTheStick) hasStick = true
}

function completeAction(hasActionFinished) {
  if (hasActionFinished) completedAction = true
}

module.exports = {
  execute: livingRoomStage
}
