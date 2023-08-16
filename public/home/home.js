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

// -------------Glimpse Section ------------------------------
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

// const glimpseBtn = createA();
// glimpseBtn.className = "jediBtn glimpseBtn flex flex-centre-y";
// glimpseBtn.href = "#";
// glimpseBtn.textContent = "More About Us";

// const rightArrow2 = createImg();
// rightArrow2.className = "rightArrow";
// rightArrow2.src = "../resources/imgs/rightlineimg.svg";

// glimpseBtn.append(rightArrow2);

const glimpseBtn = createButton(
  false,
  "glimpseBtn",
  "#",
  "More About Us",
  "",
  "../resources/imgs/rightlineimg.svg",
  false,
  false
);

glimpse.appendChild(glimpseContainer);
glimpseContainer.append(glipseTitle, glimpseBox, glimpseBtn);

// ---------- Testimonial Section ---------------------------

const testimonials = createSection();
testimonials.id = "testimonials";

const testimonialsContainer = createDiv();
testimonialsContainer.className =
  " testimonialsContainer container flex flex-col flex-centre-y";

const testimonialsHeader = createH2();
testimonialsHeader.className = "testimonialsHeader subTitles";
testimonialsHeader.textContent = "Testimonials";

const testimonialsSub = createP();
testimonialsSub.className = "testimonialsSub";

const testimonialSub1 = document.createTextNode(
  `Delighted customers share their experiences with `
);
const testimonialSub2 = document.createTextNode(`Jedi Pet food.`);
const testimonialSubSpan = document.createElement("span");

testimonialSubSpan.appendChild(testimonialSub2);

testimonialsSub.append(testimonialSub1, testimonialSubSpan);

// const testimonialsBox = createDiv();
// testimonialsBox.className = "testimonialsBox flex flex-centre-y";

const marquee = createDiv(); //testimonialsBox
marquee.classList.add("marquee");

const marqueeContent = createUl();
marqueeContent.classList.add("marquee-content", "flex");

const testimonies = [
  {
    words: `“Donec diam et fermentum purus fusce adipiscing risus 
    pretium ut. Quam elit quis donec id et. Luctus amet integer convallis.” `,
    client: "_Sitna",
    profession: "Electrical Engineer - Gisal Harlem",
  },
  {
    words: `“Quam elit quis donec id et. Donec diam et fermentum
     purus fusce adipiscing risus pretium ut. Luctus amet integer convallis.” `,
    client: "_Brenda",
    profession: "Founder - Strayville Pet Rescue",
  },
  {
    words: `“Luctus amet integer convallis. Quam elit quis donec id et. 
    Donec diam et fermentum purus fusce adipiscing risus pretium ut.” `,
    client: "_Caline",
    profession: "Animal Activist & Pet Lover",
  },
  {
    words: `“Luctus amet integer convallis. Quam elit quis donec id et. 
    Donec diam et fermentum purus fusce adipiscing risus pretium ut.” `,
    client: "_`lenine",
    profession: "Animal Activist & Pet Lover",
  },
  {
    words: `“Luctus amet integer convallis. Quam elit quis donec id et. 
    Donec diam et fermentum purus fusce adipiscing risus pretium ut.” `,
    client: "_Bruce",
    profession: "Animal Activist & Pet Lover",
  },
  {
    words: `“Luctus amet integer convallis. Quam elit quis donec id et. 
    Donec diam et fermentum purus fusce adipiscing risus pretium ut.” `,
    client: "_Eisha",
    profession: "Animal Activist & Pet Lover",
  },
  {
    words: `“Luctus amet integer convallis. Quam elit quis donec id et. 
    Donec diam et fermentum purus fusce adipiscing risus pretium ut.” `,
    client: "_Zigi",
    profession: "Animal Activist & Pet Lover",
  },
  {
    words: `“Luctus amet integer convallis. Quam elit quis donec id et. 
    Donec diam et fermentum purus fusce adipiscing risus pretium ut.” `,
    client: "_Lorna",
    profession: "Animal Activist & Pet Lover",
  },
  //   { words: "", client: "_Max", profession: "" },
  //   { words: "", client: "_Lindsay", profession: "" },
  //   { words: "", client: "_Peter", profession: "" },
];
testimonies.forEach((testimony) => {
  const li = createLi();
  const testimonyCard = createDiv();
  testimonyCard.className = "testimonyCard relative";

  const dot = createDiv();
  dot.className = "dot absolute";

  const testimonyBlock = createP();
  testimonyBlock.className = "testimonyBlock absolute";
  testimonyBlock.textContent = testimony.words;

  const testimonyAuthorContainer = createDiv();
  testimonyAuthorContainer.className =
    "testimonyAuthorContainer flex flex-col absolute";

  const testimonyAuthor = createH2();
  testimonyAuthor.textContent = testimony.client;
  testimonyAuthor.className = "testimonyAuthor";

  const authorProfession = createP();
  authorProfession.textContent = testimony.profession;
  authorProfession.className = "authorProfession";

  testimonyAuthorContainer.append(testimonyAuthor, authorProfession);
  testimonyCard.append(dot, testimonyBlock, testimonyAuthorContainer);
  li.appendChild(testimonyCard);
  marqueeContent.appendChild(li);
});

