/* Match a Literal String with Different Possibilities */

let carString = "James has two cars. They are BMW and Audi";
let carRegex = /BMW|Audi/
let result = carRegex.test(carString)

console.log(result)
