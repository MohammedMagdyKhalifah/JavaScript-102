function sum(firstNumber,secondNumber){
    return firstNumber + secondNumber;
}
function sub(firstNumber,secondNumber){
    return firstNumber - secondNumber;
}

function operation(firstNumber,secondNumber,opCallback){
    // opCallback هي داللة
    // callback دالة ترسل لدالة
    return `[{{${opCallback(firstNumber,secondNumber)}}}]`
}
function mul (firstNumber,secondNumber){
    return firstNumber*secondNumber;
}
// برسل الدالة كمتغير عشان احفظ على التنسيق
console.log(operation(22,33,sum))
console.log(operation(22,33,sub))
console.log(operation(22,10,mul))

console.log("--------------------------------------------------------------")
console.log(operation(10,20,(f,s) =>{
    return f/s;
}))
console.log("--------------------------------------------------------------")
const sum2 = (f,s) => f+s;
console.log(operation(22,33,sum2))

console.log("--------------------------------------------------------------")
function format(message, formatCallback){
    return formatCallback(message);
}
function htmlFormat(message){
    return `<div>${message}</div>`
}
function jsonFormat(message){
    return `{"message": "${message}"}`
}
console.log(format("Welcome to javaScript",htmlFormat))
console.log(format("Welcome to javaScript",jsonFormat))
