const popupCart = document.querySelector(".popup-cart");
const btns = document.querySelectorAll("main  article  button");
for (let btn of btns) {
  btn.addEventListener("click", ckeckHoodieType);
}

const products = [];

function ckeckHoodieType(event) {
  console.log(event.target.parentElement);
  const article = event.target.parentElement;
  const hoodieType = article.querySelector("h3").innerText;
  const prodcutPrice = article.querySelector("h5").innerText;
  const [text, priceWithCurrency] = prodcutPrice.split(" ");
  const [price, currency] = priceWithCurrency.split("k");
  const productName = article.querySelector("h2").innerText;
  const img = article.querySelector("img").getAttribute("src");
  const product = {
    img: img,
    productName,
    price: Number(price),
    hoodieType,
    quan: 1,
  };
  console.log(product);

  addtoProducts(product);
}

function addtoProducts(product) {
  let exist = false;
  let index;
  for (let i in products) {
    if (products[i].hoodieType === product.hoodieType) {
      exist = true;
      index = i;
    }
  }
  console.log(exist, index);
  //Ternary operator
  exist ? products[index].quan++ : products.push(product);

  // if (exist) {
  //     products[index].quan++
  // } else {
  //     products.push(product);
  // }
  console.log(products);
  insertElementToPopup();
}

function insertElementToPopup() {
  const popUpDiv = document.querySelector(".popup-cart > div");
  let productsHtml = "";
  for (let product of products) {
    const { img, productName, price, quan } = product;
    const productHtml = `
      <article>
        <img src="./${img}" alt="" height="30px" />
        <span>${productName}</span>
        <span>${price} kr</span>
        <span>${quan}</span>
        <button>✖</button>
    </article>

      `;
    productsHtml += productHtml;
  }

  popUpDiv.innerHTML = productsHtml;
  createEventListener();
}
function createEventListener() {
  const removeBtns = document.querySelectorAll(".popup-cart article > button");

  if (removeBtns.length > 0) {
    for (let btn of removeBtns) {
      console.log(btn);
      btn.addEventListener("click", (e) => e.target.parentElement.remove());
    }
  }
}
// btn1.addEventListener("click", (e) => console.log(e.target.parentElement));
