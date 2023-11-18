const form = document.querySelector('[data-js="question-1"]');
const choicesQuestionOne = document.querySelectorAll(".multiple-choice__options");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.dir(event.target.elements);

  const formElements = event.target.elements;

//   console.log(formElements.completionTime);
//   console.log(formElements.completionTime.value);

  console.log(choicesQuestionOne);

  if(formElements.completionTime.value === "correct") {
      choicesQuestionOne[1].classList.add("green");
      console.log("yay")
  }
});
