const productSection = createSectionWithClasses(
  "product-section",
  "product-section relative"
);
const productDoodle = createImage(
  "product-doodle absolute",
  "../resources/imgs/product-doodle.svg",
  "Cat food in Kenya"
);
const productContainer = createDivWithClasses(
  "product-container container flex flex-col flex-centre-xy"
);
const moreSection = createSectionWithClasses("more-section", "more-section");
const moreContainer = createDivWithClasses(
  "more-container container flex flex-col flex-centre-xy"
);

const currentURL = window.location.href;

const url = new URL(currentURL);

const productID = url.searchParams.get("product_id");

const productDetailsContainer = createDivWithClasses(
  "product-details-container flex flex-col flex-centre-y"
);

const storedProducts = localStorage.getItem("products-jedi");
let productsJedi;
if (storedProducts) {
  productsJedi = JSON.parse(storedProducts);
  productPagePopulate(productsJedi);
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
      productPagePopulate(productsJedi);
    })
    .catch((err) => {
      console.log("the error is:", err);
    });
}

function productPagePopulate(products) {
  products.forEach((product) => {
    if (product.product_id == productID) {
      const detailHeader = createH1WithClasses(
        "detail-header",
        product.product_name
      );
      const productDetail = createDivWithClasses("product-detail flex");
      // const carousel = createDivWithClasses("carousel");
      // const carouselContainer = createDivWithClasses("carousel-container flex");
      const carousel = createDivWithClasses("carousel relative");
      carousel.setAttribute("data-carousel", "");

      const leftBtn = createDivWithClasses(
        "carousel-btn prev absolute flex flex-centre-xy"
      );
      leftBtn.setAttribute("data-carousel-btn", "prev");
      const leftChev = createImage(
        "left-chev",
        "../resources/imgs/chevro-left.svg"
      );
      leftBtn.append(leftChev);

      const rightBtn = createDivWithClasses(
        "carousel-btn next absolute flex flex-centre-xy"
      );
      rightBtn.setAttribute("data-carousel-btn", "next");
      const rightChev = createImage(
        "right-chev",
        "../resources/imgs/chevro-right.svg"
      );
      rightBtn.append(rightChev);

      const ul = document.createElement("ul");
      ul.setAttribute("data-slides", "");

      const detailDescriptionPlus = createDivWithClasses(
        "detail-description-plus flex flex-col"
      );
      const descriptionTitle = createH2WithClasses(
        "description-title",
        "Description"
      );
      const description = createDivWithClasses("description flex flex-col");
      //   description.append(product.product_description);
      description.innerHTML = product.product_description;
      const priceDiv = createDivWithClasses("price-div flex flex-centre-xy");
      const priceProduct = createH2WithClasses(
        "price-product",
        `Price: KES ${product.product_price}`
      );
      priceDiv.append(priceProduct);
      const addPlusQty = createDivWithClasses("add-plus-qty flex");

      const toCartBtnDiv = createDivWithClasses("to-cart flex");
      const toCartIcon = createImage(
        "cart-image-p",
        "../resources/imgs/tocart.svg",
        ""
      );
      const toCart = createPWithClasses("to-cart-p", "Add To Cart");
      toCartBtnDiv.append(toCartIcon, toCart);

      const prodQty = createDivWithClasses("prod-qty flex flex-centre-xy");
      //-----------
      const decrease = createDivWithClasses(" dec flex flex-centre-xy");
      const decreaseBtn = createImage(
        "dec-btn decin-btn",
        "../resources/imgs/minus.svg"
      );
      decrease.append(decreaseBtn);
      const quantity = createPWithClasses("quantity qty-product", 1);
      const increase = createDivWithClasses(" inc flex flex-centre-xy");
      const increaseBtn = createImage(
        "inc-btn decin-btn",
        "../resources/imgs/plus.svg"
      );
      increase.append(increaseBtn);

      prodQty.append(decrease, quantity, increase);
      //----------
      addPlusQty.append(toCartBtnDiv, prodQty);
      detailDescriptionPlus.append(
        descriptionTitle,
        description,
        priceDiv,
        addPlusQty
      );
      const images = product.images;
      images.forEach((image, index) => {
        const li = document.createElement("li");
        li.className = "slide absolute flex flex-centre-xy";
        li.setAttribute("data-name", image.image_original_name);
        if (index === 0) {
          li.setAttribute("data-active", "");
        }
        const carouselImg = createImage(
          "carousel-img",
          `../uploaded-imgs/${image.image_name}`
        );

        li.append(carouselImg);
        ul.append(li);
      });
      carousel.append(leftBtn, rightBtn, ul);
      productDetail.append(carousel, detailDescriptionPlus);
      productDetailsContainer.append(detailHeader, productDetail);
    }
  });
}

productContainer.append(productDetailsContainer);
productSection.append(productDoodle, productContainer);
const moreTitle = createH2WithClasses("more-title", "You May Also Like.");
// const productsDiv = createDivWithClasses("products-div");
// const moreDiv=createDivWithClasses("more-div flex")
// function moreItems() {}
moreContainer.append(moreTitle, productsDiv);
moreSection.append(moreContainer);

document
  .querySelector("body")
  .append(navigationBar, productSection, moreSection, footerSection);

//----------------------------------------------------------------------

const buttons = document.querySelectorAll("[data-carousel-btn]");
const autoSlideInterval = 3000;
let autoSlideTimer;

function navigateCarousel(offset) {
  const slides = document.querySelector("[data-slides]");
  const activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  if (newIndex < 0) newIndex = slides.children.length - 1;
  if (newIndex >= slides.children.length) newIndex = 0;
  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
}

function startAutoSlide() {
  autoSlideTimer = setInterval(() => {
    navigateCarousel(1); // Move to the next image
  }, autoSlideInterval);
}

function stopAutoSlide() {
  clearInterval(autoSlideTimer);
}

// const carousel = document.querySelector(".carousel");
// carousel.addEventListener("mouseenter", stopAutoSlide);
// carousel.addEventListener("mouseleave", startAutoSlide);

startAutoSlide(); // Start auto-sliding

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    stopAutoSlide(); // Stop auto-sliding when a manual navigation button is clicked
    const offset = button.dataset.carouselBtn === "next" ? 1 : -1;
    navigateCarousel(offset);
    startAutoSlide(); // Restart auto-sliding after manual navigation
  });
});

const delegateClickToBodyProduct = document.body;
delegateClickToBodyProduct.addEventListener("click", productPageClickFired);

function productPageClickFired(e) {}
