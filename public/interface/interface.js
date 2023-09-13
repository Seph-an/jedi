const interfaceSection = createSectionWithClasses(
  "interface-section",
  "interface-section"
);

const interfaceContainer = createDivWithClasses(
  "interface-container container flex flex-col flex-centre-y"
);
const interfaceHeader = createH1WithClasses("interface-header", "DASHBOARD");

const uploadProductForm = createForm(
  "upload-productform flex flex-col flex-centre-y",
  "upload-productform"
);

const productName = createLabelAndInput(
  "Product name:",
  true,
  false,
  "product-name",
  "text",
  "Enter name of product",
  "",
  "product-name",
  "required",
  ""
);

const productOldPrice = createLabelAndInput(
  "Product old price:",
  true,
  false,
  "product-price-old",
  "number",
  "Enter price of product",
  "",
  "product-price-old",
  "required",
  ""
);

const productNewPrice = createLabelAndInput(
  "Product new price:",
  false,
  false,
  "product-price-new",
  "number",
  "You can ignore",
  "",
  "product-price-new",
  "required",
  ""
);

const productStock = createLabelAndInput(
  "Is product in stock?:",
  true,
  false,
  "product-instock",
  "text",
  "Enter 'YES' or 'NO'",
  "",
  "product-instock",
  "required",
  ""
);

const productOffer = createLabelAndInput(
  "Is product on offer?:",
  true,
  false,
  "product-onoffer",
  "text",
  "Enter 'YES' or 'NO'",
  "",
  "product-onoffer",
  "required",
  ""
);
const productFiles = createLabelAndInput(
  "Attach product images:",
  true,
  false,
  "product-images",
  "file",
  "",
  "",
  "product-images",
  "required",
  "",
  true
);

const productDescription = createLabelAndInput(
  "Describe product:",
  true,
  true,
  "product-description ",
  "",
  "",
  "",
  "description",
  "required",
  "textarea"
);

const productButton = createLabelAndInput(
  "",
  false,
  false,
  "submit-button",
  "submit",
  "",
  "Post Product",
  "product-submit-button",
  "required",
  ""
);
const productBtn = createButton(
  false,
  "product-submit",
  "",
  "Post Product",
  "",
  "",
  false,
  true
);
// const description = document.createElement("textarea");
// description.name = "textarea";
// description.id = "description";
// description.className = "description";

uploadProductForm.append(
  productName,
  productOldPrice,
  productNewPrice,
  productStock,
  productOffer,
  productFiles,
  productDescription,
  productButton
  //   productBtn
);

interfaceContainer.append(interfaceHeader, uploadProductForm);
interfaceSection.append(interfaceContainer);

document
  .querySelector("body")
  .append(navigationBar, interfaceSection, footerSection);

const interfaceClick = document.body;
interfaceClick.addEventListener("click", interfaceClickFired);

function interfaceClickFired(e) {
  e.preventDefault();
  if (e.target.classList.contains("submit-button")) {
    const form = e.target.closest("form");
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
      if (input.className !== "submit-button") {
        if (input.className !== "product-price-new" && input.value == "") {
          console.log("fields cannot be left empty");
        }
        console.log("Theinput value is:", input.value);
        console.log("Theinput class is:", input.className);
      }
    });
    console.log("The inputs are:", inputs);

    const tinymceEditor = tinymce.get("description");
    const content = tinymceEditor.getContent();

    console.log("TinyMCE content is:", content);
  }
}
