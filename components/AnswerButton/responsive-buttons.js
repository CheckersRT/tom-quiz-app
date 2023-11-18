export function calculateBoxHeightAndWidth() {

    const showAnswerButtons = document.querySelectorAll('[data-js="show-answer"]')
    const hiddenAnswers = document.querySelectorAll('[data-js="answer"]')

    for (let i = 0; i < showAnswerButtons.length; i++) {
    
        let buttonWidth = showAnswerButtons[i].clientWidth;
        let answerWidth = hiddenAnswers[i].clientWidth;
    
        if (answerWidth > buttonWidth) {
            showAnswerButtons[i].style.width = `${answerWidth}px`;
        }   
    }
    
    for (let i = 0; i < showAnswerButtons.length; i++) {
    
        let buttonHeight = showAnswerButtons[i].clientHeight;
        let answerHeight = hiddenAnswers[i].clientHeight;
    
        if (answerHeight > buttonHeight) {
            showAnswerButtons[i].style.height = `${answerHeight}px`;
        }   
    }
}





