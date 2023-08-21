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
const createUl = () => document.createElement("ul");
const createLi = () => document.createElement("li");

//if twoicons is true, it means the btn has two icons
//use case
// const buttonWithImageFirst = createButtonWithOptions(
//   false //true if you want to have icon text icon
//   'myButton imageFirst', //button classes
//   '#', //href
//   'Click Me', //words on button
//   'image-url.jpg', //icon or image one
//   'image-url2.jpg', //icon or image two
//   true // true if you want image to come first
// );
function createButton(
  twoicons = true,
  classes,
  href,
  content,
  imgSrc1,
  imgSrc2,
  imageFirst = true,
  noicon = true
) {
  const button = createA();
  button.className = `${classes} jediBtn flex flex-y`;
  button.href = href;

  const text = createSpan();
  text.className = "buttonText";
  text.textContent = content;

  const img2 = createImg();
  img2.className = "buttonIcon buttonIcon2";
  img2.src = imgSrc2;

  if (twoicons) {
    const img1 = createImg();
    img1.className = "buttonIcon buttonIcon1 ";
    img1.src = imgSrc1;

    button.append(img1, text, img2);
  } else {
    if (noicon) {
      button.append(text);
    } else {
      if (imageFirst) {
        button.append(img2, text);
      } else {
        button.append(text, img2);
      }
    }
  }

  return button;
}
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
  { href: "/", text: "" },
  { href: "/", text: "Home" },
  { href: "/#testimonials", text: "Testimonials" },
  { href: "/products", text: "Products" },
  { href: "/about", text: "About" },
  { href: "/contact", text: "Contact" },
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

navlinksAndCart.append(navlinks, cartContainer);
navContainer.append(navlinksAndCart, button);
nav.appendChild(navContainer);
navigationBar.append(topNav, nav);

// --------------- Enter Footer Section --------------------------------
function createSectionWithClasses(id, classes) {
  const section = createSection();
  section.id = id;
  section.className = classes;
  return section;
}

function createDivWithClasses(classNames) {
  const div = createDiv();
  div.className = classNames;
  return div;
}
function createH1WithClasses(classNames, content) {
  const h1 = createH1();
  h1.className = classNames;
  h1.textContent = content;
  return h1;
}
function createH2WithClasses(classNames, content) {
  const h2 = createH2();
  h2.className = classNames;
  h2.textContent = content;
  return h2;
}

function createRealH2WithClasses(classNames, content) {
  const h2 = document.createElement("h2");
  h2.className = classNames;
  h2.textContent = content;
  return h2;
}
function createPWithClasses(classNames, content) {
  const P = createP();
  P.className = classNames;
  P.textContent = content;
  return P;
}
function createForm(classNames) {
  const form = document.createElement("form");
  form.className = classNames;
  return form;
}
function createImage(classNames, src, tag) {
  const img = document.createElement("img");
  img.className = classNames;
  img.src = src;
  img.tag = tag;
  return img;
}
function createInputField(classNames, type, placeholder, value, id) {
  const inputElement = document.createElement("input");
  inputElement.type = type;
  inputElement.className = classNames;
  inputElement.placeholder = placeholder;
  inputElement.required = true;
  inputElement.value = value;
  return inputElement;
}

function createLabelAndInput(
  label,
  compulsory = true,
  textArea = true,
  classNames,
  type,
  placeholder,
  value,
  id
) {
  const div = createDivWithClasses("label-input flex flex-col");
  const input = createInputField(classNames, type, placeholder, value, id);
  const formLabel = createLabel();
  formLabel.textContent = label;
  formLabel.setAttribute("for", id);
  if (compulsory) {
    formLabel.className = "for-compulsory";
  }
  const textarea = document.createElement("textarea");
  textarea.placeholder = placeholder;
  if (textArea) {
    div.append(formLabel, textarea);
  } else {
    div.append(formLabel, input);
  }

  return div;
}

function createList(ulClassName, items, useAnchors = false) {
  const ulElement = document.createElement("ul");
  ulElement.className = ulClassName;

  items.forEach((item) => {
    const liElement = useAnchors
      ? createListItemWithAnchor(item.content, item.href)
      : createListItem(item);
    ulElement.appendChild(liElement);
  });

  return ulElement;
}

function createListItem(content) {
  const liElement = document.createElement("li");
  liElement.textContent = content;
  return liElement;
}

function createListItemWithAnchor(content, href) {
  const anchorElement = document.createElement("a");
  anchorElement.textContent = content;
  anchorElement.href = href; // Set the appropriate href value here
  const liElement = document.createElement("li");
  liElement.appendChild(anchorElement);
  return liElement;
}
const footerSection = createSectionWithClasses("footerSection");

const footerContainer = createDivWithClasses(
  "footerContainer container flex flex-col"
);

const subscribeContainer = createDivWithClasses(
  "subscribeContainer flex flex-col flex-centre-y"
);

const subscribeHeader = createH2WithClasses(
  "subscribeHeader",
  "Stay In The Loop!"
);

const subscribeSub = createPWithClasses(
  "subscribeSub",
  `Receive offers, deals, experts and pet lovers 
  insights, experiences and ideas straight to your inbox.`
);

const form = createForm("form flex ");

const input = createInputField(
  "input subscribeInput",
  "mail",
  "Enter your mail...",
  ""
);

const subscribe = createInputField(
  "input subscribeBtn",
  "submit",
  "",
  "Subscribe"
);

const footerLinks = createDivWithClasses("footerLinks flex ");

const address = createDivWithClasses("address footerDivs flex flex-col");

const addressTitle = createH2WithClasses(
  "addressTitle footerlinkTitle",
  "Contact"
);

const addressContent = createList(
  "addressContent footerlinkContent flex flex-col",
  [
    "Rangwe 10, Off Rangwe Road,",
    "Industrial Area, Nairobi - Kenya.",
    "inquiry@jedipetfoods.com",
    "+254 - 713 - 309 - 025",
  ]
);

address.append(addressTitle, addressContent);

const company = createDivWithClasses("company footerDivs flex flex-col");

const companyTitle = createH2WithClasses(
  "companyTitle footerlinkTitle",
  "Company"
);

const companyContent = createList(
  "companyContent footerlinkContent flex flex-col",
  [
    { content: "Careers", href: "#" },
    { content: "Who We Are", href: "#" },
    { content: "Shop", href: "#" },
    { content: "Privacy Policy", href: "#" },
    { content: "Terms of Service", href: "#" },
  ],
  true
);

company.append(companyTitle, companyContent);

const happykitty = createImage(
  "happykitty",
  "../resources/imgs/happykitty.svg",
  "A happy full kitten"
);

footerLinks.append(address, company, happykitty);

const footer = createDivWithClasses("footer flex flex-centre-xy");

const currentYear = new Date().getFullYear();

const footerWords = `©️ ${currentYear} - Jedi Pet Foods Limited. All Rights Reserved.`;

form.append(input, subscribe);
subscribeContainer.append(subscribeHeader, subscribeSub, form);
footerContainer.append(subscribeContainer, footerLinks);
footer.append(footerWords);
footerSection.append(footerContainer, footer);

//cart funtionality
//logged in and out functionality
const currentPath = window.location.pathname;

console.log("The current path is:", currentPath);

// Get all anchor tags in the navigation
const navigationLinks = document.querySelectorAll("nav a");

// Iterate through the anchor tags
navigationLinks.forEach((link) => {
  // Compare the link's href with the current page's URL
  if (link.href === currentPath) {
    // Add a class to the active link
    link.classList.add("active");
  }
});
