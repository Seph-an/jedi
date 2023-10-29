const productsSection = createSectionWithClasses(
  "products-section",
  "products-section relative"
);
const slash = createImage(
  "slash-image absolute",
  "../resources/imgs/slash.svg",
  ""
);
const productsContainer = createDivWithClasses(
  "products-container container flex flex-col flex-centre-xy"
);

const jumbotron = createDivWithClasses("jumbotron flex flex-col flex-centre-y");

const timeLimit = createRealH2WithClasses(
  "time-limit",
  `Same Day Delivery Within Nairobi And Its Environs For Orders Before 3:00 pm EAT.`
);
jumbotron.append(timeLimit);
const productsHeader = createH2WithClasses(
  " subTitles products-header",
  "Our Products"
);
const productsDiv = createDivWithClasses("products-div");

const storedProducts = localStorage.getItem("products-jedi");
let productsJedi;
if (storedProducts) {
  productsJedi = JSON.parse(storedProducts);
  processProducts(productsJedi);
} else {
  fetchProducts();
}

function fetchProducts() {
  fetch("/products", {
    method: "POST",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      localStorage.setItem("products-jedi", JSON.stringify(data));
      productsJedi = JSON.parse(localStorage.getItem("products-jedi"));
      processProducts(productsJedi);
    })
    .catch((err) => {
      console.log("the error is:", err);
    });
}

function processProducts(products) {
  products.forEach((product) => {
    let path;
    let name;
    product.images.forEach((image) => {
      if (image.image_original_name === "display.svg") {
        path = image.image_path;
        name = image.image_name;
      }
    });
    const productItem = createDivWithClasses(
      "product-item flex flex-col flex-centre-y relative"
    );
    productItem.setAttribute("data", `${product.product_id}`);
    const productImageDiv = createDivWithClasses(
      "product-image-div flex flex-centre-xy"
    );
    const productImage = createImage(
      "product-image",
      `../uploaded-imgs/${name}`,
      ""
    );
    productImageDiv.appendChild(productImage);

    const productOthersDiv = createDivWithClasses(
      "product-others flex flex-col"
    );
    const productName = createH2WithClasses(
      "product-name",
      `${product.product_name}`
    );
    const pricesDiv = createDivWithClasses("prices-div flex");

    const productPrice = createPWithClasses(
      "product-price",
      `Kes: ${product.product_price}`
    );

    pricesDiv.append(productPrice);

    const productBtns = createDivWithClasses("product-btns flex");

    const productToCart = createDivWithClasses(
      "product-tocart flex flex-centre-xy"
    );
    const cartImage = createImage(
      "cart-image",
      "../resources/imgs/tocart.svg",
      ""
    );
    productToCart.appendChild(cartImage);

    //check which page we in and then use the appropriate `productDetails`??
    const productDetails = document.createElement("a");
    productDetails.textContent = "Details";
    productDetails.className = "product-details flex flex-centre-xy";
    productDetails.href = `/product?product_id=${product.product_id}`;

    productBtns.append(productToCart, productDetails);

    productOthersDiv.append(productName, pricesDiv, productBtns);
    // -----------------------------------------------
    productItem.append(productImageDiv, productOthersDiv);
    // -----------------------------------------------
    productsDiv.append(productItem);
  });
}
productsContainer.append(productsHeader, jumbotron, productsDiv);

productsSection.append(slash, productsContainer);
