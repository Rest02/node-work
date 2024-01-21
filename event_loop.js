const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Welcome to the server ");
    return res.end();
  }
  if (req.url == "/about") {
    // blocking code - hilo de ejecucion
    for (var i = 0; i < 100000; i++) {
      console.log(Math.random() * i);
    }

    return res.end("ABOUT PAGE");
  }

  res.end("notfound404");
});

server.listen(3000);
console.log("server puerto 3000");

