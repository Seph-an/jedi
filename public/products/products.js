"use strict";

import productsData from "../login/items.js";

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
  `Same Day Delivery Within Nairobi And Its Environs For Orders Before 3:00 PM EAT.`
);
jumbotron.append(timeLimit);
const productsHeader = createH1WithClasses("products-header", "Our Products.");

productsContainer.append(jumbotron, productsHeader);

productsSection.append(slash, productsContainer);

document
  .querySelector("body")
  .append(navigationBar, productsSection, footerSection);

//to be relocated to the navbarFooter.js
const links = document.querySelector(".primary-navigation");
const linkNavs = links.querySelectorAll("a");
linkNavs.forEach((linkNav) => {
  const url = new URL(linkNav.href);
  const path = url.pathname;
  const forComp = `${path}/`;

  if (forComp === currentPath) {
    linkNav.style.color = "#1283fe";
  }

  console.log("The href is:", path);
  console.log("For comp is:", forComp);
});

console.log(productsData.products[0].item_price_two);
