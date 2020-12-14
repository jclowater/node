'use strict';
let fs = require("fs");
const str = require("assert");

let buffer = fs.readFileSync("./input4.txt", "utf-8");

let lines = buffer.split("\n\n");

let numberValid = 0;

lines.forEach(value => {

    if (value.includes("ecl:") && value.includes("pid:") && value.includes("eyr:")
        && value.includes("hcl:") && value.includes("byr:") && value.includes("iyr:") && value.includes("hgt:")) {

        let byr = value.match(/byr:[0-9][0-9][0-9][0-9]/)
        let year = parseInt(byr.toString().substr(4, 4));
        let byrOk = (year >= 1920 && year <= 2002)

        let iyr = value.match(/iyr:[0-9][0-9][0-9][0-9]/)
        let iyrYear = parseInt(iyr.toString().substr(4, 4));
        let iyrOk = (iyrYear >= 2010 && year <= 2020)

        let eyr = value.match(/eyr:[0-9][0-9][0-9][0-9]/).toString()
        let eyrYear = parseInt(eyr.substr(4, 4));
        let eyrOk = (eyrYear >= 2020 && year <= 2030)

        // let hcl = value.search(/hcl:#[0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f]/)


        var str = "ecl:gry byr:1931 iyr:2017\
  pid:459927933 eyr:2028\
  hgt:67in hcl:#fffffd\
  ";
        var location = str.indexOf("hcl:#")
        var n = str.substr(location, 11);


        let hclOK = false;
        if (value.includes("hcl:#")) {
            hclOK = true
            var location = value.indexOf("hcl:#")
            let hcl = value.substr("hcl:#", 11);
            let hcl1 = hcl.substr(5)
            let hcl2 = hcl1.split("")
            hcl2.forEach(value1 => {
                if (!"1234567890abcdef".includes(value1)) {
                    hclOK = false;
                }
            })
            console.log(hcl)
        }

        let eclOk = value.includes("ecl:amb") || value.includes("ecl:blu") || value.includes("ecl:brn") || value.includes("ecl:gry")
            || value.includes("ecl:grn") || value.includes("ecl:hzl") || value.includes("ecl:oth")


        let pidOk = value.search(/pid:[0-9]{9}/) > 0


        let hgt = value.match(/hgt:[0-9]+[c|i][n|m]/)
        let hgtOk = false
        if (hgt != null && hgt.toString().substr(hgt.length - 3, 2) == 'cm') {
            let cmIndex = hgt.toString().indexOf('cm')

            let hgtValue = hgt.toString().substr(4, cmIndex - 4)
            hgtOk = hgtValue >= 150 && hgtValue <= 193
        }
        if (hgt != null && hgt.toString().substr(hgt.length - 3, 2) == 'in') {
            let inIndex = hgt.toString().indexOf('in')

            let hgtValue = hgt.toString().substr(4, inIndex - 4)
            hgtOk = hgtValue >= 59 && hgtValue <= 76
        }

        if (byrOk && iyrOk && eyrOk && hgtOk && hclOK && eclOk && pidOk) {
            numberValid++
        }

    }
})

console.log(numberValid)