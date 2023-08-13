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
heroBtn.className = "jediBtn flex flex-centre-y";

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

const glimpse = createSection();
glimpse.id = "glimpse";

const glimpseContainer = createDiv();
glimpseContainer.className =
  "container glimpseContainer flex flex-col flex-centre-y";

const glipseTitle = createH2();
glipseTitle.className = "subTitles glipseTitle";
glipseTitle.textContent = "At a Glimpse";

const glimpseItems = [
  {
    id: "quick",
    icon: "quickDelivery.svg",
    title: "Quick Delivery",
    body: `Our competent team of qualified personnel and partners
     work together to guarantee that your order from Jedi Pet Foods
      Limited gets delivered rapidly and at your convenience.`,
  },
  {
    id: "sus",
    icon: "Sustainability.svg",
    title: "Sustainability",
    body: `In addition to minimising waste by making the most of our
     raw materials. We contribute to the global goal of fighting 
     climate change by enforcing stringent energy efficiency and
      energy conservation measures.`,
  },
  {
    id: "trace",
    icon: "Traceability.svg",
    title: "Traceability",
    body: `We account for the origin of every unit raw material
     that goes into manufacturing our product on top of all other
      aspects of the supply chain. This ensures the highest 
      standards of quality assurance & control.`,
  },
];

const glimpseBox = createDiv();
glimpseBox.className = "glimpseBox flex";

glimpseItems.forEach((glimpseItem) => {
  const glimpseCard = createDiv();
  glimpseCard.className = `glimpseCard ${glimpseItem.id} flex flex-col`;

  const cardHeadContainer = createDiv();
  cardHeadContainer.className = "cardHeadContainer flex flex-col flex-centre-y";

  const cardicon = createImg();
  cardicon.className = "cardicon ";
  cardicon.src = `../resources/imgs/${glimpseItem.icon}`;

  const cardTitle = createH2();
  cardTitle.className = "subTitles subHead";
  cardTitle.textContent = glimpseItem.title;

  const cardBody = createP();
  cardBody.className = "itemBody";
  cardBody.textContent = glimpseItem.body;

  cardHeadContainer.append(cardicon, cardTitle);
  glimpseCard.append(cardHeadContainer, cardBody);
  glimpseBox.append(glimpseCard);
});

const glimpseBtn = createA();
glimpseBtn.className = "jediBtn glimpseBtn flex flex-centre-y";
glimpseBtn.href = "#";

const glimpseBtnWrds = createP();
glimpseBtnWrds.textContent = "More About Us";

const rightArrow2 = createImg();
rightArrow2.className = "rightArrow";
rightArrow2.src = "../resources/imgs/rightlineimg.svg";

glimpseBtn.append(glimpseBtnWrds, rightArrow2);

glimpse.appendChild(glimpseContainer);
glimpseContainer.append(glipseTitle, glimpseBox, glimpseBtn);

document.querySelector("body").append(homeHeroSection, glimpse);
