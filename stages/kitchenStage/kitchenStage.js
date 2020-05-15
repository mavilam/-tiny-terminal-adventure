const inquirier = require('../../services/inquirier')
const chalk = require('chalk')

const {sleep} = require('../../utils/jsUtils')

const roomAction = require('./room')
const doorAction = require('./door')
const windowAction = require('./window')

var hasClue = false
var completedAction = false

const window = "Asomarme a la ventana"
const door = "Acercarme a la puerta"
const room = "Rastrear la zona"

const actionMachine = {
  [window]: {
    execute: windowAction.execute,
    executeWithResult: obtainClue
  },
  [room]: {
    execute: roomAction.execute,
  },
  [door]: {
    execute: doorAction.execute,
    executeWithResult: completeAction,
  },
}

async function initStage() {

  await sleep(2000)

  console.log(
    chalk.blue.italic('Parece que estás en una habitación...')
  );

  for(;;) {
    const inquiry = await inquirier.runPrompt("action", "checkbox", "¿Qué debería hacer?", [room, door, window]);

    console.log(
      chalk.yellow.italic(`Voy a ${inquiry.action}`)
    );

    var action = actionMachine[inquiry.action]
    const result = await action.execute(hasClue)
    if (action.executeWithResult) action.executeWithResult(result)

    await sleep(1000)
    
    if (completedAction) {
      console.log(
        chalk.blue.italic('Abres la puerta y dejas atrás la habitación')
      );
      return;
    }
  }
}

function obtainClue(hasObtainedTheClue) {
  if (hasObtainedTheClue) hasClue = true
}

function completeAction(hasActionFinished) {
  if (hasActionFinished) completedAction = true
}

module.exports = {
  execute: initStage
}
