1/ //code//
var myLang = "اهلا بالعالم";
var myLang2 = "hello world";
console.log(myLang,myLang2)
//result//
"اهلا بالعالم"
"hello world"

2/ //code//
console.log("I'm awesome");
//result//
"I'm awesome"

3/ a/ //code ..now x initiated//
var x;
console.log ('the value of x is undefined')
console.log(x)
//result//
"the value of x is undefined"
undefined
b/ // now x given an integer value//
var x = 4;
console.log ('the value of x is 4')
console.log(x)
//result//
"the value of x is...."
4

4/ a/ // now y assigned a string value//
var y = "hi rami";
console.log ('the value of y is "hi rami"')
console.log(y)
// result//
"the value of y is \"hi rami\""
"hi rami"
b/ //now y assigned a new string value//
var y = "good morning";
console.log ('the value of y is "good morning"')
console.log(y)
//result//
"the value of y is \"good morning\""
"good morning"

5/
var z = 7.25;
console.log(z)
var a = z;
console.log(Math.round(a))
var b;
if (a > z) {
b = a;
}

else
  {
  b = z;
  }
console.log(b)
// result//
var z = 7.25;
console.log(z)
var a = z;
console.log(Math.round(a))
var b;
if (a > z) {
b = a;
}

else
  {
  b = z;
  }
console.log(b)
6// code//
a/ var myfavor = [];
console.log('my array contains no elements')
console.log(myFavor)
//result//
"my array contains no elements"
[]
b/ var favorPets = ["horse","dog","sheep"];
console.log('my array contains 3 elements')
console.log(favorPets)
favorPets.push("kittens");
console.log(favorPets)
//result//
"my array contains 3 elements"
["horse", "dog", "sheep"]
["horse", "dog", "sheep", "kittens"]
7/ //code//
let myString = "this is the test";
console.log(myString.length)
//result//
16
8/ //code//
var x = 7;
console.log(x)
x = x%3;
console.log(x)
//result//
7
1
