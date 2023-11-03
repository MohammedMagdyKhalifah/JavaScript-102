const d = new Date(2023,9,30)
// بترجع اليوم
console.log(d.getDate())
// بترجع ترتيب اليوم من ايام الأسبوع 
console.log(d.getDay())
// بترجع الشهر من ٠ الى ١١ 
console.log(d.getMonth())
// بترجع السنة
console.log(d.getFullYear())
console.log("--------------------------------------------------------------")
console.log("تقريب للأعلى")

let number = Math.ceil(9.12);
console.log(number);
number = Math.ceil(-9.12);
console.log(number);

console.log("--------------------------------------------------------------")
console.log("تقريب للأصغر")
let t = Math.floor(9.12);
console.log(t);
t = Math.floor(-9.12)
console.log(t);

console.log("--------------------------------------------------------------")
console.log("تقريب لأقرب عدد صحيح")
let n = Math.round(9.5678);
console.log(n);
n=Math.round(9.4678);
console.log(n);

console.log("--------------------------------------------------------------")
console.log("القيمة المطلقة");
let x = Math.abs(-20);
console.log(x);

console.log("--------------------------------------------------------------")
console.log("ايجاد اصغر قيمة");
let z = [20,30,1,5,4,6,7,8,38,25,9,15,9]
// ايجاد اصغر قيمة 
// تفكيك للمصفوفة 
z=Math.min(...z)
console.log(z)

console.log("--------------------------------------------------------------")
console.log("ايجاد اكبر قيمة");
let q = [20,30,1,5,4,6,7,8,38,25,9,15,9]
// ايجاد اصغر قيمة 
// تفكيك للمصفوفة 
q=Math.max(...q)
console.log(q)

console.log("--------------------------------------------------------------")
console.log("تحويل النص العشري لرقم");
let s = "14.2"
let f = parseFloat(s)
console.log(typeof f)

console.log("--------------------------------------------------------------")
console.log("تحويل النص الصحيح لرقم");
let r = parseInt("222")
console.log(typeof r)

console.log("--------------------------------------------------------------")
console.log("حذف الجزء العشري");
console.log(Math.trunc(4.22))
console.log(Math.trunc(-4.22))

console.log("--------------------------------------------------------------")
console.log("التحقق هل هذا رقم");
console.log(Number.isInteger(2.3)) // false
console.log(Number.isInteger(2)) // true

console.log("--------------------------------------------------------------")
console.log("التحقق هل هذا ليس رقم");
console.log(isNaN("jbjdsj"));

console.log("--------------------------------------------------------------")
console.log("حساب الأس");
console.log(2**3)
console.log(Math.pow(2,3))

console.log("--------------------------------------------------------------")
console.log("حساب الجذر التربيعي");
console.log(Math.sqrt(36))

console.log("--------------------------------------------------------------")
console.log("التحقق من اشارة الرقم");
console.log(Math.sign(20))
console.log(Math.sign(-20))
console.log(Math.sign(0))
console.log(Math.sign("hb"))

console.log("--------------------------------------------------------------")
console.log("تسهيل قراءة الارقام");
console.log(typeof(222_334_000))
console.log(222_334_000)

console.log("--------------------------------------------------------------")
console.log("hexadecimal");
let e = 0x8787e;
console.log(e)

console.log("--------------------------------------------------------------")
console.log("Octal");
let e2 = 0o16;
console.log(e2)

console.log("--------------------------------------------------------------")
console.log("Binary");
let e22 = 0b1110
console.log(e22)

console.log("--------------------------------------------------------------")
console.log("التحويل بين الأنظمة");
let c = 222;
console.log(c.toString(16))
console.log(c.toString(8))
console.log(c.toString(2))
console.log(c.toString(10))
