// reverse
// let arr = [1,7,1,0,5]
// reverse(arr) // => [5,0,1,7,1]

// function reverse(arr) {
//     let result = []
//     // for (let i = 0; i <= arr.length - 1; i++){
//     //     result.push(arr[arr.length -1 -i])
//     // }
//     for (let i = arr.length - 1; i >= 0; i--){
//         result.push(arr[i])
//     }
//     console.log(result)

// }

// UNIQUE

let arr1 = [1, 7, 1, 0, 5, 0, 5];
unique(arr1); // => [1,7,0,5]

function isThere(arr, element) {
  let isThere = false;
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === element) {
      return (isThere = true);
    }
  }
  return isThere;
}

function unique(arr) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    const x = isThere(result, arr[i]);
    if (!x) {
      result.push(arr[i]);
    }
  }
  console.log(result);
}

const code = ".... . -.--   .--- ..- -.. .";
morsCode(code);
function morsCode(codeInput) {
  let code = trimStart(codeInput);
  code = trimEnd(code);
  let message = "";
  let letters = "";
  let chars = "";
  let i = 0;
  while (i < code.length) {
    if (code[i] === " " && code[i + 1] === " " && code[i + 2] === " ") {
      letters += "h";
      message += letters + " ";
      letters = "";
      chars = "";
      i++;
      i++;
    } else if (code[i] === " ") {
      //letters += MORSE_CODE[chars]
      letters += "h";
      chars = "";
    } else {
      chars += code[i];
    }
    i++;
  }
  letters += "h";
  message += letters;
  console.log(message);
  return message;
}

function trimStart(str) {
  let output = "";
  let val = " ";
  let i = 0;
  while (i < str.length) {
    if (str[i] === val) {
      i++;
    } else {
      val = true;
      output += str[i];
      i++;
    }
  }
  return output;
}
function trimEnd(str) {
  let output = "";
  let val = " ";
  let i = str.length - 1;
  while (i >= 0) {
    if (str[i] === val) {
      i--;
    } else {
      val = true;
      output += str[i];
      i--;
    }
  }
  return output;
}

const code = " .  . ";
morsCode(code);
function morsCode(codeInput) {
  // let code = codeInput.trimStart()
  //  code = codeInput.trimEnd()
  let message = "";
  let letters = "";
  let chars = "";
  let i = 0;
  while (i < code.length) {
    if (i === 0 && code[i] == " ") {
      i++;
    }
    if (i === code.length - 1 && code[code.length - 1] === " ") {
      i++;
    } else {
      if (code[i] === " " && code[i + 1] === " " && code[i + 2] === " ") {
        letters += "E";
        message += letters + " ";
        letters = "";
        chars = "";
        i++;
        i++;
      } else if (code[i] === " " && code[i + 1] === " ") {
        i++;
      } else if (code[i] === " ") {
        //letters += MORSE_CODE[chars]
        letters += "E";
        chars = "";
      } else {
        chars += code[i];
      }
      i++;
    }
  }
  letters += "E";
  message += letters;
  console.log(message);
  return message;
}

const minArray = [200, 10, 2, 4, 0, -2, 50, -50];
min(minArray);
function min(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  console.log(min);
  return min;
}

const val1 = 10;
const val2 = 15;
const val3 = 5;
maxOfThree(val1, val2, val3);
function maxOfThree(num1, num2, num3) {
  let max = num1;
  if (max < num2) {
    max = num2;
  }
  if (max < num3) {
    max = num3;
  }

  console.log(max);
  return max;
}

split("Kalle,Olof,Gösta", ","); // => ["1", "6", "10", "9"]

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

ownSplit("Kalle,Olof,Gösta", ","); // => ["1", "6", "10", "9"]
function ownSplit(str, del) {
  let array = [];
  let temp = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === del) {
      array.push(temp);
      temp = "";
    }
    if (char !== del) {
      temp = temp + char;
    }
  }
  array.push(temp);
  console.log(array);
}

let arr5 = ["Kalle", "Olof", "Gösta", "nio"];
let delimeter = ",";

function ownJoin(arr, delimeter) {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      str = str + arr[i];
    } else {
      str = str + arr[i] + delimeter;
    }
  }
  console.log(str);
}
ownJoin(arr5, delimeter);

// repeat
// Skriv en funktion som tar en sträng och ett number som input och repeterar strängen så många gånger som talet som output.

