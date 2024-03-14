// unary operators :
let a = 5;
let result = ++a + --a +6 + --a -2 ;
//           6   +   5 +6 +  4  -2 = 19
console.log(result);

let b = 19;
let result1 = ++b + --b + ++b +8 ;
//            20  + 19  + 20  + 8 = 67
console.log(result1);

let c = 49;
let result2 = ++c + --c -10 + ++c ;
//            50 +  49  -10   + 50  = 139
console.log(result2);

let d = 65;
let result3 = ++d + --d +10 +9;
//           66  + 65 + 10 +9 = 150
console.log(result3);