marquee.appendChild(marqueeContent);

const testimonialsUnder = createP();
testimonialsUnder.className = "testimonialsUnder";
testimonialsUnder.textContent = "You can share in the delight too!";

const testimonialsBtn = createButton(
  false,
  "testimonialsBtn",
  "#",
  "Shop Now",
  "",
  "../resources/imgs/rightlineimg.svg",
  false,
  false
);

testimonials.append(testimonialsContainer);
testimonialsContainer.append(
  testimonialsHeader,
  testimonialsSub,
  marquee,
  //   testimonialsBox,
  testimonialsUnder,
  testimonialsBtn
);

// --------------- Featured Blog Section -------------------------------
const blogFeatureSection = createSection();
blogFeatureSection.id = "blogFeatureSection";

const blogFeatureContainer = createDiv();
blogFeatureContainer.className =
  "blogFeatureContainer container flex flex-col flex-centre-y";

const blogFeatureHeader = createH2();
blogFeatureHeader.className = "blogFeatureHeader subTitles ";
blogFeatureHeader.textContent = "Featured Blogs";

const blogSub = createP();
blogSub.className = "blogSub";
blogSub.textContent =
  "Traverse authentic, educative, interesting and informative insights from our blog.";

const blogFeatureBox = createDiv();
blogFeatureBox.className = "blogFeatureBox flex ";

const blogs = [
  {
    blogPic: "catontreewiththoughts.svg",
    blogTitle: "Understand Why Cats Love Nature.",
    blogPost: `Quam elit quis donec id et. Donec diam et fermentum
     purus fusce adipiscing risus pretium ut. Luctus amet integer convallis`,
  },
  {
    blogPic: "Jedipetfood.svg",
    blogTitle: "The Best Dry Food Diet For Your Cute Cats.",
    blogPost: `Rrem ipsum dolor sit amet consectetur. Quam elit quis donec id et.
     Donec diam et fermentum purus fusce adipiscing`,
  },
  {
    blogPic: "catinlovinghome.svg",
    blogTitle: "How To Make Your Feline Friend Feel at Home.",
    blogPost: `Donec diam et fermentum purus fusce adipiscing risus pretium ut.
     Luctus amet integer convallis sit metus convallis molestie posuere`,
  },
];

blogs.forEach((blog) => {
  const blogFeatureCard = createDiv();
  blogFeatureCard.className = "blogFeatureCard";

  const blogFeatureImg = createImg();
  blogFeatureImg.className = "blogFeatureImg";
  blogFeatureImg.src = `../resources/imgs/${blog.blogPic}`;

  const blogCardContainer = createDiv();
  blogCardContainer.className = "blogCardContainer flex flex-col ";

  const blogTitle = createH2();
  blogTitle.className = "blogTitle";
  blogTitle.textContent = blog.blogTitle;

  const maxLength = 100;

  const blogFeature = createP();
  blogFeature.className = "blogFeature";

  if (blog.blogPost.length > maxLength) {
    const truncatePost = blog.blogPost.substring(0, maxLength) + "...";
    blogFeature.textContent = truncatePost;
  }

  const blogFeatureRead = createA();
  blogFeatureRead.className = "blogFeatureRead";
  blogFeatureRead.href = "#";
  blogFeatureRead.textContent = "Read More >";

  blogCardContainer.append(blogTitle, blogFeature, blogFeatureRead);
  blogFeatureCard.append(blogFeatureImg, blogCardContainer);
  blogFeatureBox.appendChild(blogFeatureCard);
});

const blogFeatureBtn = createButton(
  false,
  "blogFeatureBtn",
  "#",
  "Explore Blog",
  "",
  "../resources/imgs/rightlineimg.svg",
  false,
  false
);

blogFeatureContainer.append(
  blogFeatureHeader,
  blogSub,
  blogFeatureBox,
  blogFeatureBtn
);
blogFeatureSection.append(blogFeatureContainer);
// ------------------ End Blog Featured Section --------------------------
document
  .querySelector("body")
  .append(homeHeroSection, glimpse, testimonials, blogFeatureSection);

const root = document.documentElement;
//below code enables us know displayed elements, so as to know the right num to duplicate
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContents = document.querySelector(".marquee-content");

root.style.setProperty("--marquee-elements", marqueeContents.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContents.appendChild(marqueeContents.children[i].cloneNode(true));
}
