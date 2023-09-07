const interfaceSection = createSectionWithClasses(
  "interface-section",
  "interface-section"
);

const interfaceContainer = createDivWithClasses(
  "interface-container container flex flex-col flex-centre-y"
);
const interfaceHeader = createH1WithClasses("interface-header", "DASHBOARD");

const uploadProductForm = createForm(
  "upload-productform",
  "upload-productform"
);
const description = document.createElement("textarea");
description.name = "textarea";
description.id = "description";
description.className = "description";

uploadProductForm.append(description);

interfaceContainer.append(interfaceHeader, uploadProductForm);
interfaceSection.append(interfaceContainer);
document
  .querySelector("body")
  .append(navigationBar, interfaceSection, footerSection);
