/*
// STRING COUNTER
const text = "this is a text";
function countString(str) {
  i = 0;
  while (str[i] != undefined) {
    i++;
  }
  return `this string length is ${i}`;
}

const str = "this is a text";
function countString(str) {
  i = 0;
  while (str[i] != undefined) {
    i++;
  }
  console.log(`this string length is ${i}`);
}

countString(str);

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

const val = 30;
const min = 10;
const max = 50;
between(val, min, max);
function between(val, min, max) {
  let result;

  if (val > min) {
    result = true;
  } else {
    result = false;
  }
  if (val < max) {
    result = true;
  } else {
    result = false;
  }
  console.log(result);
  // return val > min && val < max
}

// remove
// string bootcamp
// 1
let text = "Hello";

function repeatFunction(str, number) {
  let result = "";
  for (let i = 0; i < number; i++) {
    result = result + str;
  }
  console.log(result);
}

repeatFunction("Hey", 3);

//2
function containsChar(text, character) {
  let result = false;
  for (let i = 0; i < text.length; i++) {
    if (text[i] == character) {
      result = true;
    }
  }
  console.log(result);
  return result;
}
containsChar("2nd homework", "h");

// 3
function indexOfChar(text, character) {
  let result;
  for (let i = 0; i < text.length; i++) {
    if (text[i] == character) {
      console.log(i);
      return (result = i);
    } else {
      result = -1;
    }
  }
  console.log(result);
  return result;
}
indexOfChar("Hello world", "x");

//4
function startsWith(text, character) {
  let result;
  if (text[0] == character) {
    result = true;
  } else {
    result = false;
  }
  console.log(result); //
  return result; //
}
startsWith("Hello world", "H");
//5
function endWith(text, character) {
  let result = false;
  if (text[text.length - 1] === character) {
    result = true;
  }
  console.log(result);
  return result;
}

endWith("arbetsformedlingen", "n");

//6 // hello world

function reverse(text) {
  let result = "";

  for (let i = text.length - 1; i >= 0; i--) {
    result = result + text[i];
  }
  console.log(result);
  return result;
}
reverse("Hello world");

//7

function removeChar(text, char) {
  let result = "";
  for (let i = 0; i <= text.length - 1; i++) {
    if (text[i] != char) {
      result = result + text[i];
    }
  }
  console.log(result);
  return result;
}
removeChar("Hello world!", "o");

//8

function replaceChar(text, char, dest) {
  let result = "";
  for (let i = 0; i <= text.length - 1; i++) {
    if (text[i] != char) {
      result = result + text[i];
    } else if (text[i] == char) {
      result = result + dest;
    }
  }
  console.log(result);
  return result;
}
replaceChar("Hello world", "o", "z");

//9

function substring(text, start, stop) {
  let result = "";
  for (let i = start; i <= stop; i++) {
    result = result + text[i];
  }
  console.log(result);
  return result;
}
substring("Hello world", 1, 4);

//10

function contains(str, otherString) {
  let result;

  for (let i = 0; i <= otherString.length - 1; i++) {
    const index = indexOfChar(str, otherString[i]);
    if (index != -1) {
      result = true;
    } else {
      result = false;
      console.log(result);
      return;
    }
  }

  console.log(result);
  return result;
}
contains("Hello world", "");

function substring(text, start, stop) {
  let out = "";
  for (let i = start; i <= stop; i++) {
    out += text[i];
  }
  return out;
}

function remove(text, chars) {
  let out = "";
  let i = 0;
  let len = chars.length - 1;
  while (i < text.length - len) {
    let sub = substring(text, i, i + len);
    if (sub == chars) {
      i += len;
    } else {
      out += text[i];
    }
    i += 1;
  }
  return out;
}
*/
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
  return output;
}

function doAllCharsMatch(str1, str2, start) {
  let output = true;

  for (let j = 0; j < str2.length; j++) {
    if (str1[start + j] !== str2[j]) {
      return (output = false);
    }
  }
  console.log(output);
  return output;
}
// Exempel
let strContains = "Hello world";
let charCon = "world";
contains(strContains, charCon); // => true
//contains(strContains, "omg"); // => false

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
//replace(strReplace, "world", "Sponge-Bob"); // =>  "Hello Sponge-Bob"
