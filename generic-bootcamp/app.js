// 14 I följande array, sätt in två nya frukter på index 2.
let fruits1 = ["apple", "orange", "pear", "kiwi"];
fruits1.splice(2, 0, "banana", "ananas");

//15 Klona följande array och ändra första frukten till pineapple.
let fruits2 = ["apple", "orange", "pear", "kiwi"];
const newFruits = [...fruits2];
newFruits.splice(0, 1, "pineapple");
newFruits;

// 16 Sortera följande array i fallande ordning.
let num = [1, 5, 78, 7, 122, 3, 4, 65, 40, 2, 8];
num.sort((num1, num2) => num2 - num1);

// 17 Lägg ihop följande arrayer.
let a = [1, 2, 3];
let b = [4, 5, 6];
let ab = [...a, ...b];

// 18 Mixa följande arrayer där varannan är från array a och varanan från array b.
let a = ["My", "has", "many", "open"];
let b = ["brain", "to", "tabs", "!"];
let ab = joinArrays(a, b);
function joinArrays(a, b) {
  let output = [];
  for (let i in a) {
    output.push(a[i]);
    output.push(b[i]);
  }
  return output;
}

// 19 Merga in array a i array b på index 2.
let a = [1, 2, 7, 8, 9, 10];
let b = [3, 4, 5, 6];
ownSplice(b, 2, a);

function ownSplice(b, index, a) {
  let ut = [];
  for (let i in b) {
    if (+i === index) {
      for (let num of a) {
        ut.push(num);
      }
    } else {
      ut.push(b[i]);
    }
  }
  return ut;
}

// 20 Gör alla namn i array names till versaler.
let names = ["sixten", "Eva", "Ali", "Kim", "Greger", "Alicia"];
let capital = names.map((name) => name.toLocaleUpperCase());
capital;

// 21 Filtrera fram samtliga personer som är 30 år eller äldre.
let names = [
  { name: "sixten", age: 32 },
  { name: "Eva", age: 19 },
  { name: "Ali", age: 67 },
  { name: "Kim", age: 13 },
  { name: "Greger", age: 30 },
  { name: "Alicia", age: 82 },
];
const olderThan30 = names.filter((person) => person.age >= 30);

// 22 Skriv koden för att undersöka om arrayen names innehåller namnet Ewa. Ditt svar ska vara true eller false.
let names = ["sixten", "Eva", "Ali", "Kim", "Greger", "Alicia"];
names.includes("Eva" || "Ewa");
names.some((name) => name === "Eva" || name === "Ewa");

// 32 Loopa ut följande objekt där key och value ska console.log(). Ex. "name - Sixten".
let person = {
  name: "sixten",
  email: "sixten@zocom.se",
  role: "ninjah",
  age: 32,
};
for (let key in person) {
  console.log(key, " :", person[key]);
}
