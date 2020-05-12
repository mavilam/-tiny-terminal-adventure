const inquirer = require('inquirer');

async function runPrompt(name, type, msg) {
  return inquirer.prompt(createPrompt(name, type, msg));
}

function createPrompt(name, type, msg) {
  return [
    {
      name: name,
      type: type,
      message: msg,
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return msg;
        }
      }
    }
  ]
}

module.exports = {
  runPrompt
}
