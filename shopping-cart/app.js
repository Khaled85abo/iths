/**
 *
 * Model Logic
 *
 */
//#region
const state = {};

function initState() {
  state.products = [];
}

function initActions() {
  const buyBtns = document.querySelectorAll("main  article  button");
  buyBtns.forEach((btn) => btn.addEventListener("click", updateStateProducts));

  // Adding NodeList of buy buttons to state to be accessiable by other functions.
  state.buyBtns = buyBtns;

  // Save products list to local storage.
  document.querySelector(".popup-cart a").addEventListener("click", () => {
    if (state.products.length > 0) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  });
}

function updateStateProducts(e) {
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

  const arrayProduct = state.products.find(
    (pro) => pro.hoodieType === product.hoodieType
  );
  arrayProduct ? arrayProduct.quan++ : state.products.push(product);
  updateBuyBtns();
  renderDropDown();
  console.log(state.products);
}

// Create eventlisteners for cart dropDown menu items.
function createEventListener() {
  document
    .querySelectorAll(".popup-cart article > button")
    .forEach((btn) => btn.addEventListener("click", handleRemove));
  document
    .querySelectorAll(".plus")
    .forEach((btn) =>
      btn.addEventListener("click", (e) => handlePlusMinus(e, "plus"))
    );
  document
    .querySelectorAll(".minus")
    .forEach((btn) => btn.addEventListener("click", handlePlusMinus));
}
//#endregion

/**
 *
 * Controller Logic
 *
 */
//#region

function handleRemove(e) {
  const article = e.target.parentElement;
  const nameInCart = article.querySelector("span:nth-of-type(1)").innerText;
  for (let i in state.products) {
    if (state.products[i].productName == nameInCart) {
      state.products.splice(i, 1);
    }
  }
  // e.target.parentElement.remove();
  updateBuyBtns();
  renderDropDown();
}

function handlePlusMinus(e, type) {
  const article = e.target.parentElement.parentElement;
  const nameInCart = article.querySelector("span").innerText;
  const productInState = state.products.find(
    (pro) => pro.productName == nameInCart
  );
  type === "plus" ? productInState.quan++ : productInState.quan--;
  updateBuyBtns();
  renderDropDown();
}
//#endregion

/**
 *
 * View Logic
 *
 */
//#region
//

function renderDropDown() {
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

function updateBuyBtns() {
  for (let btn of state.buyBtns) {
    const article = btn.parentElement;
    const name = article.querySelector("h2").innerText;
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
    } else {
      btn.innerText = `Buy`;
    }
  }
}

// function showCart() {
//   const cart = document.querySelector(".popup-cart");
//   cart.style.display = "block";
//   setTimeout(() => {
//     cart.style.display = "none";
//   }, 1500);
// }
//#endregion

/**
 *
 * Entry Point
 *
 */
//#region
function main() {
  initState();
  initActions();
}

main();

//#endregion
