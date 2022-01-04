document.querySelector("button").addEventListener("click", create_password);

// Password validation - Without RegExp
function validatePassword(pwd) {
  // if (pwd.length < 8) return false;
  // if (pwd.length > 50) return false;
  // if (!conatinsUpperCaseLetter(pwd)) return false;
  // if (!conatinsLowerCaseLetter(pwd)) return false;
  // if (!containsSpecialCharacter(pwd)) return false;
  // if (
  //   pwd.length < 8 ||
  //   pwd.length > 50 ||
  //   !conatinsUpperCaseLetter(pwd) ||
  //   !conatinsLowerCaseLetter(pwd) ||
  //   !containsSpecialCharacter(pwd)
  // ) {
  //   return false;
  // }

  if (pwd.length < 8) {
    return false;
  }

  if (pwd.length > 50) {
    return false;
  }
  if (!conatinsUpperCaseLetter(pwd)) {
    return false;
  }
  if (!conatinsLowerCaseLetter(pwd)) {
    return false;
  }
  if (!containsNumber(pwd)) {
    return false;
  }
  if (!containsSpecialCharacter(pwd)) {
    return false;
  }

  return true;
}

function conatinsUpperCaseLetter(str) {
  for (let i in str) {
    if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase())
      return true;
  }
  return false;
}
function conatinsLowerCaseLetter(str) {
  for (let value of str) {
    if (value === value.toLowerCase() && value !== value.toUpperCase())
      return true;
  }
  return false;
}
function containsNumber(str) {
  for (let i in str) {
    if (Number.isInteger(Number(str[i]))) return true;
  }
  return false;
}
function containsSpecialCharacter(str) {
  const specialCharacter = [
    " ",
    "”",
    "’",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    "]",
    "`",
    "|",
    "~",
    "{",
    "}",
    "^",
    "[",
    "!",
    "@",
    "#",
    "$",
    "%",
    "&",
    "*",
    "(",
    ")",
    "?",
    ">",
    "_",
    "-",
  ];
  for (let i in str) {
    for (let j in specialCharacter) {
      if (str[i] == specialCharacter[j]) return true;
    }
  }

  return false;
}

// Order sum
function orderTotal(order) {
  let price = 0;
  for (let i in order) {
    price = price + order[i].amount * order[i].price;
  }

  return price;
}

// E-mail Data Extractor
function extractEmailData(email) {
  const [before, domain] = email.split("@");
  const [local, ...tags] = before.split("+");

  return { local, domain, tags };
}

/*

function createPassword() {
  const numbers = "123456789";
  const capitalLetters = "ABCDEFGHIJKLMNOQRSTUVWXYZ";
  const smallLetters = "abcdefghijklmnopqrstuvwxyz";
  const specialChars = "!@#$%^&*()_+=-[]/'";
  const noNumbers =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=-[]/'";

  const allChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789123456789!@#$%^&*()_+=-[]/'";
  let pwd = "";

  for (let i = 0; i < 8; i++) {
    if (i === 0) {
      const index = Math.floor(Math.random() * noNumbers.length);
      pwd += noNumbers[index];
    }
    const index = Math.floor(Math.random() * allChars.length);
    pwd += allChars[index];
  }
  if (!containsNumber(pwd)) {
    const numberIndex = Math.floor(Math.random() * numbers.length);
    pwd += numbers[numberIndex];
  }
  if (!containsCaptialLetter(pwd)) {
    const captialIndex = Math.floor(Math.random() * capitalLetters.length);
    pwd += capitalLetters[captialIndex];
  }
  if (!containsLowerLetter(pwd)) {
    const smalIndex = Math.floor(Math.random() * smallLetters.length);
    pwd += smallLetters[smalIndex];
  }
  if (!containsSpecialCharacter(pwd)) {
    const specialIndex = Math.floor(Math.random() * specialChars.length);
    pwd += specialChars[specialIndex];
  }

  console.log(pwd.length);
  console.log(pwd);
  return pwd;
}
*/
// The following function create a forever loop sometimes
function create_password() {
  const allChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789123456789!@#$%^&*()_+=-[]/'";
  let pwd = "";
  for (let i = 0; i < 10; i++) {
    if (i === 1 && Number.isInteger(Number(pwd[0]))) {
      create_password();
    }

    const index = Math.floor(Math.random() * allChars.length);
    pwd += allChars[index];
  }
  if (!containsNumber(pwd)) {
    create_password();
  }
  if (!containsCaptialLetter(pwd)) {
    create_password();
  }
  if (!containsLowerLetter(pwd)) {
    create_password();
  }
  if (!containsSpecialCharacter(pwd)) {
    create_password();
  }
  console.log(pwd);
  return pwd;
}

// const pss = create_password();

function containsNumber(pwd) {
  for (let letter of pwd) {
    if (Number.isInteger(Number(letter))) {
      return true;
    }
  }
  return false;
}

function containsCaptialLetter(pwd) {
  for (let letter of pwd) {
    if (letter == letter.toUpperCase() && letter != letter.toLowerCase()) {
      return true;
    }
  }
  return false;
}

function containsLowerLetter(pwd) {
  for (let letter of pwd) {
    if (letter == letter.toLowerCase() && letter != letter.toUpperCase()) {
      return true;
    }
  }

  return false;
}

function containsSpecialCharacter(pwd) {
  const chrs = "!@#$%^&*()_+=-[]/'";
  for (let letter of pwd) {
    for (let chr of chrs) {
      if (letter == chr) {
        return true;
      }
    }
  }

  return false;
}
