const name = "Muhammad Saad "
const repoCount = 2

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Muhammad-Saad')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-13,3)
console.log(anotherString);

const newStringOne = "   All in one    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://saadimehar.com/saadi%20mehar"

console.log(url.replace('%20', '-'))

console.log(url.includes('Asad'))

console.log(gameName.split('-'));