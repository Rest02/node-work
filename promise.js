const { readFile } = require("fs");

const getText = (pathFile) => {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

// getText("./data/four.txt")
//     .then(result=>console.log(result))
//     .then(()=>("./data/first.txt"))
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

async function read() {
  try {
    const result = await getText("./data/first.txt");
    const result2 = await getText("./data/second.txt");
    const result3 = await getText("./data/third.txt");
    const result4 = await getText("./data/four.txt");
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
