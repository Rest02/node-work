const os = require("os");

console.log(os.userInfo()); // Mostrar informacion del usuario
console.log(os.uptime()); // Tiempo de la maquina prendida en segundos
console.log(os.platform()); // Muestra el nombre del SO que usamos
console.log(os.totalmem()); // Muestra la memoria RAM que tenemos
console.log(os.freemem()); // Muestra la memoria libre que nos queda

console.table({
  os: os.platform(),
  version: os.release(),
  totalMemory: os.totalmem(),
});
