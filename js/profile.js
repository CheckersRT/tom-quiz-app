const toggleButton = document.querySelector('[data-js="toggle--button"]');
const darkmode = document.querySelector('[data-js="darkmode"]');

toggleButton.addEventListener("click", (event) => {
  toggleButton.classList.toggle("darkmode--toggle-on");
  document.body.classList.toggle("darkmode--body");


//   if (toggleButton.classList.value === "darkmode--toggle darkmode--toggle-on") {
//     document.body.style.backgroundColor = "#68767F";
//     console.log(document.body.style.backgroundColor);
//   } console.log(document.body.style.backgroundColor);
//   return;

});
