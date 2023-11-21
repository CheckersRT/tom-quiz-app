const form = document.querySelector('[data-js="question-1"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;

  console.log(formElements);


  const choicesQuestionOne = document.querySelectorAll(".multiple-choice__options");

  console.log(choicesQuestionOne);

  const correctChoice = choicesQuestionOne.filter((choice) => {
  console.log(choice.checked)
  return choice.checked == true
})



});



