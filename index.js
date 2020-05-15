const chalk = require('chalk')
const clear = require('clear')
const Image = require('ascii-art-image')

const inquirier = require('./services/inquirier')
const {sleep} = require('./utils/jsUtils')
const {printSeveralGreenDots, displayCredits} = require('./utils/displayUtils')

const kitchenStage = require('./stages/kitchenStage/kitchenStage')
const hallwayStage = require('./stages/hallwayStage/hallwayStage')
const livingRoomStage = require('./stages/livingRoomStage/livingRoomStage')
const bathroomStage = require('./stages/bathroomStage/bathroomStage')
const bedroomStage = require('./stages/bedroomStage/bedroomStage')
const finalStage = require('./stages/finalStage')

clear()

async function main() {
  console.log(
    chalk.yellow.italic(`... ¿dónde estoy?... ¿qué hago aquí?`)
  )

  await sleep(3000)

  const nameInquiry = await inquirier.runPrompt("name", "input", "Mmmm ¿Cómo me llamaba?")

  console.log(
    chalk.yellow(`Ah sí, ya recuerdo. Me llamo ${nameInquiry.name}`)
  )

  await kitchenStage.execute()
  await hallwayStage.execute()
  await livingRoomStage.execute()
  await bathroomStage.execute()
  await bedroomStage.execute()

  await printSeveralGreenDots()

  await finalStage.execute(nameInquiry.name)

  await sleep(8000)

  let image = new Image({
    filepath: './assets/finalPic.jpg',
    alphabet:'variant4'
  })

  image.write(function(err, rendered){
    console.log(rendered)
  })

  await displayCredits()

}

main()
