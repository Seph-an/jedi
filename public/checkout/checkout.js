const checkoutSection = createSectionWithClasses("checkout-section");

const checkoutContainer = createDivWithClasses(
  "checkout-container flex flex-col flex-centre-y"
);

const checkoutHeader = createH1WithClasses(
  "checkout-header page-title",
  "Checkout"
);

const checkoutForm = document.createElement("form");
checkoutForm.className = "checkout-form flex flex-col flex-centre-y";

const clientName = createLabelAndInput(
  "Name:",
  true,
  false,
  "client-name",
  "text",
  "Recepient name",
  "",
  "client-name"
);
const clientPhone = createLabelAndInput(
  "Phone:",
  true,
  false,
  "client-phone",
  "number",
  "Recepient phone number",
  "",
  "client-phone"
);

const clientMail = createLabelAndInput(
  "E-mail:",
  true,
  false,
  "client-mail",
  "mail",
  "Recepient e-mail",
  "",
  "client-mail"
);

const clientLocation = createLabelAndInput(
  "Location:",
  true,
  false,
  "client-location",
  "text",
  "Location of delivery",
  "",
  "client-mail"
);

const clientSpecialDetails = createLabelAndInput(
  "Any delivery special instructions?",
  false,
  true,
  "client-special-details message-row",
  "",
  "",
  "",
  "client-special-details"
);
const amountDue = createH2WithClasses("amount-due");
const amoutPartOne = document.createTextNode(`Amount due: `);
const amountPartTwo = document.createTextNode("Ksh 4,000");
const amount = document.createElement("span");
amount.append(amountPartTwo);
amountDue.append(amoutPartOne, amount);

const mpesa = createRadioButton("Pay now via M-Pesa", true);

const onDelivery = createRadioButton("Cash on delivery", false);

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

checkoutForm.append(
  clientName,
  clientPhone,
  clientMail,
  clientLocation,
  clientSpecialDetails,
  amountDue,
  mpesa,
  onDelivery,
  checkoutBtn
);

checkoutContainer.append(checkoutHeader, formSub, checkoutForm);
checkoutSection.append(checkoutContainer);

document
  .querySelector("body")
  .append(navigationBar, checkoutSection, footerSection);
