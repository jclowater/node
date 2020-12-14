
let fs = require("fs");

let buffer = fs.readFileSync("./input.txt",  "utf-8");
let lines = buffer.split("\n");


let numberValid = 0;
lines.forEach(value => {
    let lowest = parseInt(value.substr(0,value.indexOf("-")))
    let highest = parseInt(value.substr(value.indexOf("-") +1,value.indexOf(" ") -1 ))

    let letter = value.substr(value.indexOf(":") -1, 1)
    let content = value.substr(value.indexOf(":") + 1).trim()

    let length = content.split("").filter(value1 => value1 === letter).length;

    let newContent = content.split("");

    console.log(newContent)

    let string = newContent[lowest -1];
    let string1 = newContent[highest -1];



    if ((newContent[highest -1] === letter && newContent[lowest -1] != letter) ){
        numberValid ++;
    }

    // if (length >= lowest && length <= highest){
    //     numberValid ++;
    // }

})
console.log(numberValid)

