
import {calculateBoxHeightAndWidth} from "./components/AnswerButton/responsive-buttons.js"
import {dragToRevealAnswer} from "./components/AnswerButton/dragMe.js"


const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
const answer = document.querySelector('[data-js="answer"]');
const addButton = document.querySelector('[data-js="add-button"]');

for (const bookmark of bookmarks) {
  bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("question-card__item__bookmark__filled");
  });
}


dragToRevealAnswer();
calculateBoxHeightAndWidth();