const btns = document.querySelectorAll("main  article  button");
for (let btn of btns) {
  btn.addEventListener("click", ckeckHoodieType);
}

const products = [];

const checkout = document.querySelector(".popup-cart a");
checkout.addEventListener("click", saveToLocalStorage);

function saveToLocalStorage() {
  if (products.length > 0) {
    localStorage.setItem("products", JSON.stringify(products));
  }
}

function ckeckHoodieType(event) {
  const targetBtn = event.target;
  //   targetBtn.innerText = "In Cart";
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

  addtoProducts(product, targetBtn);
}

function addtoProducts(product, targetBtn) {
  //   let exist = false;
  //   let index;
  //   for (let i in products) {
  //     if (products[i].hoodieType === product.hoodieType) {
  //       exist = true;
  //       index = i;
  //     }
  //     }
  //     exist ? products[index].quan++ : products.push(product)

  const arrayProduct = products.find(
    (pro) => pro.hoodieType === product.hoodieType
  );
  //Ternary operator
  arrayProduct ? arrayProduct.quan++ : products.push(product);

  // if (exist) {
  //     products[index].quan++
  // } else {
  //     products.push(product);
  // }
  console.log(products);
  targetBtn.innerText = arrayProduct
    ? `${arrayProduct.quan} in Cart`
    : "In Cart";
  updateElementinDropdown();
}

function updateElementinDropdown() {
  const popUpDiv = document.querySelector(".popup-cart > div");
  let productsHtml = "";
  for (let product of products) {
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
  const removeBtns = document.querySelectorAll(".popup-cart article > button");
  const plusBtns = document.querySelectorAll(".plus");
  const minusBtns = document.querySelectorAll(".minus");

  for (let btn of removeBtns) {
    btn.addEventListener("click", handleRemoveBtn);
  }

  for (let btn of plusBtns) {
    btn.addEventListener("click", handlePlus);
  }

  for (let btn of minusBtns) {
    btn.addEventListener("click", handleMinus);
  }
}

function handleRemoveBtn(e) {
  const article = e.target.parentElement;
  const nameInCart = article.querySelector("span:nth-of-type(1)").innerText;
  for (let i in products) {
    if (products[i].productName == nameInCart) {
      products.splice(i, 1);
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
  const parentEl = e.target.parentElement.parentElement;
  const cartName = parentEl.querySelector("span").innerText;
  const findProduct = products.find((pro) => pro.productName == cartName);
  findProduct.quan++;
  updateElementinDropdown();

  for (let btn of btns) {
    const parent = btn.parentElement;
    const name = parent.querySelector("h2").innerText;
    if (name == cartName) {
      btn.innerText = `${findProduct.quan} in cart`;
    }
  }
}

function handleMinus(e) {
  const parentEl = e.target.parentElement.parentElement;
  const cartName = parentEl.querySelector("span").innerText;
  const index = products.findIndex((pro) => pro.productName == cartName);
  products[index].quan--;

  let theBuyBtn;
  for (let btn of btns) {
    const parent = btn.parentElement;
    const name = parent.querySelector("h2").innerText;
    if (name == cartName) {
      theBuyBtn = btn;
      btn.innerText = `${products[index].quan} in cart`;
    }
  }

  if (products[index].quan < 1) {
    products.splice(index, 1);
    theBuyBtn.innerText = "Buy";
  }
  console.log(products);
  updateElementinDropdown();
}
