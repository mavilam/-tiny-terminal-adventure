const inquirier = require('../../services/inquirier')
const chalk = require('chalk')

const {sleep} = require('../../utils/jsUtils')

const inspectionAction = require('./bathRoomInspection')
const exitAction = require('./bathroomDoor')
const wardrobeAction = require('./wardrobe')

var hasPills = false
var completedAction = false

const wardrobe = "Abrir el armario del baño"
const room = "Inspeccionar el baño"
const exit = "Salir del baño"

const actionMachine = {
  [room]: {
    execute: inspectionAction.execute,
  },
  [wardrobe]: {
    execute: wardrobeAction.execute,
    executeWithResult: obtainPills,
  },
  [exit]: {
    execute: exitAction.execute,
    executeWithResult: completeAction,
  },
}

async function bathroomStage() {
  await sleep(2000)

  console.log(
    chalk.blue.italic('Entras por la que tiene la puerta más abierta. Es el baño.')
  )

  for(;;) {
    const inquiry = await inquirier.runPrompt("action", "list", "¿Qué debería hacer?", [room, wardrobe, exit])

    console.log(
      chalk.yellow.italic(`Voy a ${inquiry.action.toLowerCase()}`)
    )

    var action = actionMachine[inquiry.action]
    const result = await action.execute(hasPills)
    if (action.executeWithResult) action.executeWithResult(result)

    await sleep(1000)
    
    if (completedAction) {
      console.log(
        chalk.blue.italic('Sales y te diriges a la habitación.')
      )
      return
    }
  }
}

function obtainPills(hasObtainedThePills) {
  if (hasObtainedThePills) hasPills = true
}

function completeAction(hasActionFinished) {
  if (hasActionFinished) completedAction = true
}

module.exports = {
  execute: bathroomStage
}
