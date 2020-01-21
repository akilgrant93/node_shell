process.stdout.write('prompt > ')
const pwd = require("./pwd.js")
const ls = require("./ls.js")

process.stdin.on('data', (data) =>{
  if (data.toString().trim() === "pwd"){
    process.stdout.write(pwd())
  } else if (data.toString().trim() === "ls"){
    // process.stdout.write(ls())
  }
  process.stdout.write('\nprompt > ')
})
