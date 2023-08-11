"use strict";
//All variables and functions here are accessible from all files
const createSection = () => document.createElement("section");
const createDiv = () => document.createElement("div");
const createH1 = () => document.createElement("h1");
const createH2 = () => document.createElement("h3");
const createP = () => document.createElement("p");
const createInput = () => document.createElement("input");
const createLabel = () => document.createElement("label");
const createA = () => document.createElement("a");
const createNav = () => document.createElement("nav");
const createSpan = () => document.createElement("span");
const createImg = () => document.createElement("img");

//navigation bar
const navigationBar = createDiv();
navigationBar.className = "navigationBar flex flex-col";

const topNav = createDiv();
topNav.className = "topNav  relative";

const topNavContainer = createDiv();
topNavContainer.className = "topNavContainer container flex flex-centre-x";

const deliveryLog = createDiv();
deliveryLog.className = "deliveryLog flex flex-centre-xy";

const deliveryNum = createP();
deliveryNum.className = "deliveryNum";
deliveryNum.textContent = `Free Delivery for Orders Above Ksh: 5,000 | Call: +254 - 713 - 309 - 025`;

const logInOut = createImg();
logInOut.className = "logInOut img-settings";
logInOut.src = "../resources/imgs/avatar.svg";

const navRings = createImg();
navRings.className = "navRings absolute img-settings";
navRings.src = "../resources/imgs/topnavimg.svg";

deliveryLog.append(deliveryNum, logInOut);

topNavContainer.append(deliveryLog);

topNav.append(topNavContainer, navRings);

const nav = createNav();
nav.id = "navbar";
nav.className = "navbar";
//navcontainer has logo, navlinks and the cart
//navlinks and cart are contained in one div
const navContainer = createDiv();
navContainer.className = "navContainer container flex";

const cartContainer = createDiv();
cartContainer.className = "cartContainer relative ";

const cart = createImg();
cart.className = "cart img-settings";
cart.src = "../resources/imgs/carttimg.svg";

const cartCount = createSpan();
cartCount.className = "cartCount absolute";
cartCount.textContent = "0";

cartContainer.append(cart, cartCount);
// cart.appendChild(cartCount);

const navlinksAndCart = createDiv();
navlinksAndCart.className = "navlinksAndCart flex";

const button = document.createElement("button");
button.classList.add("mobile-nav-toggle");
button.setAttribute("aria-controls", "primary-navigation");
button.setAttribute("aria-expanded", "false");

const span = createSpan();
span.classList.add("sr-only");
span.textContent = "MENU";

button.appendChild(span);

//navigation links in the navbar
const navlinks = createDiv();
navlinks.setAttribute("id", "primary-navigation");
navlinks.setAttribute("data-visible", "false");
navlinks.className = "primary-navigation flex";

const links = [
  { href: "home.ejs", text: "" },
  { href: "home.ejs", text: "Home" },
  { href: "home.ejs#testimonials", text: "Testimonials" },
  { href: "products.ejs", text: "Products" },
  { href: "about.ejs", text: "About" },
  { href: "contact.ejs", text: "Contact" },
  { href: "https://www.blog.jedipetfoods.com", text: "Blog" },
];

for (let i = 0; i < links.length; i++) {
  const link = createA();
  link.href = links[i].href;
  link.textContent = links[i].text;
  if (i > 0) {
    link.className = `navlink ${link.textContent}`;
    navlinks.appendChild(link);
  } else {
    const logo = createImg();
    logo.src = "../resources/imgs/logo.svg";
    logo.className = "logo img-settings";
    link.id = "logo";
    link.append(logo);
    navContainer.appendChild(link);
  }
}
const currentPath = window.location.pathname;

console.log("The current path is:", currentPath);

navlinksAndCart.append(navlinks, cartContainer);
navContainer.append(navlinksAndCart, button);
nav.appendChild(navContainer);
navigationBar.append(topNav, nav);
