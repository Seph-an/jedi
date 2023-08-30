const ourStorySection = createSectionWithClasses("ourStorySection", "relative");

const multiRings = createImage(
  "multi-rings absolute",
  "../resources/imgs/plain-rings.svg",
  "Jedi Pet Food Rings"
);

const thePath = createImage(
  "the-path absolute",
  "../resources/imgs/the-path.svg",
  "Jedi Pet Food Path"
);

const ourStoryContainer = createDivWithClasses(
  "ourStoryContainer container flex flex-col flex-centre-y"
);

const storyHeader = createH1WithClasses("storyHeader", "Who We Are");

const storyImageContainer = createDivWithClasses("storyImageContainer flex");

const storyContainer = createDivWithClasses(
  "storyContainer flex flex-col flex-centre-y"
);

const storyTitle = createH2WithClasses("storyTitle subTitles", "Our Story");

const story = createDivWithClasses("story flex flex-col flex-centre-y");

const paragraph1 = createPWithClasses(
  "story",
  `Lorem ipsum dolor sit amet consectetur. Quam elit quis donec id et. Donec diam
   et fermentum purus fusce adipiscing risus pretium ut. Luctus amet integer convallis sit metus convallis molestie posuere`
);

const paragraph2 = createPWithClasses(
  "story",
  `Luctus amet integer convallis sit metus convallis molestie posuere. 
  A turpis pulvinar quam sit nec ipsum viverra ac.`
);
story.append(paragraph1, paragraph2);

const storyImageDiv = createDivWithClasses("storyImageDiv flex flex-centre-xy");
const storyImage = createImage(
  "storyImage",
  "../resources/imgs/story.svg",
  "A story about how Jedi Pet Foods started"
);

const curve = createImage("curve", "../resources/imgs/curve.svg", "c");
storyContainer.append(storyTitle, story);
storyImageDiv.append(storyImage);
// storyImageContainer.append(storyContainer, storyImage);
storyImageContainer.append(storyContainer);
// ourStoryContainer.append(storyHeader, storyImageContainer);
ourStoryContainer.append(storyHeader, storyImageContainer);
storyImageDiv.append(storyImage);

ourStorySection.append(ourStoryContainer, thePath, multiRings, curve);

const aboutSection = createSectionWithClasses("aboutSection", "aboutSection");

const aboutContainer = createDivWithClasses(
  "aboutContainer container flex flex-col flex-centre-y"
);
aboutSection.append(aboutContainer);

const factorsTitle = createH2WithClasses(
  "factorsTitle subTitles",
  "What Drives Us"
);

const missionVisionDiv = createDivWithClasses("missionVisionDiv flex");

const missionDiv = createDivWithClasses(
  "missionDiv flex flex-col flex-centre-y"
);

const missionTitle = createRealH2WithClasses(
  "missionTitle mvTitle",
  "Our Mission"
);

const mission = createPWithClasses(
  "mission",
  `To provide pet lovers all over the world with healthy, tasty delicacies
   for their furry friends while promoting local manufacturing & creating
    employment opportunities.`
);

const visionDiv = createDivWithClasses("visionDiv flex flex-col flex-centre-y");

const visionTitle = createRealH2WithClasses(
  "visionTitle mvTitle",
  "Our Vision"
);

const vision = createPWithClasses(
  "vision",
  `To be a key player in the production of healthy, 
  nutritious, yummy pet foods in Africa.`
);

const valuesTitle = createH2WithClasses(
  "valuesTitle subTitles",
  "Our Core Values"
);

// const valuesGrid =
const gridItems = [
  {
    title: "We Value People First",
    content: `Making a positive impact in peoples’ lives while 
    delivering high-quality and responsive services.`,
  },
  {
    title: "We Are Responsible",
    content: `Fulfilling our commitments to clients with a clear
    understanding of the urgency and accountability inherent 
    in those commitments.`,
  },
  {
    title: "We Are A Family",
    content: `Treating all with mutual respect, honour, dignity,
     sensitivity and loyalty as we work together towards a common goal.`,
  },
  {
    title: "We Are Innovative",
    content: `Continuously striving for professional and personal
     growth and looking for creative solutions to evolve and adapt
      to be at the forefront of the industry and our operations.`,
  },
  {
    title: "We Are Guided By Top Standards",
    content: `Upholding the highest levels of professionalism,
    integrity, impartiality, honesty, ethical conduct, and
    attitude in all relations.`,
  },
];

const values = createDivWithClasses("values flex flex-centre-x");

gridItems.forEach((gridItem, index) => {
  const item = createDivWithClasses(
    `item item-${index + 1} flex flex-col flex-centre-y`
  );
  const itemTitle = createRealH2WithClasses("item-title", `${gridItem.title}`);
  const itemContent = createPWithClasses("item-content", `${gridItem.content}`);
  item.append(itemTitle, itemContent);
  values.append(item);
});
const contactBtn = createButton(
  false,
  "contactBtn",
  "/contact",
  "Contact Us",
  "",
  "../resources/imgs/rightlineimg.svg",
  false,
  false
);
missionDiv.append(missionTitle, mission);
visionDiv.append(visionTitle, vision);
missionVisionDiv.append(missionDiv, visionDiv);
aboutContainer.append(
  factorsTitle,
  missionVisionDiv,
  valuesTitle,
  values,
  contactBtn
);
aboutSection.append(aboutContainer);

const whatSection = createSectionWithClasses("whatSection", "whatSection");

const whatContainer = createDivWithClasses(
  "whatContainer container flex flex-col flex-centre-y"
);

const whatTitle = createH2WithClasses("whatTitle subTitles", "What We Do");

const whatContainerDiv = createDivWithClasses("whatContainerDiv flex");

const whatImagesDiv = createDivWithClasses(
  "whatImagesDiv relative flex flex-centre-xy"
);

const whatImage = createImage(
  "whatImage absolute",
  "../resources/imgs/story.svg",
  "Jedi Pet Foods"
);

const whatImageZigzag = createImage(
  "whatImageZigzag ",
  "../resources/imgs/zigzag.svg",
  "Jedi Pet Foods Background"
);

const whatStoryDiv = createDivWithClasses(
  "whatStoryDiv flex flex-col flex-centre-xy"
);

const storyParagraphOne = createPWithClasses(
  "what-story",
  `We run Kenyan based enterprise that manufactures kibbles for cats; a type of dry
pet food. `
);

const storyParagraphTwo = createPWithClasses("what-story");
const whatStoryPart1 =
  document.createTextNode(`High-tech processing machines, skilled personnel, highly nutritious recipes 
and pure passion among others are employed in realizing a process that 
churns out delicious pet delicacies under the brand name `);

const whatStoryPart2 = document.createTextNode("Jedi");

const whatStorySpan = document.createElement("span");
whatStorySpan.appendChild(whatStoryPart2);

storyParagraphTwo.append(whatStoryPart1, whatStorySpan);
// ---------------------------------
const whatBtn = createButton(
  false,
  "whatBtn",
  "/products",
  "Explore Products",
  "",
  "../resources/imgs/rightlineimg.svg",
  false,
  false
);

whatImagesDiv.append(whatImageZigzag, whatImage);
whatStoryDiv.append(storyParagraphOne, storyParagraphTwo);
whatContainerDiv.append(whatImagesDiv, whatStoryDiv);
whatContainer.append(whatTitle, whatContainerDiv, whatBtn);
whatSection.append(whatContainer);

document
  .querySelector("body")
  .append(
    navigationBar,
    ourStorySection,
    aboutSection,
    whatSection,
    footerSection
  );
