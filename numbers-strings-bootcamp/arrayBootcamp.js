// 1
/*
containsElement
Skriv en funktion som tar en array och ett element som input och ger true eller false som output beroende på om elementet finns i arrayen.

Exempel
let arr = [1,7,1,0,5]
let element = 1
containsElement(arr, element) // => true
containsElement(arr, -1) // => false
*/

// let arr = [7, 1, 0, 5, 5, 4, 3, 2, 1, 6];
// let element = 1;

// function containsElement(arr, element) {
//   let output = false;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === element) {
//      return output = true;
//     }
//   }
//   let i = 0;
//   console.log("i value when declared:", i);
//   while (i < arr.length) {
//     console.log("i value inside while: ", i);
//     if (arr[i] === element) {
//       return (output = true);
//     }
//     i++;
//   }
//   return output;
// }

// const result = containsElement(arr, element);
// console.log(result);

// reverse
// let arrr = [1, 7, 1, 0, 5];
// reverse(arrr); // => [5,0,1,7,1]

// function reverse(arr) {
//   let result = [];
//   // for (let i = 0; i <= arr.length - 1; i++){
//   //     result.push(arr[arr.length -1 -i])
//   // }
//   for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i]);
//   }
//   console.log(result);
// }

// UNIQUE

// function unique(arr) {
//   let result = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     let x = isThere(result, arr[i]);
//     if (!x) {
//       result.push(arr[i]);
//       // result = [...result, arr[i]]
//     }
//   }
//   console.log(result);
//   return result;
// }

// function isThere(arr, element) {
//   //   for (let i = 0; i <= arr.length - 1; i++) {
//   //     if (arr[i] === element) {
//   //       return true;
//   //     }
//   //   }

//   let i = 0;
//   while (i < arr.length - 1) {
//     if (arr[i] === element) {
//       return true;
//     }
//     i++;
//   }
//   //   for (let num of arr) {
//   //     if (num === element) {
//   //       return true;
//   //     }
//   //   }
//   return false;
// }
// let arr1 = [1, 7, 1, 0, 5, 0, 5, 9, 1, 0, 5, 6];
// unique(arr1); // => [1,7,0,5]

// reverseStrings
// Skriv en funktion som tar en array av strängar som input och ger en ny array som output innehållande alla omvända strängar.
// Exempel
// let names = ["Kalle", "Olof", "Gösta"];
// reverseStrings(names); // => ["ellaK", "folO", "atsöG"]
// reverseStrings(["lol", "100", "omg", ""]); // => ["lol","001", "gmo", ""]

// function reverseStrings(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let reversedString = "";
//       let arrayString = arr[i];
//     // for (let j = arrayString.length - 1; j >= 0; j--){
//     // reversedString +=  arrayString[j];
//     // }
//     for (let j = 0; j < arrayString.length; j++) {
//       reversedString +=  arrayString[arrayString.length - 1 - j];
//     }
//     result.push(reversedString);
//   }
//   console.log(result);
//   return result;
// }

// split
// Skriv en funktion som tar två strängar som input, en text och och en delimiter. Funktionen ska dela upp strängen i olika strängar avgränsade med tecknet i delimiter och sedan ge som output en array med alla strängar.
// Exempel
let str = "Kalle,Olof,Gösta";
split(str, ","); // => ["Kalle", "Olof", "Gösta"]
split("1 6 10 9", " "); // => ["1", "6", "10", "9"]

function split(str, delimiter) {
  let result = [];
  let arrayElement = "";
  let i = 0;
  //   for (let i = 0; i < str.length; i++) {
  //     arrayElement += str[i];
  //     if (str[i+1] === delimiter || str[i] === str[str.length - 1]) {
  //       result.push(arrayElement);
  //       arrayElement = "";
  //     }
  //   }
  while (i < str.length) {
    arrayElement += str[i];
    if (str[i + 1] === delimiter) {
      result.push(arrayElement);
      arrayElement = "";
      i++;
    }
    if (i === str.length - 1) {
      result.push(arrayElement);
    }
    i++;
  }
  // result.push(arrayElement);
  console.log(result);
  return result;
}

// join
// Skriv en funktion som tar en array och en sträng(delimiter) som input. Funktionen ska göra som split fast omvänt, den tar arrayen och bygger upp en ny sträng avgränsade med delimiter.
// Exempel
let arr = ["Kalle", "Olof", "Gösta"];
join(arr, ","); // => "Kalle,Olof,Gösta"
join(["1", "6", "10", "9"], " "); // => "1 6 10 9"

function join(arr, delimiter) {
  let result = "";
  for (i = 0; i < arr.length; i++) {
    if (i === 0) {
      result += arr[i];
    } else {
      result = result + delimiter + arr[i];
    }
  }
  console.log(result);
  return result;
}

// function contains(str , chars){
//     for (let i = 0; i < str.length; i++){

//         let match = true;
//         for (let j = 0; i < chars.length; j++){
//             if (str[i + j] != chars[j]) {
//                 match= false
//             }
//         }
//         if (match) {
//             return true
//         }
//     }

//     return false
// }

// function contains(str, otherString) {
//     for (let i = 0; i < str.length; i++){
//         const sub = substring(str, i, i + otherString.length-1)
//         if (sub == otherString) {
//             return true
//         }
//     }
//     return false
// }

// function substring(text, start, stop) {
//     let output = ''
//     for (let i = start; i <= stop; i++){
//         output += text[i]
//     }
//     return output
// }
