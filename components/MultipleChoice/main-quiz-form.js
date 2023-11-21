const questionCards = document.querySelectorAll('[data-js="question-card"]');
const forms = document.querySelectorAll('[data-js="questions"]');
const correctAnswer = document.querySelector('[data-js="answer__correct"]');



forms.forEach((form, formIndex) => {

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const formElements = event.target.elements;

    console.log(formElements)
  
    if(formElements.numberDisciplines.value === "correct") {

      questionCards.forEach((card, cardIndex) => {
        if(formIndex === cardIndex) {
          card.classList.remove("red")
          card.classList.add("green");
        }
      });
    } else {
      questionCards.forEach((card, cardIndex) => {
        if(formIndex === cardIndex) {
      card.classList.remove("green");
      card.classList.add("red")
        }
      });
    }
    // form.reset();
  });
})



