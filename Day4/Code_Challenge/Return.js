// ---Code Snippet 1 ------

function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');

/* 

console.log  |  hello
console.log  |  Dojo

*/

// ---Code Snippet 2----

function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);

/*
var          |   value
--------------------------
hello        |  15

console.log | hello
console.log | result is 15
  
 */

// ----Code Snippet 3----

function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('x is', result);

/*

var          |   value
--------------------------
numPlus      |  3 > 18


console.log  | num is 3
console.log  | x is 18

*/

// ----Code Snippet 4 - there is a twist----

var num = 15;
console.log(num);
function logAndReturn(num){
   console.log(num);   
   return num;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);

/*
var          |   value
--------------------------
num          |  15
result       |  10

console.log  | 15
console.log  | 10
console.log  | 10
console.log  | 15

*/

// ----Code Snippet 5----

var num = 15;
console.log(num);
function timesTwo(num){
   console.log(num);   
   return num*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);


/*

var          |   value
--------------------------
num          |  15  
result       |  10


console.log  | 15
console.log  | 10
console.log  | 20
console.log  | 15

*/

// ----Code Snippet 6----

function timesTwoAgain(num) {
    console.log('num is', num);
    y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);

/*

var          |   value
--------------------------
y            |  num*2 (16)
result       |  timesTwoAgain(3) + timesTwoAgain(5) 


console.log  | num is 3
console.log  | num is 5
console.log  | result is 16

*/

// ----Code Snippet 7----

function sumNums(num1, num2) {  
    return num1+num2;
 }
 console.log(sumNums(2,3))
 console.log(sumNums(3,5))

 /*

 var          |   value
--------------------------
sumNums       |  (2,3) > (3,5)

console.log  | 5
console.log  | 8 
*/

// ----Code Snippet 8----

function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(printSumNums(2,3))
 console.log(printSumNums(3,5))

 /* 

  var          |   value               var          |   value
--------------------------            --------------------------  
printSumNums   | (2,3) > 5            printSumNums  | (3,5) > 8


console.log  | 2
console.log  ] 5
console.log  | 3
console.log  | 8

*/

// ----Code Snippet 9----

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);

/*

 var          |   value                               var          |   value    
--------------------------                          --------------------------
sum           | num1 + num2 (2,3) = 5                sum           | num1 + num2 (3,5) = 8
                                                     result        | sumNums(2,3) + sumNums(3,5) = 13     


console.log  | sum is 5
console.log  | sum is 8
console.log  | result is 13

*/

// ----Code Snippet 10----

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);

/*

 var          |   value             var          |   value                    var          |   value   
--------------------------         -------------------------------            -------------------------------
sumNums       | (2,3) > 5          sumNums       | (2,1) > 3                  sumNums      | (3,3) > 6


var          |   value             var          |   value                 var          |   value 
-------------------------------    -------------------------------        -------------------------------
sumNums      |  (2,1) > 3          sumNums      |  (2,3) > 5               sumNums     | (3,5) > 8
                                                                           result      | 


console.log  | sum is 5
console.log  | sum is 3
console.log  | sum is 6
console.log  | sum is 3
console.log  | sum is 5
console.log  | sum is 8
console.log  | result is 19

*/