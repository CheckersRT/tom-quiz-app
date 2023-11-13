const form = document.querySelector('[data-js="form"]');
const questionInput = document.querySelector('[data-js="question"]');
const answerInput = document.querySelector('[data-js="answer"]');

const questions = document.querySelector(".questions-new");

const charactersQuestion = document.querySelector(
  '[data-js="charactersQuestion"]'
);

const charactersAnswer = document.querySelector('[data-js="charactersAnswer"]');
const addButton = document.querySelector('[data-js="add-button"]');

console.log(addButton.src);

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  addButton.src = "./css/add_filled.png";
});

questionInput.addEventListener("input", (event) => {
  const characterLength = event.target.value.length;
  // console.log(characterLength);

  const charactersRemaining = 150 - characterLength;
  // console.log(charactersRemaining);

  charactersQuestion.textContent = charactersRemaining;
});

answerInput.addEventListener("input", (event) => {
  const characterLength = event.target.value.length;
  // console.log(characterLength);

  const charactersRemaining = 150 - characterLength;
  // console.log(charactersRemaining);

  charactersAnswer.textContent = charactersRemaining;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;
  console.log(formElements);

  // formElements.question.focus();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // console.log(data.question);
  const cardContainer = document.createElement("section");

  cardContainer.classList.add("question-card__container", "new-questions");

  cardContainer.innerHTML = `
  <button type="button" class="question-card__item question-card__item__bookmark question-card__item__bookmark__unfilled" data-js="bookmarkButton"></button>
  <h2 class="question-card__item question-card__item__question">${data.question}</h2>
    
  <button type="button" class="question-card__item question-card__item__show-answer">Hide Answer</button>

  <div class="question-card__item question-card__item__answer" data-js="answer">${data.answer}</div>
  
  <div class="question-card__item question-card__item__tag-container">
  <p>#${data.tag}</p>
  </div>`;

  //   console.log(cardContainer);
  questions.append(cardContainer);

  event.target.reset();
});
