const bookmark = document.querySelector('[data-js="bookmark"]');
const showAnswer = document.querySelector('[data-js="show-answer"]');
const answer = document.querySelector('[data-js="answer"]');
// const form = document.querySelector('[data-js="form"]');

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

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const formElements = event.target.elements;
//   console.log(formElements);

//   event.target.elements.question.focus();

//   const formData = new FormData(event.target);
//   const data = Object.fromEntries(formData);


// });
