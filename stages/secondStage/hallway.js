const chalk = require('chalk')

const {sleep, getRandomElement} = require('../../utils/jsUtils')

const quotes = [
  ["Hay varios cuadros de personas, aquí vive alguien.", 
  "En este dos niños pequeños sonríen con mucha energía", 
  "Hay uno con una foto de un perro cachorro, tiene una placa en la correa: 'Excálibur' parece que se llamaba"],
  ["Estas fotos en la pared parecen indicar que esto es la casa de alguien",
  "El primer marco esta acompañado de una foto de dos críos pequeños. Sonreían a la cámara",
  "En esta se ve a un perro con una semana quizá, tiene una placa en la correa 'Excálibur' parece que se llamaba"],]

async function hallway(hasClue) {

  await sleep(1000)

  const choosenQuotes = getRandomElement(quotes) 

  await choosenQuotes.forEach(async element => {
    console.log(
      chalk.yellow(element)
    );
    await sleep(1000)
  });

  console.log(
    chalk.blue.italic('Todo esto te da la sensación de que este lugar te es familiar')
  );

  return true
}

module.exports = {
  execute: hallway
}
