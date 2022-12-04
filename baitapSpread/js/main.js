const headingText = document.querySelector(".heading");
const letters = [...headingText.innerHTML];
headingText.textContent = "";
letters.forEach((letter) => {
  headingText.innerHTML += `<span>${letter}</span>`;
});
