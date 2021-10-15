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
