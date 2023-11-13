const bookmark = document.querySelector('[data-js="bookmark"]');
const showAnswer = document.querySelector('[data-js="show-answer"]');
const answer = document.querySelector('[data-js="answer"]');
// const form = document.querySelector('[data-js="form"]');

const addButton = document.querySelector('[data-js="add-button"]');


bookmark.addEventListener("click", (event) => {
  bookmark.classList.toggle("question-card__item__bookmark__filled");
});

showAnswer.addEventListener("click", (event) => {
  if (answer.hidden) {
    answer.hidden = false;
    showAnswer.textContent = "Hide Answer";
    return;
  }
  answer.hidden = true;
  showAnswer.textContent = "Show Answer";
});
