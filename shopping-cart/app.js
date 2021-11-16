/**
 *
 * Model Logic
 *
 */
//#region
const state = {};
const COMMANDS = {
  ADD: "add",
  REMOVE: "remove",
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
function initState() {
  state.cartItems = [];
  state.products = products;
  renderProducts();
}

function initActions() {
  const buyBtns = document.querySelectorAll("main  article  button");
  buyBtns.forEach((btn) => btn.addEventListener("click", handleAdd));

  // Adding NodeList of buy buttons to state to be accessiable by other functions.
  state.buyBtns = buyBtns;

  // Save products list to local storage.
  document.querySelector(".popup-cart a").addEventListener("click", () => {
    if (state.cartItems.length > 0) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  });
}

function updateState(productId, command, product) {
  const item = state.cartItems;
  const i = item.findIndex((item) => item.id == productId);
  switch (command) {
    case COMMANDS.ADD:
      i > -1 ? item[i].quantity++ : item.push(product);
      break;
    case COMMANDS.INCREMENT:
      item[i].quantity++;
      break;
    case COMMANDS.DECREMENT:
      item[i].quantity--;
      break;
    case COMMANDS.REMOVE:
      item.splice(i, 1);
      break;
  }

  updateBuyBtns(productId);
  renderDropDown();
}

// Creating eventlisteners for cart dropDown items after they are being created .
function initEventListeners() {
  document.querySelectorAll(".popup-cart article").forEach((article) => {
    const id = article.dataset.id;
    article
      .querySelector(".plus")
      .addEventListener("click", () => updateState(id, COMMANDS.INCREMENT));
    article
      .querySelector(".minus")
      .addEventListener("click", () => updateState(id, COMMANDS.DECREMENT));
    article
      .querySelector("button")
      .addEventListener("click", () => updateState(id, COMMANDS.REMOVE));
  });
  // document
  //   .querySelectorAll(".popup-cart article > button")
  //   .forEach((btn) => btn.addEventListener("click", handleRemove));
  //   document
  //     .querySelectorAll(".plus")
  //     .forEach((btn) =>
  //       btn.addEventListener("click", (e) => handlePlusMinus(e, "plus"))
  //     );
  //   document
  //     .querySelectorAll(".minus")
  //     .forEach((btn) => btn.addEventListener("click", handlePlusMinus));
}
//#endregion

/**
 *
 * Controller Logic
 *
 */
//#region

function handleAdd(e) {
  const id = e.target.dataset.id;
  const product = state.products.find((pro) => pro.id == id);
  const productItem = {
    ...product,
    quantity: 1,
  };
  updateState(id, COMMANDS.ADD, productItem);
}

function handleRemove(e) {
  const itemId = e.target.dataset.id;
  updateState(itemId, COMMANDS.REMOVE);
}

function handlePlusMinus(e, type) {
  console.log(e.target);
  const article = e.target.parentElement.parentElement;
  const btn = article.querySelector("button");
  const itemId = btn.dataset.id;
  type === "plus"
    ? updateState(itemId, COMMANDS.INCREMENT)
    : updateState(itemId, COMMANDS.DECREMENT);
}
//#endregion

/**
 *
 * View Logic
 *
 */
//#region
//

function renderProducts() {
  for (let pro of state.products) {
    const { id, name, price, description, theme, img } = pro;
    const product = `
   <article class="art-${id}">
        <figure><img src="${img}" alt="hoodie" /></figure>
        <h2>${name}</h2>
        <h3>${theme}</h3>
        <h5>Price: ${price}kr</h5>
        <p>
          ${description}
        </p>
        <button class="buy" data-id="${id}">Buy</button>
      </article>
  `;
    document.querySelector("main").insertAdjacentHTML("afterbegin", product);
  }
}

function renderDropDown() {
  const popUpDiv = document.querySelector(".popup-cart > div");
  let productsHtml = "";
  for (let item of state.cartItems) {
    const { img, productName, price, quantity, id } = item;
    const productHtml = `
      <article data-id="${id}">
        <img src="./${img}" alt="Hoodie" height="30px" />
        <span>${productName}</span>
        <span>${price} kr</span>
        <div>
            <span class="minus">-</span>
            <span>${quantity}</span>
            <span class="plus">+</span>
        </div>
        <button data-id='${id}'>✖</button>
    </article>

      `;
    productsHtml += productHtml;
  }

  popUpDiv.innerHTML = productsHtml;
  showCart();
  initEventListeners();
}

function updateBuyBtns(productId) {
  const index = state.cartItems.findIndex((item) => item.id == productId);
  const item = state.cartItems[index];
  const btn = document.querySelector(`main button[data-id='${productId}']`);

  if (index > -1) {
    if (item.quantity <= 0) {
      state.cartItems.splice(index, 1);
      btn.innerText = `Buy`;
    } else if (item.quantity == 1) {
      btn.innerText = "In Cart";
    } else {
      btn.innerText = `${item.quantity} in cart`;
    }
  } else {
    btn.innerText = `Buy`;
  }
}

function showCart() {
  const cart = document.querySelector(".popup-cart");
  if (cart) {
    cart.classList.toggle("show");
    setTimeout(() => {
      cart.classList.toggle("show");
    }, 2000);
  }
}

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
