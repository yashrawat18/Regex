/* Use i-flag to ignore case */

let myString = "CODINGisFUN";
let codeRegex = /codingisfun/i;
let result = codeRegex.test(myString);

console.log(result)