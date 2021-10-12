//1. Byt namn på första hoodien från Ash till Potato.
const ash = document.querySelector(".art-1 h3");
ash.innerText = "Potato";

//2. Byt namn på Home till Start.
const home = document.querySelector("a:first-child");
home.innerText = "Start";

//3. Byt namn på Contact till Mail Us.
const contact = document.querySelector("a:nth-of-type(3)");
contact.innerText = "Mail Us";

// 4. Byt ut informationen om Sinus Hoodie - Fire.
const informationFire = document.querySelector(".art-2 p");
informationFire.innerText = "Here comes new informatio about the new hoodie";

// 5. Byt bakgrundsfärg och text på en knapp.
const firstDomBtn = document.querySelector("button");
firstDomBtn.innerText = "BUTTON";
firstDomBtn.style.background = "red";

// 6. Byt bakgrundsfärg på någon av produkterna.
const lastImg = document.querySelector(".art-3 figure");
lastImg.style.background = "lightgray";

// 7. Byt ut adressen på sidan.
const newAddress = `
        <h3>Where we were</h3>
        <p>Sinus skateboard<br>
        Railsvägen 13 <br>
        133 37, Rampnäs</p>
    `;
const adress = document.querySelector("section article:nth-of-type(2)");
adress.innerHTML = newAddress;

//8. Byt färg på samtliga <p>.
const AllP = document.querySelectorAll("p");
for (let i = 0; i < AllP.length; i++) {
  AllP[i].style.color = "red";
}

//9. Ändra text på samtliga knappar till add to cart.
const allBtns = document.querySelectorAll("button");
for (let i = 0; i < allBtns.length; i++) {
  allBtns[i].innerText = "add to cart";
}

// 10. Lägg till classen active på menyalternativet home.
home.classList.add("active");

// 11. Ta bort classen *logo* på logotypen.
const logo = document.querySelector("img:first-of-type");
logo.classList.remove("logo");

// 12. Lägg till ett nytt menyalternativ.
const a = document.createElement("a");
a.href = "#";
a.innerText = "WHy us";
const menu = document.querySelector("nav");
console.log(menu);
menu.append(a);

// 13. Lägg till en ny produkt med följande info.
const product = document.createElement("article");
product.classList.add("art-4");

product.innerHTML = `
    <figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
    <h2>Sinus Hoodie</h2>
    <h3>Forrest</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus enim!</p>
    <button>buy</button>
`;
const main = document.querySelector("main");
main.append(product);
