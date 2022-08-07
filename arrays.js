var age = [4, 5, 6];
console.log(age);

// array index
var number = [34, 443, 44, 55];
console.log(number[1]);

// get element by index
var number = [34, 443, 44, 55];
var num = number[3];
console.log(num);

// value set in array
var number = [34, 443, 44, 55];
number[1] = 333;
number[3] = 7777777;
console.log(number);

// find index of an element
var number = [34, 443, 44, 55];
var position = number.indexOf(12);
console.log(position);//-1 ashbe karon 12 nai array er moddhe


// array push

var number = [43, 34, 121, 455, 666, 2222];
number.push(33333333333);
console.log(number);

// array pop

var number = [43, 34, 121, 455, 666, 2222];
//number.pop();
var element = number.pop();
console.log(number);
console.log(element);

// element add at 1st index
var num = [3, 5, 4];
num.shift();
console.log(num);



