const pwd = require("./pwd.js")
const fs = require('fs');

module.exports = process.stdin.on("data", data => {
  const cmd = data.toString().trim()
  if (cmd === "ls"){
    fs.readdir(pwd(), "utf8", (err, files) => {
      if(err) {
        throw err
      } else {
        process.stdout.write(files.join("\n"))
      }
    })
  }
})
