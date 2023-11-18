

export function dragToRevealAnswer() {
    const showAnswers = document.querySelectorAll('[data-js="show-answer"]');
    for (const showAnswer of showAnswers) {
    
        let mouseStartX;
        let mouseStartY;
        let mouseMoveX;
        let mouseMoveY;
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
      
      }
}
