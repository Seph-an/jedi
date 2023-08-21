const contactSection = createSectionWithClasses(
  "contact-section",
  "contact-section"
);

const contactContainer = createDivWithClasses(
  "contact-container container flex flex-col flex-centre-y"
);

const contactHeader = createH1WithClasses("contact-header", "Get In Touch");

const contactSub = createPWithClasses("contact-sub");

const contactSubPartOne = document.createTextNode(
  `Whether you have a question, comment, complement or any concern; `
);

const contactSubPartTwo = document.createTextNode("Reach Out");

const contactSubPartThree = document.createTextNode(
  `! We are happy to engage with you.`
);

const contactSubSpan = document.createElement("span");

contactSubSpan.appendChild(contactSubPartTwo);

contactSub.append(contactSubPartOne, contactSubSpan, contactSubPartThree);

const formDiv = createDivWithClasses(
  "form-container flex flex-col flex-centre-y"
);

const formHeader = createH2WithClasses("form-header", "Rapid Response!");

const formSub = createPWithClasses("formSub");

const formSubOne = document.createTextNode(`Fields marked with `);

const formSubTwo = document.createTextNode("*");

const formSubThree = document.createTextNode(` must be filled.`);

const formSubSpan = document.createElement("span");

const contactForm = document.createElement("form");
contactForm.className = "contact-form flex flex-col flex-centre-y";

const nameRow = createDivWithClasses("name-row form-row flex");

const firstName = createLabelAndInput(
  "First Name :",
  true,
  false,
  "first-name input-div",
  "text",
  "Enter your first name",
  "",
  "first-name"
);

const secondName = createLabelAndInput(
  "Second Name :",
  false,
  false,
  "second-name",
  "text",
  "Enter your second name",
  "",
  "second-name"
);

nameRow.append(firstName, secondName);

const emailPhoneRow = createDivWithClasses("emailphone-row form-row flex");

const email = createLabelAndInput(
  "E - mail :",
  true,
  false,
  "e-mail",
  "mail",
  "Your e-mail address",
  "",
  "e-mail"
);

const phone = createLabelAndInput(
  "Phone :",
  false,
  false,
  "phone",
  "number",
  "Your phone number",
  "",
  "phone"
);

emailPhoneRow.append(email, phone);

const organisationRow = createDivWithClasses("organisation-row form-row flex");

const organisation = createLabelAndInput(
  "Organisation :",
  false,
  false,
  "organisation",
  "text",
  "Name of your organisation",
  "",
  "organisation"
);

const role = createLabelAndInput(
  "Role :",
  false,
  false,
  "role",
  "text",
  "Your role in the organisation",
  "",
  "role"
);

organisationRow.append(organisation, role);

const messageRow = createDivWithClasses("message-row form-row flex");

const message = createLabelAndInput(
  "Message :",
  false,
  true,
  "message",
  "",
  "Enter your message",
  "",
  "message"
);
//jediBtn
messageRow.append(message);

const formBtn = createButton(
  false,
  "form-btn",
  "#",
  "Send",
  "../resources/imgs/send.svg",
  "",
  true,
  false
);

contactForm.append(nameRow, emailPhoneRow, organisationRow, formBtn);
formSubSpan.appendChild(formSubTwo);
formSub.append(formSubOne, formSubSpan, formSubThree);

formDiv.append(formHeader, formSub, contactForm);

contactContainer.append(contactHeader, contactSub, formDiv);

contactSection.append(contactContainer);

document
  .querySelector("body")
  .append(navigationBar, contactSection, footerSection);
