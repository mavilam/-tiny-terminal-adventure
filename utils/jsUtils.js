function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

module.exports = {
  sleep,
  getRandomElement
}