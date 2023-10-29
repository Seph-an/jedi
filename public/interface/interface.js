// fetch("/products", {
//   method: "POST",
// })
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const resData = res.json();
//     return resData;
//   })
//   .then((data) => {
//     console.log("data returned is:", data);
//   })
//   .catch((err) => {
//     console.log("the error is:", err);
//   });

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
  "product-name text-or-number",
  "text",
  "Enter name of product",
  "",
  "product-name",
  "required",
  "productName"
);

const productPrice = createLabelAndInput(
  "Product price:",
  true,
  false,
  "product-price text-or-number",
  "number",
  "Enter price of product",
  "",
  "product-price",
  "required",
  "productPrice"
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
  "product-images",
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

uploadProductForm.append(
  productName,
  productPrice,
  productFiles,
  productDescription,
  productButton
);

interfaceContainer.append(interfaceHeader, uploadProductForm);
interfaceSection.append(interfaceContainer);

document
  .querySelector("body")
  .append(navigationBar, interfaceSection, footerSection);

const interfaceClick = document.body;
interfaceClick.addEventListener("click", interfaceClickFired);

function interfaceClickFired(e) {
  if (e.target.classList.contains("submit-button")) {
    console.log("submit clicked");
    e.preventDefault();
    const form = e.target.closest("form");

    const textOrNumberInputs = form.querySelectorAll(".text-or-number");

    const fileSelected = form.querySelector(".product-images");
    const imagesFiles = fileSelected.files;

    const tinymceEditor = tinymce.get("description");

    const content = tinymceEditor.getContent();

    let isAnyInputEmpty = false; // Initialize the flag as false

    let productPrice;
    let productName;
    textOrNumberInputs.forEach((input) => {
      if (input.value === "") {
        isAnyInputEmpty = true; // Set the flag to true if any input is empty
      }
      if (input.name == "productName") {
        productName = input.value;
      } else {
        productPrice = input.value;
      }
    });

    if (content === "" || isAnyInputEmpty) {
      console.log("Fields cannot be empty.");
    } else {
      //   handleFileUpload(imagesFiles, inputArray);
      if (imagesFiles.length === 0) {
        console.log("No files selected.");
      } else {
        console.log("Good to go.");
        handleSubmitProducts(productName, productPrice, imagesFiles, content);
      }
    }
  }
}

function handleFileUpload(fileInput, inputArray) {
  const maxFileSizeInBytes = 1024 * 1024; // 1 MB (adjust to your desired limit)
  //   const selectedFiles = fileInput.files;

  for (let i = 0; i < fileInput.length; i++) {
    const file = fileInput[i];

    if (file.size > maxFileSizeInBytes) {
      console.log(
        `File "${file.name}" size exceeds the allowed limit (1 MB).
            Please choose a smaller file.`
      );
      fileInput.value = ""; // Clear the file input to allow selecting a different file
    } else {
      // Valid file, push it to inputArray
      inputArray.push({
        fileName: file.name,
        fileSize: file.size,
      });
    }
  }
}

function handleSubmitProducts(productName, productPrice, imagesFiles, content) {
  console.log("Handle submit called");
  console.log("Filelist:", imagesFiles);

  const formData = new FormData();
  formData.append("productName", productName);
  formData.append("productPrice", productPrice);
  //   formData.append("product-images", imagesFiles);
  for (let i = 0; i < imagesFiles.length; i++) {
    formData.append("product-images", imagesFiles[i]);
  }
  formData.append("textarea", content);

  const urlProductsUpload = "http://localhost:3000/products-upload/uploads";
  const optionsProductsUpload = {
    method: "POST",
    body: formData,
  };

  fetch(urlProductsUpload, optionsProductsUpload)
    .then((response) => {
      if (response.ok) {
        // Handle a successful response from the server
        console.log("Form data submitted successfully.");
      } else {
        // Handle errors or server responses
        console.error("Form data submission failed.");
      }
    })
    .catch((error) => {
      // Handle network errors
      console.error("Network error:", error);
    });
}
