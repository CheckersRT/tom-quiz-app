const toggleButton = document.querySelector('[data-js="toggle--button"]');
const darkmode = document.querySelector('[data-js="darkmode"]')

toggleButton.addEventListener("click", (event) => {
    toggleButton.classList.toggle("darkmode--toggle-on")
    // console.log(toggleButton.classList.value);
})

// if(toggleButton.classList.value = "darkmode--toggle darkmode--toggle-on") {

//     console.log(darkmode.style.backgroundColor)
    

// } darkmode.backgroundColor = "black";
// // console.log(darkmode.backgroundColor);