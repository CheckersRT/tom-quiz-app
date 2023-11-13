const bookmark = document.querySelector('[data-js="bookmark"]');
const showAnswer = document.querySelector('[data-js="show-answer"]');
const answer = document.querySelector('[data-js="answer"]');
// const form = document.querySelector('[data-js="form"]');

const addButton = document.querySelector('[data-js="add-button"]');


bookmark.addEventListener("click", (event) => {
  bookmark.classList.toggle("question-card__item__bookmark__filled");
});

let mouseStartX;
let mouseStartY;
let isMouseDown;

showAnswer.addEventListener("mousedown", (event) => {
  mouseStartX = event.clientX;
  mouseStartY = event.clientY;
  isMouseDown = true;
})

document.addEventListener("mousemove", (event) => {

  mouseMoveX = 1 - (mouseStartX - event.clientX);
  mouseMoveY = 1 - (mouseStartY - event.clientY);


  if(isMouseDown) {
  showAnswer.style.transform = `translateX(${mouseMoveX}px) translateY(${mouseMoveY}px)`
  }
})

document.addEventListener("mouseup", (event) => {
  isMouseDown = false;
  showAnswer.style.transform = `translateX(0px) translateY(0px)`
})