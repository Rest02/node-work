const http = require("http")

http.createServer((request, response) => {
    response.write("Hello World")
    response.end()
}).listen(3000)

console.log("Servidor escuchando en el puerto 3000")