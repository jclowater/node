let fs = require("fs");

let buffer = fs.readFileSync("./input3.txt", "utf-8");
let lines = buffer.split("\n");

lines.forEach(value => value.replace("\n", ""));


let data = []

lines.forEach(value => {
    data.push(value.split(""));
})

let row = 0

let col = 0
let col1 = 0
let col2 = 0
let col3 = 0
let col4 = 0

let numberTrees = 0;
let numberTrees1 = 0;
let numberTrees2 = 0;
let numberTrees3 = 0;
let numberTrees4 = 0;

let row4 = 0;

for (let i = 0; i < data.length - 1; i++) {
    let value = data[i + 1];
    row4 += 2
    let value1 = data[row4]

    col += 1
    col1 += 3
    col2 += 5
    col3 += 7
    col4 += 1


    if (value.length > 0 && (col >= value.length || col1 >= value.length || col2 >= value.length || col3 >= value.length)) {
        while (col >= value.length && value.length > 0 || col1 >= value.length || col2 >= value.length || col3 >= value.length) {
            let map = value.map(value1 => value1);
            map.forEach(value1 => value.push(value1))
        }
    }

    if (value1 != undefined && value1.length > 0 && col4 >= value1.length) {
        while (col4 >= value1.length) {
            let map = value1.map(value2 => value2);
            map.forEach(value2 => value1.push(value2))
        }
    }


    if (data[row] != undefined) {
        if (value[col] === "#") {
            numberTrees++;
        }
        if (value[col1] === "#") {
            numberTrees1++;
        }
        if (value[col2] === "#") {
            numberTrees2++;
        }
        if (value[col3] === "#") {
            numberTrees3++;
        }

        if (value1 != undefined) {

            if (value1[col4] === "#") {
                numberTrees4++;
            }
        }

    }


}

console.log(numberTrees)
console.log(numberTrees1)
console.log(numberTrees2)
console.log(numberTrees3)
console.log(numberTrees4)

let totalTrees = numberTrees * numberTrees1 * numberTrees2 * numberTrees3 * numberTrees4
// console.table(data)
console.log(totalTrees)

