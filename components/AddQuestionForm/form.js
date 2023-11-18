const form = document.querySelector('[data-js="form"]');
const question = document.querySelector('[data-js="question"]');
const answer = document.querySelector('[data-js="answer"]');

const questions = document.querySelector(".questions-new");

const questionCharacters = document.querySelector('[data-js="charactersQuestion"]');
const answerCharacters = document.querySelector('[data-js="charactersAnswer"]');

const addButton = document.querySelector('[data-js="add-button"]');



form.addEventListener("input", (event) => {
  const characterLength = event.target.value.length;
  const inputObject = event.target
  const inputName = event.target.name
  const charactersRemaining = inputObject.attributes.maxlength.value - characterLength;

  if(inputName == "question") {
    questionCharacters.textContent = charactersRemaining
    return
  } answerCharacters.textContent = charactersRemaining
})


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;
  console.log(formElements);

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const cardContainer = document.createElement("section");

  cardContainer.classList.add("question-card__container", "new-questions");

  cardContainer.innerHTML = `
  <button type="button" class="question-card__item question-card__item__bookmark question-card__item__bookmark__unfilled" data-js="bookmarkButton"></button>
  <h2 class="question-card__item question-card__item__question">${data.question}</h2>
    
  <button type="button" class="question-card__item question-card__item__show-answer">Drag Me</button>

  <div class="question-card__item question-card__item__answer" data-js="answer">${data.answer}</div>
  
  <div class="question-card__item question-card__item__tag-container">
  <p>#${data.tag}</p>
  </div>`;

  questions.append(cardContainer);

  event.target.reset();
});
