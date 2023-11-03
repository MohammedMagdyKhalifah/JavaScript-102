let colors = ["red","green","blue"]
// لكل عنصر في المصفوفة
colors.forEach(function (currentValue,index,array){
    console.log(index, currentValue)
})

console.log("--------------------------------------------------------------")
console.log("some")
let ages = [11,13,26,15,12]
console.log(ages)
// لو عنصر واحد على الأقل تحقق
let hasAdult = ages.some(function(element,index,array){
    return element>=18;
})
console.log(hasAdult)

// لو كل العناصر بتحقق الشرط
console.log("--------------------------------------------------------------")
console.log("every")
let ages2 = [21,23,25,27,22]
console.log(ages2)
let areAlladult = ages2.every(function(element,index,array){
    return element>=18;
})
console.log(areAlladult)

console.log("--------------------------------------------------------------")
console.log("includes")
let colors2 = ["red","green","blue"]
console.log(colors2)
let isContaidRed = colors2.includes("red");
console.log(isContaidRed);
console.log("includes , 1")
isContaidRed = colors2.includes("red",1);
console.log(isContaidRed);

console.log("--------------------------------------------------------------")
console.log("indexOf")
let colors3 = ["red","green","blue","green"]
let indexOfgreen = colors3.indexOf("green")
console.log(colors3)
console.log(indexOfgreen) 

console.log("--------------------------------------------------------------")
console.log("lastIndexOf")
let colors4 = ["red","blue","green","blue","green"]
let lastIndexOfBlue = colors4.lastIndexOf("blue")
console.log(colors4)
console.log(lastIndexOfBlue)

console.log("--------------------------------------------------------------")
console.log("findIndex")
let colors5 = ["red","blue","green","blue","green"]
// اول عنصر يطابق الشرط
let findIndexGreen = colors5.findIndex((value)=>{return value=="green"});
console.log(colors5)
console.log(findIndexGreen)

console.log("--------------------------------------------------------------")
console.log("find")
let numbers = [11,7,9,15]
let element = numbers.find(function (element,index,array){
    return element%3 ==0;
})
console.log(numbers)
console.log("لو يقبل القسمة على ٣")
console.log(element)

console.log("--------------------------------------------------------------")
console.log("filter")
let numbers2 = [2,3,7,4,9]
let evenNumbers = numbers2.filter(function(element,index,array){
    return element%2 == 0
})
console.log(numbers2)
console.log(evenNumbers)

console.log("--------------------------------------------------------------")
console.log("concat")
let primaryColors = ["red","yellow","blue"]
let secoundaryColors = ["green","orange","voilet"]
let allColor = primaryColors.concat(secoundaryColors)
console.log("primaryColors "+primaryColors)
console.log("secoundaryColors "+secoundaryColors)
console.log("allColor "+allColor)

console.log("--------------------------------------------------------------")
console.log("slice")
let fruits = ['apple', 'banana','cherry','date']
let sliceFruit = fruits.slice(1,3);
console.log(fruits)
console.log("fruits.slice(1,3)")
console.log(sliceFruit)

console.log("--------------------------------------------------------------")
console.log("splice")
let animals = ['cat', 'dog', 'elephant' ,"monkey","goat","cow"];
console.log(animals)
console.log("splice(2,2,'zebra')")
animals.splice(2,2,'zebra');
console.log(animals)

console.log("--------------------------------------------------------------")
console.log("join")
let colors6 = ["red", "white", "black"]
// تحول المصوفة لنص
let colorString = colors6.join(", ");
console.log(colors6)
console.log(colorString)

console.log("--------------------------------------------------------------")
console.log("sort")
let scores = [5,8,2,9,4];
console.log(scores)
scores.sort()
console.log(scores)

console.log("--------------------------------------------------------------")
console.log("reverse")
let letters = ['a','b','c','d'];
console.log(letters)
letters.reverse();
console.log(letters)

console.log("--------------------------------------------------------------")
console.log("map")
// لو عايز اعمل تعديل على نسخة من المصفوفة بدون التغير على الأصلية
let numbers3 = [3,6,9]
let squaredNumbers = numbers3.map(function(element,index,array){
    return element*element;
})
console.log(numbers3)
console.log("تربيع")
console.log(squaredNumbers)

console.log("--------------------------------------------------------------")
console.log("split")
// فصل النص لمصفوفة
let strcolors = "red blue green black white"
let colors7 = strcolors.split(" ")
console.log(strcolors)
console.log(colors7)
colors7 = strcolors.split(" ",3)
console.log("strcolors.split( , 3)")
console.log(colors7)

console.log("--------------------------------------------------------------")
console.log("reduce")
let numbers4 = [2,4,1,3,5]
let total = numbers4.reduce(function(previousValue, currentValue,index,array){
    // بيبدا من اندكس رقم ١ 
    return previousValue+currentValue
})
console.log(numbers4)
console.log(total)


