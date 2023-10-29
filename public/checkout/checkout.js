const checkoutSection = createSectionWithClasses(
  "checkout-section",
  "checkout-section"
);

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
//Get total price
let subTotalCheckout;

subTotalCheckout = removePartFromString(
  subtotalPrice.querySelector("span").textContent,
  "Kes: "
);

const totPrice = document.querySelector(".total-price").textContent;
console.log("the tot price is :", totPrice);

const priceCheckout = addCommas(
  removePartFromString(totPrice, "Total - Kes: ")
);

const amountDue = createH2WithClasses("amount-due");
const amoutPartOne = document.createTextNode(`Amount due: `);
const amountPartTwo = document.createTextNode(`Kes: ${priceCheckout}`);
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

const checkoutBtn = createLabelAndInput(
  "",
  false,
  false,
  "checkout-btn form-btn",
  "submit",
  "",
  "Complete order",
  "checkout-btn",
  ""
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

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("click", function () {
    // Check if the clicked radio button is not the same as the currently active one.
    if (activeRadio !== this) {
      // Check if there is an active radio button and if it has the "blue-bg" class.
      if (activeRadio && activeRadio.classList.contains("blue-bg")) {
        // If the active radio button has the "blue-bg" class, remove it.
        activeRadio.classList.remove("blue-bg");
      }
      // Add the "blue-bg" class to the clicked radio button.
      this.classList.add("blue-bg");
      // Set the currently clicked radio button as the new active radio button.
      activeRadio = this;
    }
  });
});

const delegateSubmitToBodyCheck = document.body;
delegateSubmitToBodyCheck.addEventListener("submit", submitFiredCheck);

function submitFiredCheck(e) {
  if (e.target.classList.contains("checkout-form")) {
    e.preventDefault();
    const form = e.target;
    const finalTotal = removePartFromString(
      amountDue.querySelector("span").textContent,
      "Kes: "
    );
    const totalCheckout = Number(removePartFromString(finalTotal, ","));

    const checkOutName = form.querySelector(".client-name").value;
    const checkOutPhone = form.querySelector(".client-phone").value;
    const checkOutMail = form.querySelector(".client-mail").value;
    const checkOutLocation = form.querySelector(".client-location").value;
    const checkOutSpecial = form.querySelector("textarea").value;
    const checkOutPayNum = form.querySelector(".pay-now").value;

    console.log("checkout form is:", form);
    console.log("checkOutName form is:", checkOutName);
    console.log("checkOutPhone form is:", checkOutPhone);
    console.log("checkOutMail form is:", checkOutMail);
    console.log("checkOutLocation form is:", checkOutLocation);
    console.log("checkOutSpecial form is:", checkOutSpecial);
    console.log("checkOutPayNum form is:", checkOutPayNum);
    console.log("subtotalCheckout  is:", subTotalCheckout);
    console.log("final total price  is:", finalTotal);
    console.log("final final price  is:", totalCheckout);
  }
}
