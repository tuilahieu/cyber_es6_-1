const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

const colorContainer = document.getElementById("colorContainer");
const houseChangeColor = document.getElementById("house");

colorList.forEach((color) => {
  const colorChooseTemplate = `
    <div class="color-button ${color}" onclick = changeColor('${color}')></div>
`;
  colorContainer.innerHTML += colorChooseTemplate;
});

function changeColor(color) {
  houseChangeColor.classList = `house ${color}`;
}

// set active

const colorButtons = document.getElementsByClassName("color-button");
colorButtons[0].classList.add("active");
[...colorButtons].forEach((button) => {
  button.addEventListener("click", function (e) {
    [...colorButtons].forEach((button) => button.classList.remove("active"));
    e.target.classList.add("active");
  });
});
