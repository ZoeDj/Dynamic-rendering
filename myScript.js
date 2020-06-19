const cardData = [
  {
    title: "Card #1",
    content:
      "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.",
  },
  {
    title: "Card #2",
    content:
      "Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.",
  },
  {
    title: "Card #3",
    content:
      "Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.",
  },
];

function createCard(title, content) {
  const card = document.createElement("div");
  const cardBar = document.createElement("div");
  const cardTitle = document.createElement("h1");
  const buttonCard = document.createElement("div");
  const buttonOpen = document.createElement("button");
  const buttonClose = document.createElement("button");
  const cardContent = document.createElement("div");

  card.appendChild(cardBar);
  card.appendChild(cardContent);
  cardBar.appendChild(cardTitle);
  cardBar.appendChild(buttonCard);
  buttonCard.appendChild(buttonOpen);
  buttonCard.appendChild(buttonClose);

  card.classList.add("card");
  cardBar.classList.add("card-bar");
  cardTitle.classList.add("card-title");
  buttonCard.classList.add("card-buttons");
  buttonOpen.classList.add("card-btn-open");
  buttonClose.classList.add("card-btn-close", "hide-btn");
  cardContent.classList.add("card-content");

  const open = "\u25bc";
  const close = "\u25b2";
  buttonOpen.textContent = open;
  buttonClose.textContent = close;
  cardContent.textContent = content;
  cardTitle.textContent = title;

  buttonCard.addEventListener("click", (event) => {
    buttonOpen.classList.toggle("hide-btn");
    buttonClose.classList.toggle("hide-btn");
    cardContent.classList.toggle("toggle-on");
  });

  return card;
}
const accordion = document.querySelector(".accordion");

cardData.map((data) => {
  accordion.appendChild(createCard(data.title, data.content));
});
