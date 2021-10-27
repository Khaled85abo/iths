const state = {};

main();

function main() {
  initState();
  initActions();
}

function initState() {
  state.products = [];
}

function initActions() {
  const buyBtns = document.querySelectorAll("main  article  button");
  buyBtns.forEach((btn) => btn.addEventListener("click", ckeckHoodieType));
  state.buyBtns = buyBtns;

  // Save products list to local storage.
  document.querySelector(".popup-cart a").addEventListener("click", () => {
    if (state.products.length > 0) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  });
}

function ckeckHoodieType(e) {
  const article = e.target.parentElement;
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

  updateProductsArray(product);
}

function updateProductsArray(product) {
  const arrayProduct = state.products.find(
    (pro) => pro.hoodieType === product.hoodieType
  );
  arrayProduct ? arrayProduct.quan++ : state.products.push(product);
  updateBuyBtns();
  deployProductsArray();
  console.log(state.products);
}

function deployProductsArray() {
  const popUpDiv = document.querySelector(".popup-cart > div");
  let productsHtml = "";
  for (let product of state.products) {
    const { img, productName, price, quan } = product;
    const productHtml = `
      <article>
        <img src="./${img}" alt="" height="30px" />
        <span>${productName}</span>
        <span>${price} kr</span>
        <div>
            <span class="minus">-</span>
            <span>${quan}</span>
            <span class="plus">+</span>
        </div>
        <button>✖</button>
    </article>

      `;
    productsHtml += productHtml;
  }

  popUpDiv.innerHTML = productsHtml;
  //   showCart();
  createEventListener();
}

// function showCart() {
//   const cart = document.querySelector(".popup-cart");
//   cart.style.display = "block";
//   setTimeout(() => {
//     cart.style.display = "none";
//   }, 1500);
// }

function createEventListener() {
  document
    .querySelectorAll(".popup-cart article > button")
    .forEach((btn) => btn.addEventListener("click", handleRemoveBtn));
  document
    .querySelectorAll(".plus")
    .forEach((btn) => btn.addEventListener("click", handlePlus));
  document
    .querySelectorAll(".minus")
    .forEach((btn) => btn.addEventListener("click", handleMinus));
}

function handleRemoveBtn(e) {
  const article = e.target.parentElement;
  const nameInCart = article.querySelector("span:nth-of-type(1)").innerText;
  for (let i in state.products) {
    if (state.products[i].productName == nameInCart) {
      state.products.splice(i, 1);
    }
  }
  const names = document.querySelectorAll("main > article > h2");
  for (let name of names) {
    if (name.innerText == nameInCart) {
      const parent = name.parentElement;
      parent.querySelector("button").innerText = "Buy";
    }
  }
  e.target.parentElement.remove();
}

function handlePlus(e) {
  const article = e.target.parentElement.parentElement;
  const nameInCart = article.querySelector("span").innerText;
  const findProduct = state.products.find(
    (pro) => pro.productName == nameInCart
  );
  findProduct.quan++;
  updateBuyBtns();
  deployProductsArray();
}

function handleMinus(e) {
  const article = e.target.parentElement.parentElement;
  const nameInCart = article.querySelector("span").innerText;
  const index = state.products.findIndex(
    (pro) => pro.productName == nameInCart
  );
  state.products[index].quan--;

  updateBuyBtns();
  deployProductsArray();
}

function updateBuyBtns() {
  for (let btn of state.buyBtns) {
    const parent = btn.parentElement;
    const name = parent.querySelector("h2").innerText;
    const productIndex = state.products.findIndex(
      (pro) => pro.productName == name
    );
    if (productIndex > -1) {
      if (state.products[productIndex].quan <= 0) {
        state.products.splice(productIndex, 1);
        btn.innerText = `Buy`;
      } else if (state.products[productIndex].quan == 1) {
        btn.innerText = "In Cart";
      } else {
        btn.innerText = `${state.products[productIndex].quan} in cart`;
      }
    }
  }
}
