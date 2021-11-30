/**
 *
 * Controller Logic
 *
 */
//#region

export function handleAdd(e) {
  const id = e.target.dataset.id;
  const product = state.products.find((pro) => pro.id == id);
  const productItem = {
    ...product,
    quantity: 1,
  };
  updateState(id, COMMANDS.ADD, productItem);
}

// function handleRemove(e) {
//   const itemId = e.target.dataset.id;
//   updateState(itemId, COMMANDS.REMOVE);
// }

// function handlePlusMinus(e, type) {
//   console.log(e.target);
//   const article = e.target.parentElement.parentElement;
//   const btn = article.querySelector("button");
//   const itemId = btn.dataset.id;
//   type === "plus"
//     ? updateState(itemId, COMMANDS.INCREMENT)
//     : updateState(itemId, COMMANDS.DECREMENT);
// }
//#endregion