function repeat(text, repetitions) {
  let output = "";
  for (let i = 0; i < repetitions; i++) {
    output += text;
  }
  console.log(output);
  return output;
}
// Exempel
let text = "hello";
let num = 3;
repeat(text, 3); // => "hellohellohello"
repeat("omg", 5); // => "omgomgomgomgomg"

// containsChar
// Skriv en funktion som tar en sträng och ett tecken som input och ger true eller false som output beroende på om tecknet finns i strängen.

function containsChar(text, character) {
  let result;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === character) {
      return (result = true);
    }
  }
  result = false;
  console.log(result);
}
// Exempel
let str = "Hello world";
let char = "o";
containsChar(str, char); // => true
containsChar(str, "x"); // => false

// indexOfChar
// Skriv en funktion som tar en sträng och ett tecken som input och ger positionen för det första förekomna tecknet som output och -1 om tecknet inte finns.

function indexOfChar(text, character) {
  let index = -1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === character) {
      return (index = i);
    }
  }
  console.log(index);
}
// Exempel
let strIndex = "Hello world";
let charIndex = "o";
indexOfChar(strIndex, charIndex); // => 4
indexOfChar(str, "x"); // => -1

// substring
// Skriv en funktion som tar en sträng och två tal som input, och ger en ny sträng med alla tecken mellan talen.

function substring(text, start, stop) {
  let output = "";
  for (let i = start; i <= stop; i++) {
    output += text[i];
  }
  console.log(output);
}
// Exempel
let strSub = "Hello world";
let start = 1;
let stop = 4;
substring(strSub, start, stop); // "ello"
substring(strSub, 0, 3); // Hell

// contains
// Skriv en funktion som tar två strängar som input och ger true eller false som output beroende på om den ena strängen innehåller den andra.

function contains(str, otherString) {
  let output;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === otherString[0]) {
      output = doAllCharsMatch(str, otherString, i);
    }
  }

  console.log(output);
}

function doAllCharsMatch(str1, str2, start) {
  let output = true;

  for (let j = 0; j < str2.length; j++) {
    if (str1[start + j] !== str2[j]) {
      output = false;
    }
  }

  console.log(output);
  return output;
}
// Exempel
let strContains = "Hello world";
let charCon = "world";
contains(strContains, charCon); // => true
contains(strContains, "omg"); // => false
contains(strContains, "ello"); // => true

// remove
// Skriv en funktion som tar två strängar som input och ger en ny sträng som output där den ena strängen är borttagen från den första strängen.

function removeChar(str, otherString) {
  let output = "";
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === otherString[j]) {
      j++;
    } else {
      output += str[i];
    }
  }
  console.log(output);
}
// Exempel
let strRe = "Hello world";
let charRe = "world";
removeChar(strRe, charRe); // => "Hello "
removeChar(strRe, "lo wo"); // =>  "Helrld"

// replace
// Skriv en funktion som tar en sträng och ytterligare två strängar som input och ger en ny sträng som output där det ena tecknet ersätts med det andra i strängen.

function replace(str, source, destination) {
  let output = "";
  let i = 0;
  for (; i < str.length; ) {
    if (str[i] === source[0]) {
      const doesMatch = doAllCharsMatch(str, source, i);
      if (doesMatch) {
        output += destination;
        i = i + source.length;
      } else {
        output += str[i];
        i++;
      }
      console.log(doesMatch);
    } else {
      output += str[i];
      i++;
    }
  }
  console.log(output);
}

function removeAdd(str1, str2, start) {
  let output = { status: true };

  for (let j = 0; j < str2.length; j++) {
    if (str1[start + j] !== str2[j]) {
      output.status = false;
    }
    output = { ...output, end: start + j };
  }

  console.log(output);
  return output;
}
// Exempel
let strReplace = "Hello world";
let charReplace1 = "ello";
let charReplace2 = "ail";
replace(strReplace, charReplace1, charReplace2); // => "Hail world"
replace(strReplace, "world", "Sponge-Bob"); // =>  "Hello Sponge-Bob"

function persistence(num) {
  let result = `${num}`;
  let multiply = 1;

  if (result.length === 1) {
    result = 0;
  } else if (result.length > 1) {
    for (let i = 0; i < result.length; i++) {
      multiply = multiply * result[i];
    }
    result = `${multiply}`;
  }
  // if (result.length > 0) {
  //     persistence(Number(result));
  // }

  console.log(Number(result));
}

persistence(999);
