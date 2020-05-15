const chalk = require('chalk')

const {sleep, getRandomElement} = require('../../utils/jsUtils')

const quotes = [
  ["Hay varios cuadros de personas, aquí vive alguien.", 
  "En este, dos niños pequeños sonríen con mucha energía.", 
  "Hay uno con una foto de un cachorro de perro, tiene una placa en la correa: 'Excálibur'. Se llamaría así."],
  ["Estas fotos en la pared te indican que esto es la casa de alguien.",
  "El primer cuadro es una foto de dos críos pequeños. Sonreían a la cámara.",
  "En esta se ve a un perro con una semana quizá, tiene una placa en la correa: 'Excálibur'. Debe ser su nombre."],]

async function hallway() {

  await sleep(1000)

  const choosenQuotes = getRandomElement(quotes) 

  await choosenQuotes.forEach(async element => {
    console.log(
      chalk.blue.italic(element)
    )
    await sleep(1000)
  })

  console.log(
    chalk.blue.italic('Todo esto te da la sensación de que este lugar te es familiar.')
  )

  return true
}

module.exports = {
  execute: hallway
}
