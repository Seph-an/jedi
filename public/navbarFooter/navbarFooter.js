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
topNav.className = "topNav ";

const topNavContainer = createDiv();
topNavContainer.className = "topNavContainer container flex";

topNav.appendChild(topNavContainer);

const nav = createNav();
nav.id = "navbar";
nav.className = "navbar";
//navcontainer has logo, navlinks and the cart
//navlinks and cart are contained in one div
const navContainer = createDiv();
navContainer.className = "navContainer container flex";

const cart = createDiv();
cart.className = "cart img-settings";

const cartCount = createSpan();
cartCount.className = "cartCount";
cartCount.textContent = "0";

cart.appendChild(cartCount);

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
    link.id = "logo";
    link.className = "img-settings";
    navContainer.appendChild(link);
  }
}

navlinksAndCart.append(navlinks, cart);
navContainer.append(navlinksAndCart, button);
nav.appendChild(navContainer);
navigationBar.append(topNav, nav);
