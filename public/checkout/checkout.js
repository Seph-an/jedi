const checkoutSection = createSectionWithClasses("checkout-section");

const checkoutContainer = createDivWithClasses(
  "checkout-container flex flex-col flex-centre-y"
);

const checkoutHeader = createH1WithClasses("checkout-header jedi-h1");

const checkoutForm = document.createElement("form");
checkoutForm.className = "checkout-form flex flex-col flex-centre-y";

const checkoutBtn = createButton(
  false,
  "checkout-btn",
  "",
  "Complete order",
  "",
  "",
  false,
  true
);
checkoutForm.append(checkoutBtn);
checkoutContainer.append(checkoutHeader, checkoutForm);
checkoutSection.append(checkoutContainer);

document
  .querySelector("body")
  .append(navigationBar, checkoutSection, footerSection);
