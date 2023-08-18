const ourStorySection = createSectionWithClasses("ourStorySection");

const ourStoryContainer = createDivWithClasses(
  "ourStoryContainer container flex flex-col flex-centre-y"
);

const storyHeader = createH1WithClasses("storyHeader subTitles", "Who We Are");

const storyImageContainer = createDivWithClasses("storyContainer flex");

const storyContainer = createDivWithClasses("storyContainer flex");

const storyTitle = createH2WithClasses("storyTitle flex", "Our Story");

const story = createPWithClasses(
  "story",
  `Lorem ipsum dolor sit amet consectetur. Quam elit quis donec id et. Donec diam
   et fermentum purus fusce adipiscing risus pretium ut. Luctus amet integer 
   convallis sit metus convallis molestie posuere. A turpis pulvinar quam 
   sit nec ipsum viverra ac.

Lorem ipsum dolor sit amet consectetur. Quam elit quis donec id et. 
Donec diam et fermentum purus fusce adipiscing risus pretium ut. Luctus amet
 integer convallis sit metus convallis molestie posuere. A turpis pulvinar 
 quam sit nec ipsum viverra ac.`
);

// const storyImage = createImage(
//   "storyImage",
//   "../resources/imgs/story.svg",
//   "A story about how Jedi Pet Foods started"
// );

// const curve = createImage("curve", "../resources/imgs/curve.svg", "c");

storyContainer.append(storyTitle, story);
// storyImageContainer.append(storyContainer, storyImage);
storyImageContainer.append(storyContainer);
ourStoryContainer.append(storyHeader, storyImageContainer);
// ourStoryContainer.append(storyHeader, storyImageContainer, curve);
ourStorySection.append(ourStoryContainer);

const aboutSection = createSectionWithClasses("aboutSection", "aboutSection");

const aboutContainer = createDivWithClasses("aboutContainer container");

const factorsDiv = createDivWithClasses("factorsDiv");

const factorsTitle = createH2WithClasses(
  "factorsTitle subTitles",
  "What Drives Us"
);

const factorsMV = createDivWithClasses("factorsMV flex");

const drivingFactorDiv = createDivWithClasses("drivingFactorDiv flex");

const valuesDiv = createDivWithClasses("valuesDiv flex flex-col");

const valuesTitle = createH2WithClasses(
  "valuesTitle subTitles",
  "Our Core Values"
);

// const valuesGrid =

const contactBtn = createButton(
  false,
  "contactBtn",
  "#",
  "Contact Us",
  "",
  "../resources/imgs/rightlineimg.svg",
  false,
  false
);

factorsDiv.append(factorsTitle, factorsMV);
valuesDiv.append(valuesTitle, contactBtn);
aboutContainer.append(factorsDiv, valuesDiv);
aboutSection.append(aboutContainer);

const whatSection = createSectionWithClasses("whatSection", "whatSection");

const whatContainer = createDivWithClasses(
  "whatContainer container flex flex-col flex-centre-y"
);

const whatTitle = createH2WithClasses("whatTitle subTitles", "What We Do");

const whatContainerDiv = createDivWithClasses("whatContainerDiv flex");

const whatImagesDiv = createDivWithClasses("whatImagesDiv relative");

// const whatImage = createImage(
//   "whatImage absolute",
//   "../resources/imgs/jediBags.svg",
//   "Jedi Pet Foods"
// );

// const whatImageZigzag = createImage(
//   "whatImageZigzag absolute",
//   "../resources/imgs/zigzag.svg",
//   "Jedi Pet Foods Background"
// );

const whatStoryDiv = createDivWithClasses("whatStoryDiv");

const whatStory = createPWithClasses(
  "whatStory",
  `We run Kenyan based enterprise that manufactures kibbles; a type of dry
   pet food. For cats. 

High-tech extrusion machines, skilled stuff, highly nutritious recipes 
and pure passion among others are employed in realizing a process that 
churns out delicious pet delicacies under the brand name Jedi.`
);

const whatBtn = createButton(
  false,
  "whatBtn",
  "#",
  "Explore Products",
  "",
  "../resources/imgs/rightlineimg.svg",
  false,
  false
);

// whatImagesDiv.append(whatImageZigzag, whatImage);
whatStoryDiv.append(whatStory);
whatContainerDiv.append(whatImagesDiv);
whatContainer.append(whatTitle, whatContainerDiv, whatBtn);
whatSection.append(whatContainer);

document
  .querySelector("body")
  .append(ourStorySection, aboutSection, whatSection, footerSection);
