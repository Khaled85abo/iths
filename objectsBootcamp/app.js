// Skapa ett objekt som innehåller data om en bok, nycklar som kan inkluderas är title, author, numPages.
// Skapa en array av objekt med flera stycken böcker
// Skapa en funktion som söker efter en titel i arrayen, om den hittar en så returneras objektet annars null. Låt funktionen ta emot arrayen med bok-objekt och söktermen som parametrar.

const book = {
  title: "js from a to z",
  author: "Erik och Khaled",
  numPages: 2500,
};
const booksArray = [
  {
    title: "book2",
    author: "Unknown",
    numPages: 20,
  },
  {
    title: "book3",
    author: "David",
    numPages: 250,
  },
  {
    author: "Fredrik",
    title: "Java",
    numPages: 2500,
  },
  {
    numPages: 230,
    title: "C#",
    author: "Joakim",
  },
  {
    title: "C++",
    numPages: 2,
    author: "Per",
  },
];

const bookArray = ["C#", "js", "java"];

// console.log(booksArray[0].numPages);

function findBook(array, title) {
  let output;
  for (let i = 0; i < array.length; i++) {
    if (array[i].title === title) {
      return (output = array[i]);
    } else {
      output = null;
    }
  }

  return output;
}

findBook(booksArray, "lord of the rings");

// Räkna tecken i en sträng och organisera detta i ett objekt. Skapa en funktion som tar en sträng som input och ger ett objekt som output.

// Varje tecken är sin egna nyckel i objektet och värdet på nyckeln är antalet av det tecknet. Dvs, för varje tecken ska det finnas en nyckel i objektet och värdet på den nyckeln ska vara antal förekomster av det tecknet.

// Denna övning kräver dynamiska nycklar.

// letterFrequency("kalle") // => {"k": 1. "a": 1, "l": 2, "e": 1}
// letterFrequency("aaaa") // => {"a": 4}
// letterFrequency("ni talar bra latin"); // => {"n": 2, "i":2, " ":3, "t":2, "a":4,"l": 2,"r":2", "b":1 }

function letterFrequency(str) {
  let letters = {};
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    const stringLetter = str[i];
    if (letters[stringLetter]) {
      // letters[str[i]]++;
      letters[str[i]] = letters[str[i]] + 1;
    } else {
      letters[str[i]] = 1;
    }
  }
  // for (let i in str) {
  //   letters[str[i]] ? letters[str[i]]++ : (letters[str[i]] = 1);
  // }
  console.log(letters);
}

// console.log(users);

function filtreraMedLand(arr, nation) {
  let filtreraMedLand = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].nat === nation) {
      filtreraMedLand.push(arr[i]);
    }
  }

  console.log(filtreraMedLand.length);
}

console.log(users);
filtreraMedLand(users, "FR");

function filterByCountry(arr, nat) {
  let filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    const user = arr[i];
    if (user.nat === nat) {
      //   filteredArray= [...filteredArray, arr[i]]
      filteredArray.push(user);
    }
  }
  console.log(filteredArray);
  return filteredArray;
}

const male = "Mr";
const female = "Ms, Mrs, Miss, mademoiselle";

function filterByCountry(arr, title) {
  let userByGivenGender = [];
  for (let i = 0; i < arr.length; i++) {
    const user = arr[i];
    if (user.name.title === title) {
      //   filteredArray= [...filteredArray, arr[i]]
      userByGivenGender.push(user);
    }
  }
  console.log(filteredArray);
  return filteredArray;
}

function justEmails(arr) {
  let emails = [];
  for (let i = 0; i < arr.length; i++) {
    emails.push(arr[i].email);
  }
  // console.log(emails);
  return emails;
}

justEmails(users);

function changeEmails(arr, newDomain) {
  const changedArray = [];
  for (let i = 0; i < 3; i++) {
    let splittedEmail = arr[i].email.split("@");
    let splittedName = splittedEmail[0].split(".");
    let firstName = splittedName[0];
    let secondName = splittedName[1];
    // let [firstName, secondName] = splittedEmail
    //   let newEmail = secondName + '.' + firstName + '@' + newDomain
    let newEmail = `${secondName}.${firstName}@${newDomain}`;
    console.log(newEmail);
    let newUserObject = { ...arr[i], email: newEmail };
    console.log(newUserObject);
    changedArray.push(newUserObject);
  }
  // console.log(changedArray)
  return changedArray;
}

changeEmails(users, "evilcorp.countrydomain");

let program = [
  "mov a 5",
  "inc a",
  "inc b",
  "mov b 6",
  "inc a",
  "dec a",
  "jh kk 2",
  "dec a",
  "inc b",
  "jnz a -2",
  "add a b",
];
// interpret(program);

function interpret(arr) {
  let output = {};

  const commands = {
    MOV: "mov",
    INC: "inc",
    DEC: "dec",
    ADD: "add",
    MUL: "mul",
    DIV: "div",
    JNZ: "jnz",
    SUB: "sub",
  };

  for (let i = 0; i < arr.length; i++) {
    // arr[i] = "mov a 5"
    // let splittedCode = arr[i].split(" ");
    // const command = splittedCode[0];
    // console.log(command);
    // const element = splittedCode[1];
    // const value = splittedCode[2];

    const [command, element, value] = arr[i].split(" ");

    switch (command) {
      case commands.MOV:
        output[element] = Number(value);
        break;
      case commands.INC:
        if (!output[element]) {
          output["error"] = `operation impossible in line ${
            i + 1
          }, can't inc ${element} becuase it doesn't exist`;
        }
        output[element]++;
        break;
      case commands.DEC:
        if (!output[element]) {
          output["error"] = `operation impossible in line ${
            i + 1
          }, can't dec ${element} becuase it doesn't exist`;
        }
        output[element]--;
        break;
      case commands.MUL:
        output[element] *= output[value];
        break;
      case commands.ADD:
        output[element] += output[value];
        break;
      case commands.SUB:
        output[element] -= output[value];
        break;
      case commands.DIV:
        output[element] /= output[value];
        break;
      case commands.JNZ:
        if (output[element] !== 0) {
          i = i + Number(value) - 1;
        }
        break;
      default:
        output["error"] = `An error occured in line ${i + 1}`;
        break;
    }
  }
  console.log(output);
  return output;
}

// output[element]++

const array = ["Kalle", "David", "Nour", "tu", "Anna"];
chooseRandom(array);

function chooseRandom(arr) {
  let random = Math.random();
  let length = arr.length;
  let multi = random * length;
  let index = parseInt(multi);
  let floor = Math.floor(multi);
  let ceil = Math.ceil(multi);

  // let index = parseInt(Math.random() * arr.length);
  if (arr[index] === "undefined") {
    chooseRandom(arr);
  }
  console.log(arr[index]);
  console.log(index);
  return arr[index];
}
