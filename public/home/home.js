const homeHeroSection = createSection();
homeHeroSection.id = "homeHeroSection";
homeHeroSection.className = "homeHeroSection flex flex-col";

const heroSectionContainer = createDiv();
heroSectionContainer.className = "container";

const heroSection = createDiv();
heroSection.className = "heroSection flex";

const heroCopy = createDiv();
heroCopy.className = "heroCopy flex flex-col";

const heroSub = createH2();
heroSub.className = "heroSub";
heroSub.textContent = "_Proudly Made in Kenya.";

const heroTitle = createH1();
heroTitle.className = "heroTitle";

const partOneText = document.createTextNode("Highly ");
const partTwoText = document.createTextNode("Nutritious, Yummy Pet Food ");
const partThreeText = document.createTextNode("For Your Furry Friends.");

// Create and set up the span elements
const spanPartTwo = document.createElement("span");
spanPartTwo.appendChild(partTwoText);

heroTitle.append(partOneText, spanPartTwo, partThreeText);

const heroPrint = createP();
heroPrint.className = "heroPrint";
heroPrint.textContent = "With ♥️, for Pets, by Pet Lovers.";

// const heroBtn = createA()
// heroBtn.href="products.ejs"
// heroBtn.textContent=""

const heroImgDiv = createDiv();
heroImgDiv.className = "heroImgDiv flex flex-centre-xy relative";

const heroBlob = createImg();
heroBlob.className = "heroBlob";
heroBlob.src = "../resources/imgs/blobimg.svg";

const jediProducts = createImg();
jediProducts.className = "jediProducts absolute";

heroImgDiv.append(heroBlob);

heroCopy.append(heroSub, heroTitle, heroPrint);
heroSection.append(heroCopy, heroImgDiv);

const heroNextBtn = createA();
heroNextBtn.className = "heroNextBtn";
heroNextBtn.href = "#";

const arrowNext = createImg();
arrowNext.className = "arrowNext";

heroNextBtn.appendChild(arrowNext);

heroSectionContainer.append(heroSection, heroNextBtn);
homeHeroSection.append(navigationBar, heroSectionContainer);

document.querySelector("body").append(homeHeroSection);
