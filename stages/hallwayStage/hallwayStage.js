const inquirier = require('../../services/inquirier')
const chalk = require('chalk')

const {sleep} = require('../../utils/jsUtils')

const hallwayAction = require('./hallway')
const doorAction = require('./door')

var hasClue = false
var completedAction = false

const hallway = "Mirar los cuadros de las paredes"
const door = "Seguir adelante"

const actionMachine = {
  [hallway]: {
    execute: hallwayAction.execute,
    executeWithResult: obtainClue
  },
  [door]: {
    execute: doorAction.execute,
    executeWithResult: completeAction,
  },
}

async function hallwayStage() {

  await sleep(2000)

  console.log(
    chalk.blue.italic('Un corto pasillo te queda por delante.')
  );

  for(;;) {
    const inquiry = await inquirier.runPrompt("action", "checkbox", "¿Qué hago ahora?", [door, hallway]);

    console.log(
      chalk.yellow.italic(`Debería a ${inquiry.action}`)
    );

    var action = actionMachine[inquiry.action]
    const result = await action.execute(hasClue)
    if (action.executeWithResult) action.executeWithResult(result)

    await sleep(1000)
    
    if (completedAction) {
      console.log(
        chalk.blue.italic('Sales del pasillo y parece que ves un salón delante tuya.')
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
  execute: hallwayStage
}
