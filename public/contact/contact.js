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

const messageRow = createDivWithClasses("message-row");

const message = createLabelAndInput(
  "Message :",
  true,
  true,
  "message",
  "",
  "",
  "",
  "message"
);

messageRow.append(message);

//jediBtn
const formBtn = createButton(
  false,
  "form-btn",
  "/contact",
  "Send",
  "",
  "../resources/imgs/send.svg",
  true,
  false
);

contactForm.append(
  nameRow,
  emailPhoneRow,
  organisationRow,
  messageRow,
  formBtn
);

formSubSpan.appendChild(formSubTwo);
formSub.append(formSubOne, formSubSpan, formSubThree);

formDiv.append(formHeader, formSub, contactForm);

const express = createH2WithClasses("express", "Express");
const expressSub = createPWithClasses("express-sub", "Get in touch now!");

const contactMailLocation = createDivWithClasses("contact-mail-location flex");

const contactDiv = createDivWithClasses(
  "contact-div content-div flex flex-col"
);

const contactIcon = createImage(
  "contact-icon getintouch-icon",
  "../resources/imgs/contact.svg",
  "Jedi Pet Foods Contact"
);
const contactContentDiv = createDivWithClasses(
  "contact-content-div loco flex flex-col "
);

const contactContent = createList(
  "contact-content getintouch-content",
  [
    "+254 - 713 - 309 - 025",
    "+254 - 785 - 197 - 204",
    "+254 - 701 - 053 - 934",
  ],
  false
);

contactContentDiv.append(contactContent);

contactDiv.append(contactIcon, contactContentDiv);

const mailDiv = createDivWithClasses("mail-div content-div flex flex-col");

const mailIcon = createImage(
  "contact-icon getintouch-icon",
  "../resources/imgs/mail.svg",
  "Jedi Pet Foods Mail"
);

const mailContentDiv = createDivWithClasses(
  "mail-content-div loco flex flex-col"
);

const mailContent = createList(
  "mail-content getintouch-content flex flex-col flex-centre-y",
  ["info@jedipetfoods.com", "inquiry@jedipetfoods.com"],
  false
);

mailContentDiv.append(mailContent);

mailDiv.append(mailIcon, mailContentDiv);

const locationDiv = createDivWithClasses(
  "location-div content-div flex flex-col"
);

const locationIcon = createImage(
  "location-icon getintouch-icon",
  "../resources/imgs/location.svg",
  "Jedi Pet Foods Location"
);

const locationContentDiv = createDivWithClasses("location-content-div loco");

const locationContent = createList(
  "location-content getintouch-content flex flex-col flex-centre-y",
  ["Rangwe 10,", "Off Rangwe Road,", "Industrial Area - Nairobi,", "Kenya"],
  false
);

locationContentDiv.append(locationContent);

locationDiv.append(locationIcon, locationContentDiv);

contactMailLocation.append(contactDiv, mailDiv, locationDiv);

contactContainer.append(
  contactHeader,
  contactSub,
  formDiv,
  express,
  expressSub,
  contactMailLocation
);

contactSection.append(contactContainer);

document
  .querySelector("body")
  .append(navigationBar, contactSection, footerSection);
