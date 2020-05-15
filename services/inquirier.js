const inquirer = require('inquirer')

async function runPrompt(name, type, msg, checkboxOptions) {
  return inquirer.prompt(createPrompt(name, type, msg, checkboxOptions))
}

function createPrompt(name, type, msg, checkboxOptions) {
  return [
    {
      name: name,
      type: type,
      message: msg,
      choices: checkboxOptions,
      validate: function( value ) {
        if (value.length) {
          return true
        } else {
          return msg
        }
      }
    }
  ]
}

module.exports = {
  runPrompt
}
