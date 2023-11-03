const cartProducts = JSON.parse(localStorage.getItem("cart-products")) || [];

const cartField = createDivWithClasses("cart-field  ");
const cartFieldContainer = createDivWithClasses(
  "cartfield-container relative flex flex-col flex-centre-y"
);
const closeCart = createImage(
  "close-cart absolute",
  "../resources/imgs/close-pop.svg"
);
const carftFieldTitle = createH2WithClasses(
  "cartfield-title",
  "Your Cart Items"
);
const cartFieldItems = createDivWithClasses("cartfield-items flex flex-col");

const totalPriceCheckDiv = createDivWithClasses(
  "total-price-check-div absolute flex flex-col flex-centre-y"
);

const totalPriceDiv = createDivWithClasses("total-price-div");

// -------------------------------------------------------------
const totalSubPrice = cartProducts.reduce(
  (total, product) => total + product.itemTotalPrice,
  0
);
function createSubTotalElement(darasa, indicator, element) {
  const subtot = document.createElement("h2");
  subtot.className = darasa;

  const partOneSubTot = document.createTextNode(`${indicator}`);
  const partTwoSubTot = document.createTextNode("");
  const spanPartSubTot = document.createElement("span");
  spanPartSubTot.appendChild(partTwoSubTot);

  subtot.append(partOneSubTot, spanPartSubTot);

  return subtot;
}
const subtotalPrice = createSubTotalElement(
  "subtotal-price",
  "Sub Total - ",
  "sub"
);
const deliveryFee = createSubTotalElement(
  "delivery-fee",
  "Delivery Fee - ",
  "delfee"
);
const totalPrice = createSubTotalElement("total-price", "Total - ", "tot");
// ---------------------------------------------------------------

totalPriceDiv.append(subtotalPrice, deliveryFee, totalPrice);

const checkout = createButton(
  false,
  "checkout",
  "/checkout",
  "Checkout",
  "",
  "../resources/imgs/rightlineimg.svg",
  false,
  false
);
totalPriceCheckDiv.append(totalPriceDiv, checkout);

cartFieldContainer.append(
  closeCart,
  carftFieldTitle,
  cartFieldItems,
  totalPriceCheckDiv
);

cartField.append(cartFieldContainer);

document.querySelector("body").append(cartField, popUp);

const popProductAdd = document.querySelector(".pop-up");
const popContentDivCart = popProductAdd.querySelector(".pop-div");

function addedToCartAlert() {
  popProductAdd.classList.toggle("pop-up-none");
  popProductAdd.style.background = "#E0FFD1";
  const popContent = createPWithClasses("pop-content", "Item added to cart!");
  popContent.style.color = "#1c1e5a";
  popContentDivCart.append(popContent);
  timerId = setTimeout(() => {
    popProductAdd.style.background = "";
    popContentDivCart.removeChild(popContent);
    popProductAdd.classList.toggle("pop-up-none");
  }, 1000);
  console.log("pop triggered now");
}

const cartClick = document.body;
cartClick.addEventListener("click", cartClickFired);

