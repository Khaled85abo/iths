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
export function initState() {
  state.cartItems = [];
  state.products = products;
  renderProducts();
}

export function initActions() {
  const buyBtns = document.querySelectorAll("main  article  button");
  buyBtns.forEach((btn) => btn.addEventListener("click", handleAdd));

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

//#endregion
