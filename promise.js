const { readFile } = require("fs");
const {promisify} =  require("util")

const readFilePromise = promisify(readFile)

// const getText = (pathFile) => {
//   return new Promise(function (resolve, reject) {
//     readFile(pathFile, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(data);
//     });
//   });
// };

// getText("./data/four.txt")
//     .then(result=>console.log(result))
//     .then(()=>("./data/first.txt"))
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

async function read() {
  try {
    const result = await readFilePromise("./data/first.txt", "utf-8");
    const result2 = await readFilePromise("./data/second.txt", "utf-8");
    const result3 = await readFilePromise("./data/third.txt", "utf-8");
    const result4 = await readFilePromise("./data/four.txt", "utf-8");
    console.log(result);
    console.log(result2);
    console.log(result3);
    console.log(result4);
    throw new Error("esto es un error que no se esperaba")
  } catch (error) {
    console.log(error);
  }
}

read();