function cartClickFired(e) {
  if (
    e.target.classList.contains("product-tocart") ||
    e.target.classList.contains("cart-image")
  ) {
    const productCard = e.target.closest(".product-item");
    const productId = productCard.getAttribute("data");
    const productName = productCard.querySelector(".product-name").textContent;
    const productPrice = parseFloat(
      productCard
        .querySelector(".product-price")
        .textContent.replace("Kes:", "")
    );
    const productImg = productCard.querySelector(".product-image").src;

    // Check if the product already exists in the cart
    const existingProductIndex = cartProducts.findIndex(
      (product) => product.productId === productId
    );
    // let productTotalPrice;
    if (existingProductIndex !== -1) {
      // If the product exists, increment the quantity by one
      cartProducts[existingProductIndex].quantity += 1;
      // Calculate the itemTotalPrice for the existing product
      cartProducts[existingProductIndex].itemTotalPrice =
        cartProducts[existingProductIndex].productPrice *
        cartProducts[existingProductIndex].quantity;
    } else {
      // If the product doesn't exist, create a new product object
      // productTotalPrice = productPrice * quantity;
      const newProduct = {
        productId,
        productName,
        productPrice,
        productImg,
        quantity: 1,
      };
      // Calculate the itemTotalPrice for the new product
      newProduct.itemTotalPrice = newProduct.productPrice * newProduct.quantity;
      // Add the new product to the cart-products array
      cartProducts.push(newProduct);
    }
    // Save the updated cart-products array to local storage
    localStorage.setItem("cart-products", JSON.stringify(cartProducts));
    addToCart(productId);
    updateCartCount();
    updateCartPrice();
  } else if (
    e.target.classList.contains("to-cart") ||
    e.target.classList.contains("cart-image-p") ||
    e.target.classList.contains("to-cart-p")
  ) {
    const currentURL = window.location.href;
    const url = new URL(currentURL);

    const productID = url.searchParams.get("product_id");
    const productCard = e.target.closest(".product-details-container");
    const productName = productCard.querySelector(".detail-header").textContent;
    let productImg;
    const productPrice = parseFloat(
      productCard
        .querySelector(".price-product")
        .textContent.replace("Price: KES", "")
    );
    const productQty = Number(
      productCard.querySelector(".quantity").textContent
    );

    const imgs = productCard.querySelectorAll("li");
    imgs.forEach((img) => {
      const data = img.getAttribute("data-name");
      if (data === "display.svg") {
        const src = img.querySelector("img").src;
        productImg = src;
      }
    });
    const existingProductIndex = cartProducts.findIndex(
      (product) => product.productId === productID
    );
    if (existingProductIndex !== -1) {
      console.log("it exists");
      cartProducts[existingProductIndex].quantity += productQty;
      cartProducts[existingProductIndex].itemTotalPrice =
        cartProducts[existingProductIndex].productPrice *
        cartProducts[existingProductIndex].quantity;
    } else {
      const newProduct = {
        productID,
        productName,
        productPrice,
        productImg,
        quantity: productQty,
      };
      newProduct.itemTotalPrice = newProduct.productPrice * newProduct.quantity;
      cartProducts.push(newProduct);
    }
    // Save the updated cart-products array to local storage
    localStorage.setItem("cart-products", JSON.stringify(cartProducts));
    addToCart(productID);
    updateCartCount();
    updateCartPrice();
  } else if (
    e.target.classList.contains("dec") ||
    e.target.classList.contains("dec-btn")
  ) {
    updateProductQty(e, false);
  } else if (
    e.target.classList.contains("inc") ||
    e.target.classList.contains("inc-btn")
  ) {
    updateProductQty(e, true);
  } else if (
    e.target.classList.contains("cart") ||
    e.target.classList.contains("cartCount")
  ) {
    console.log("The clicked thing is", e.target);
    //here is where we check for cart emptyness
    if (cartProducts.length >= 1) {
      const cartField = document.querySelector(".cart-field");
      // cartField.classList.toggle("cart-field");
      cartField.classList.toggle("cart-field-on");
    } else {
      //handle this phenomena
      console.log("Cart is empty");
    }
  } else if (
    e.target.classList.contains("decrease") ||
    e.target.classList.contains("decrease-btn")
  ) {
    updateCartItemQuantity(e, false);
    updateCartPrice();

    if (currentPath === "/checkout/") {
      amountInCheck();
    }
  } else if (
    e.target.classList.contains("increase") ||
    e.target.classList.contains("increase-btn")
  ) {
    updateCartItemQuantity(e, true);
    updateCartPrice();
    if (currentPath === "/checkout/") {
      amountInCheck();
    }
  } else if (e.target.classList.contains("delete-icon")) {
    const cartField = document.querySelector(".cart-field");

    const targetParent = e.target.closest(".cartfield-items");
    const childrenCount =
      targetParent.querySelectorAll(".cartfield-item").length;
    //if only one element is left in cart and is deleted, close cart
    if (childrenCount < 2) {
      handleDelete(e);
      cartField.classList.toggle("cart-field-on");
    } else {
      handleDelete(e);
      updateCartPrice();
    }
    if (currentPath === "/checkout/") {
      amountInCheck();
    }
  } else if (e.target.classList.contains("close-cart")) {
    const cartField = document.querySelector(".cart-field");
    cartField.classList.toggle("cart-field-on");
  }
}
// ************* We can use path so that whatever functionality only
//applies in the desired path
let formattedTotal;
function amountInCheck() {
  const subPrice = cartProducts.reduce(
    (total, product) => total + product.itemTotalPrice,
    0
  );

  const valGreater = subPrice + 0;
  const valLesser = subPrice + 300;
  const cartTotal = ` ${subPrice >= 5000 ? valGreater : valLesser}`;
  formattedTotal = addCommas(cartTotal);
  subTotalCheckout = subPrice;
  const actualAmount = amountDue.querySelector("span");
  actualAmount.textContent = `Kes: ${formattedTotal}`;
}
//function to update total price in cart
updateCartPrice();
function updateCartPrice() {
  const subPrice = cartProducts.reduce(
    (total, product) => total + product.itemTotalPrice,
    0
  );

  const cartSubTotal = subtotalPrice.querySelector("span");
  cartSubTotal.textContent = `Kes : ${subPrice}`;

  const cartDelFee = deliveryFee.querySelector("span");
  cartDelFee.textContent = `${subPrice > 5000 ? "0" : "Kes: 300"}`;

  const cartTotal = totalPrice.querySelector("span");
  const valGreater = subPrice + 0;
  const valLesser = subPrice + 300;
  cartTotal.textContent = `Kes: ${subPrice > 5000 ? valGreater : valLesser}`;
}
function updateProductQty(e, increment) {
  const parent = e.target.closest(".prod-qty");
  const quantityElement = parent.querySelector(".quantity");
  let quantity = parseInt(quantityElement.textContent);

  if (increment) {
    quantity++;
  } else if (quantity > 1) {
    quantity--;
  }
  quantityElement.textContent = quantity;
}
//function to update cart quantity
function updateCartItemQuantity(e, increment) {
  const parent = e.target.closest(".cartfield-item");
  const quantityElement = parent.querySelector(".quantity");
  const ID = parent.getAttribute("data");
  const unitPrice = parent.getAttribute("unit-price") * 1;

  const cartPriceElement = parent.querySelector(".cartfield-price");
  let quantity = parseInt(quantityElement.textContent);

  if (increment) {
    quantity++;
  } else if (quantity > 1) {
    quantity--;
  }
  quantityElement.textContent = quantity;
  //update icart-item price
  cartPriceElement.textContent = `Kes: ${quantity * unitPrice}`;
  const itemToUpdate = cartProducts.find((item) => item.productId === ID);
  if (itemToUpdate) {
    itemToUpdate.quantity = quantity;
    itemToUpdate.itemTotalPrice =
      itemToUpdate.productPrice * itemToUpdate.quantity;
    localStorage.setItem("cart-products", JSON.stringify(cartProducts));
  }
  updateCartCount();
  getSubTotalPrice();
}
//function to handle delete in cart
function handleDelete(e) {
  //getting exact item to delete
  const itemToDelete = e.target.closest(".cartfield-item");
  //deleting item from DOM
  if (itemToDelete) {
    itemToDelete.parentNode.removeChild(itemToDelete);
  }
  //obtaining data attribute for referenicng in the local storage
  const ID = itemToDelete.getAttribute("data");
  //finding item tobe deleted from the local storage
  const indexToRemove = cartProducts.findIndex(
    (product) => product.productId === ID
  );
  //deleting the item from the local storage
  if (indexToRemove !== -1) {
    cartProducts.splice(indexToRemove, 1);
  }
  //updating the local storgae
  localStorage.setItem("cart-products", JSON.stringify(cartProducts));
  updateCartCount();
  getSubTotalPrice();
}
//function to add item to cart
function addToCart(ID) {
  const foundObject = cartProducts.find((product) => product.productId === ID);
  addedToCartAlert();
  if (foundObject) {
    //ought to be remove only affected item
    removeAllChildren(cartFieldItems);
    appendCartItems();
  } else {
    appendCartItems();
  }
  getSubTotalPrice();
}
//function for removing children from cart for rerendering
//****i think it may be more efficinet to only re-render the affected item
function removeAllChildren(parentElement) {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
}
//function to update cart subtotal price
getSubTotalPrice();
function getSubTotalPrice() {
  const totalSubPrice = cartProducts.reduce(
    (total, product) => total + product.itemTotalPrice,
    0
  );
}

