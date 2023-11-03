console.log("--------------------------------------------------------------")
console.log("call method")
let user1 = {
    fristName: "Mohammed",
    lastName: "Khalifah"
}
let user2 = {
    fristName: "Foad",
    lastName: "Mansour"
}
let printFullName = function(age){
    console.log(`Hello, ${this.fristName} ${this.lastName}. Your age is ${age}`)
}
// بحدد مين الاوبجكت اللي حتعامل معاه
printFullName.call(user1,22);
printFullName.call(user2,25);

console.log("--------------------------------------------------------------")
console.log("apply method")
// بتعمل نفس وظيقة الكول ميثود لكن ببنمرر العناصر بشكل مختلف
printFullName.apply(user1,[22]);
printFullName.apply(user2,[25]);

console.log("--------------------------------------------------------------")
console.log("Bind method")
// الفرق مابيعملش استدعاء
// ممكن اكتب الارجمنتس وقت الإستدعاء
let newFunction = printFullName.bind(user1,"22")
let newFunction2 = printFullName.bind(user1,)
newFunction()
newFunction2(25)

console.log("--------------------------------------------------------------")
console.log("Arrow function")
let add1 = (num1,num2) => {
    return num1+num2;
}

let add2 = (num1,num2) => {return num1+num2}

let add3 = (num1,num2) => num1+num2;

let result = (num1,num2) => {let result=num1+num2 }

console.log(add1(10,20))
console.log(add2(10,20))
console.log(add3(10,20))
console.log(result(10,20))

console.log("--------------------------------------------------------------")
console.log("IIFEs")
let name = function(n){
    console.log(n)
}("Mohammed Khalifah");
(function(n){
    console.log(n)
})("Mohammed Khalifah 2");


console.log("--------------------------------------------------------------")
console.log("الدوال في الاوبجكت")
let obj = {
    title: "how to write a function in an object",
    function1: function(){
        console.log("First function")
    },
    function2: () => {
        console.log("Second function")

    },
    function3 () {
        console.log("Third function")
    }
}
obj.function1()
obj.function2()
obj.function3()

console.log("--------------------------------------------------------------")
console.log("تمرير ارجمونتس أقل أو اكثر من المطلوب")
function rectangleArea(w,l){
    let a=w*l;
    return a;
}
// المتغير الزاىد حيتاجله
let area = rectangleArea(4,2,5);
console.log("Area for 4 , 2 , 5 is : "+area)

area = rectangleArea(4);
console.log("Area for 4 is : "+area)

console.log("--------------------------------------------------------------")
console.log("القيمة الافتراضية للارجمنتس")
function rectangleArea2(w,l=w){
    let a=w*l;
    return a;
}
area = rectangleArea2(4);
console.log("Area for 4 is : "+area)

console.log("--------------------------------------------------------------")
console.log("rest parameter")
// let studentsNames = function(num1,num2, ...names)
let studentsNames = function(...names){
    let result =""
    for(let i=0;i<names.length;i++){
        result+=(names[i]+" , ")
    }
    return result.slice(0,-2);
}
console.log(studentsNames("Mohammed","Khalifah","Ali","Magdy"))

console.log("--------------------------------------------------------------")
console.log("Spread operator")
let studentsNames2 = function(n1,n2,n3,n4){
    return n1 + " , " + n2 + " , " + n3 + " , " + n4 ;
}
let names2 = ["Mohammed","Khalifah","Ali","Magdy"]
// تفكيك المصفوفة
console.log(studentsNames2(...names2))