const chalk = require('chalk')

const {sleep, getRandomElement} = require('../../utils/jsUtils')

const quotes = ["La ducha parece estar preparada para una persona con poca movilidad.",
 "Hay agarraderas por todos los lados. Este baño está diseñado con política anti resbalones."]

async function bathRoomInspection() {

  await sleep(1000)

  console.log(
    chalk.yellow(getRandomElement(quotes))
  );
}

module.exports = {
  execute: bathRoomInspection
}
