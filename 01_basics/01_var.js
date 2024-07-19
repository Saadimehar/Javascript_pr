const accId = 14453
let accEmail = "saad123@gmail.com"
var accPassword = "12345"
accCity = "Wah Cantt"
let accState

//accId = 2 //not allowed

accEmail = "abc@gmail.com"
accPassword = "21212121"
accCity = "ISB"

console.log(accId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log([accId,accEmail,accPassword,accCity,accState]);