//function to update cart count
updateCartCount();
function updateCartCount() {
  const totalQuantity = cartProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );
  cartCount.textContent = totalQuantity;

  console.log("Total Quantity:", totalQuantity);
}
//function to create cart item design
appendCartItems();
function appendCartItems() {
  // Print the total quantity to the console or display it on your webpage
  cartProducts.forEach((product) => {
    const cartFieldItem = createDivWithClasses("cartfield-item flex");
    cartFieldItem.setAttribute("data", `${product.productId}`);
    cartFieldItem.setAttribute("unit-price", `${product.productPrice}`);
    const cartFieldImg = createImage("cartfield-img", `${product.productImg}`);
    const cartFieldParams = createDivWithClasses(
      "cartfield-params flex flex-col"
    );
    const cartFieldName = createH2WithClasses(
      "cartfield-name",
      `${product.productName}`
    );
    const cartFieldPrice = createPWithClasses(
      "cartfield-price",
      `Kes: ${product.itemTotalPrice}`
    );
    const cartFieldAddDel = createDivWithClasses("cartfield-add-del flex");

    const cartFieldQuantity = createDivWithClasses(
      "cartfield-quantity flex flex-centre-xy"
    );

    const quantityWord = createH2WithClasses("quantity-word", "Quantity:");
    const decrease = createDivWithClasses("decrease  flex flex-centre-xy");
    const decreaseBtn = createImage(
      "decrease-btn decin-btn",
      "../resources/imgs/minus.svg"
    );
    decrease.append(decreaseBtn);
    const quantity = createPWithClasses("quantity", `${product.quantity}`);
    const increase = createDivWithClasses("increase flex flex-centre-xy");
    const increaseBtn = createImage(
      "increase-btn decin-btn",
      "../resources/imgs/plus.svg"
    );
    increase.append(increaseBtn);

    cartFieldQuantity.append(quantityWord, decrease, quantity, increase);

    const deleteIcon = createImage(
      "delete-icon",
      "../resources/imgs/delete.svg"
    );

    cartFieldAddDel.append(cartFieldQuantity, deleteIcon);
    cartFieldParams.append(cartFieldName, cartFieldPrice, cartFieldAddDel);
    cartFieldItem.append(cartFieldImg, cartFieldParams);
    cartFieldItems.appendChild(cartFieldItem);
  });
}
//function to formart total
function addCommas(input) {
  // Convert input to a string
  const inputStr = input.toString();
  // If the input has fewer than 4 characters, return it as is
  if (inputStr.length < 4) {
    return inputStr;
  }
  // Split the string into parts of three characters from the right
  const parts = [];
  for (let i = inputStr.length; i > 0; i -= 3) {
    const part = inputStr.slice(Math.max(i - 3, 0), i);
    parts.unshift(part);
  }
  // Join the parts with commas and return the result
  return parts.join(",");
}
function removePartFromString(inputString, partToRemove) {
  return inputString.replace(partToRemove, "").trim();
}
