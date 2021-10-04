// function fibonacci(input) {
//   let i = 0;
//   let n; // result
//   let oldN = 0;
//   let olderN = 1;

//   while (i < input) {
//     i++;
//     console.log(n);
//     n = olderN + oldN;
//     olderN = oldN;
//     oldN = n;
//   }
// }
// fibonacci(10);

function ticketPrice(age) {
  let price = 20;
  age <= 17 && (price = 10);
  age >= 65 && (price = 15);
  return price;
}

ticketPrice(14);
ticketPrice(24);
ticketPrice(70);
function multi(num1, num2) {
  let j = 0;
  let result = 0;
  while (j < num1) {
    j++;
    result = result + num2;
  }
  return result;
}

multi(4, 5);
multi(3, 4);

// function factorial(num) {
//   let i = 0;
//   let result = 1;
//   while (i < num) {
//     i++;
//     //   result = multi(result, i);
//     let j = 0;
//     //   let result = 0;
//     while (j < result) {
//       j++;
//       result = result + num2;
//     }
//     return result;
//   }
//   return result;
// }
// console.log("factorial of 5: ", factorial(5));
// console.log("factorial of 3: ", factorial(3));

// function factorial(num) {
//   let sum = 1;
//   for (let i = 1; i <= num; i += 1) {
//     sum *= i; // sum = sum * i
//     let product = 0;
//     for (let j = 0; j < sum; j += 1) {
//       product += i;
//     }
//     sum = product;
//   }
//   return sum;
// }

function fib(n) {
  if (n == 1) {
    return 0;
  }
  if (n == 2) {
    return 1;
  }
  return fib(n - 2) + fib(n - 1);
}

fib(3);
fib(5);
fib(8);
// function minOfThree(num1, num2, num3) {
//   let result;

//   if (num1 < num2) {
//     result = num1;
//   } else {
//     result = num2;
//   }

//   if (num3 < result) {
//     result = num3;
//   }
//   return result;
// }
// function maxOfFour(n1, n2, n3, n4) {
//   let result;
//   if (n1 < n2) {
//     result = n2;
//   } else {
//     result = n1;
//   }

//   if (n3 > result) {
//     result = n3;
//   }
//   if (n4 > result) {
//     result = n4;
//   }
//   return result;
// }

// const num1 = 34;
// const num2 = 45;
// const num3 = 10;

// minOfThree(num1, num2, num3);

//*************************** */ REMOVING DUBLICATES /************************ *//

const array = [1, 2, 6, 3, 8, 10, 3, 1, 9, 0];

// SOLUTION 1
const filteredArray = array.filter((num, index) => {
  return array.indexOf(num) === index;
});
// console.log(b);

// SOLUTION 2
// indexOf return -1 when an element doesn't exist.
const b = [];
const len = array.length;
for (let i = 0; i < len; i++) {
  if (b.indexOf(array[i]) === -1) {
    b.push(array[i]);
  }
}
// console.log(b);

// SOLUTION 4
// sorting the array then using a variable to keep track of the previous value. if they don't match then we push the element to the new array
const c = [];
array.sort();
let _temp;
for (let i = 0; i < len; i++) {
  if (array[i] !== _temp) {
    c.push(array[i]);
    _temp = array[i];
  }
}

// console.log(c);

// SOLUTION 5
// creating an object with keys from array, beacuse keys are unique then only unique values are stored.
obj = {};
for (let i of array) {
  obj[i] = true;
}
console.log(obj);
const x = Object.keys(obj);
console.log(x);

// SOLUTON 5
// set only takes unique values
let newSet = [...new Set(array)];
console.log(newSet);

//************************************ REDUCE *************************************/

const reduceArray = [90, 30, 40, 70, 30, 20, 80, 60, 50];
