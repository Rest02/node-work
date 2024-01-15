const path = require("path")


const filepath = path.join("/public", "dist", "/style", "main.css" )
console.log(path.basename(filepath))
console.log(path.dirname(filepath))
console.log(path.parse(filepath))
console.log(path.resolve("dist"))