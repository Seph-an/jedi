const interfaceSection = createSectionWithClasses(
  "interface-section",
  "interface-section"
);

const interfaceContainer = createDivWithClasses(
  "interface-container container flex flex-col flex-centre-y"
);
const interfaceHeader = createH1WithClasses("interface-header", "DASHBOARD");
interfaceContainer.append(interfaceHeader);
interfaceSection.append(interfaceContainer);
document
  .querySelector("body")
  .append(navigationBar, interfaceSection, footerSection);
