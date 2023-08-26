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

const radioBtns = createDivWithClasses("radio-btns flex flex-col");

const mpesa = createCustomRadio("mpesa", "Pay now via M-Pesa");
const payNow = createLabelAndInput(
  "",
  false,
  false,
  "pay-now",
  "number",
  "Enter M-Pesa number",
  "",
  "pay-now"
);
const onDelivery = createCustomRadio("on-delivery", "Cash on delivery");

radioBtns.append(mpesa, payNow, onDelivery);

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
  radioBtns,
  checkoutBtn
);

checkoutContainer.append(checkoutHeader, formSub, checkoutForm);
checkoutSection.append(checkoutContainer);

document
  .querySelector("body")
  .append(navigationBar, checkoutSection, footerSection);

const radioButtons = document.querySelectorAll(".radio-input");

let activeRadio = null;

// radioButtons.forEach((radioButton) => {
//   radioButton.addEventListener("click", function () {
//     if (activeRadio) {
//       activeRadio.classList.remove("blue-bg");
//     }
//     if (activeRadio !== this) {
//       this.classList.add("blue-bg");
//       activeRadio = this;
//     } else {
//       activeRadio = null;
//     }
//   });
// });
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("click", function () {
    if (activeRadio !== this) {
      if (activeRadio) {
        activeRadio.classList.remove("blue-bg");
      }
      this.classList.add("blue-bg");
      activeRadio = this;
    }
  });
});

// const delegateClickToBody = document.body;
// delegateClickToBody.addEventListener("click", clickFired);

// function clickFired(e) {
//   if (e.target.classList.contains("radio-input")) {
//     if (e.target.classList.contains("blue-bg")) {
//       e.target.classList.remove("blue-bg");
//       console.log("Background color changed to grey");
//     } else {
//       e.target.classList.add("blue-bg");
//       console.log("Background color changed to blue");
//     }
//   }
// }
