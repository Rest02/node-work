const EventEmitter = require("events")

const customEmmiter = new EventEmitter()

customEmmiter.on("response", (data, seconData) => { 
    console.log("received")
    console.log(data)
    console.log(seconData)

})

customEmmiter.emit("response", "Hello world", [1,2,3])
