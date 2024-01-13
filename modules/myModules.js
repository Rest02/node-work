console.log(module)

const mySecretVariable = "secreto123"

const myWebAddress = "data.com"
const myNumber = 56
const myArray = [1,2,3,4]
const user = {
    name : "kevin",
    lastname : "Friedman"
}

module.exports.myWebAddress = myWebAddress 
module.exports.myNumber = myNumber 
module.exports.myArray = myArray 
module.exports.user = user 

console.log(module)
