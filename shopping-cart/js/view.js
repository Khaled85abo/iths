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
  popUpDiv.innerHTML = "";
  console.log(state.cartItems);
  for (let item of state.cartItems) {
    const { img, productName, price, quantity, id } = item;

    const article = document.createElement("article");
    article.innerHTML = `
        <img src="./${img}" alt="Hoodie" height="30px" />
        <span>${productName}</span>
        <span>${price} kr</span>
        <div>
            <span class="minus">-</span>
            <span>${quantity}</span>
            <span class="plus">+</span>
        </div>
        <button data-id='${id}'>✖</button>
      `;
    // article.innerHTML = `<span>Product</span>`;
    popUpDiv.appendChild(article);

    // const article = `
    // <article>
    //     <img src="./${img}" alt="Hoodie" height="30px" />
    //     <span>${productName}</span>
    //     <span>${price} kr</span>
    //     <div>
    //         <span class="minus">-</span>
    //         <span>${quantity}</span>
    //         <span class="plus">+</span>
    //     </div>
    //     <button data-id='${id}'>✖</button>
    // </article>
    //   `;
    // popUpDiv.insertAdjacentHTML("afterbegin", article);
    article
      .querySelector(".plus")
      .addEventListener("click", () => updateState(id, COMMANDS.INCREMENT));
    article
      .querySelector(".minus")
      .addEventListener("click", () => updateState(id, COMMANDS.DECREMENT));
    article
      .querySelector("button")
      .addEventListener("click", () => updateState(id, COMMANDS.REMOVE));
  }
  showCart();
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
