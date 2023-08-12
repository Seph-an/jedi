const homeHeroSection = createSection();
homeHeroSection.id = "homeHeroSection";
homeHeroSection.className = "homeHeroSection flex flex-col";

const heroSectionContainer = createDiv();
heroSectionContainer.className = "container flex flex-col";

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

const heroBtn = createA();
heroBtn.href = "#";
// heroBtn.href="products.ejs"
heroBtn.className = "heroBtn flex flex-centre-y";

const btnSparkles = createImg();
btnSparkles.className = "btnSparkles";
btnSparkles.src = "../resources/imgs/starsimg.svg";

const btnWords = createP();
btnWords.textContent = "Get Some";

const rightArrow = createImg();
rightArrow.className = "rightArrow";
rightArrow.src = "../resources/imgs/rightlineimg.svg";

heroBtn.append(btnSparkles, btnWords, rightArrow);

const heroImgDiv = createDiv();
heroImgDiv.className = "heroImgDiv flex flex-centre-xy relative";

const heroBlob = createImg();
heroBlob.className = "heroBlob";
heroBlob.src = "../resources/imgs/blobimg.svg";

const jediProducts = createImg();
jediProducts.className = "jediProducts absolute";
jediProducts.src = "../resources/imgs/heroImage.svg";

heroImgDiv.append(heroBlob, jediProducts);

heroCopy.append(heroSub, heroTitle, heroPrint, heroBtn);
heroSection.append(heroCopy, heroImgDiv);

const heroNextBtn = createA();
heroNextBtn.className = "heroNextBtn flex flex-centre-xy";
heroNextBtn.href = "#";

const arrowNext = createImg();
arrowNext.className = "arrowNext";
arrowNext.src = "../resources/imgs/arrowDown.svg";

heroNextBtn.appendChild(arrowNext);

heroSectionContainer.append(heroSection, heroNextBtn);
homeHeroSection.append(navigationBar, heroSectionContainer);

document.querySelector("body").append(homeHeroSection);
