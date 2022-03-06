const container = document.querySelector("#container");
const btnRainbow = document.querySelector(".rainbow");
const btnBlack = document.querySelector(".black");
const btnClear = document.querySelector(".clear");
const btnEraser = document.querySelector(".eraser");
const btnColorMode = document.querySelector(".color-mode");
const slider = document.querySelector(".slider");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  container.appendChild(div);
}

let isMouseDown = false;

btnRainbow.addEventListener("click", () => {
  container.addEventListener("mousedown", () => {
    isMouseDown = true;
  });
  container.addEventListener("mouseup", () => {
    isMouseDown = false;
  });
  container.addEventListener("mouseover", (e) => {
    if (isMouseDown) {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      e.target.style.backgroundColor = "#" + randomColor;
    }
  });
});

btnBlack.addEventListener("click", () => {
  container.addEventListener("mousedown", () => {
    isMouseDown = true;
  });
  container.addEventListener("mouseup", () => {
    isMouseDown = false;
  });
  container.addEventListener("mouseover", (e) => {
    if (isMouseDown) {
      e.target.style.backgroundColor = "black";
    }
  });
});

btnEraser.addEventListener("click", () => {
  container.addEventListener("mousedown", () => {
    isMouseDown = true;
  });
  container.addEventListener("mouseup", () => {
    isMouseDown = false;
  });
  container.addEventListener("mouseover", (e) => {
    if (isMouseDown) {
      e.target.style.backgroundColor = "white";
    }
  });
});

btnClear.addEventListener("click", () => {
  let divs = Array.from(document.querySelector("#container").children).forEach(
    (element) => {
      element.style.backgroundColor = "white";
    }
  );
});

function eventSlider() {
  document.querySelector("#container").textContent = "";
  let valueSlider = document.querySelector(".slider").value;
  let sizeGrid = Math.pow(valueSlider, 2);

  for (let i = 0; i < sizeGrid; i++) {
    const div = document.createElement("div");
    container.appendChild(div);

    const columns = "1fr ".repeat(valueSlider);
    const row = "1fr ".repeat(valueSlider);

    container.setAttribute(
      "style",
      `
      grid-template-columns: ${columns}; 
      grid-template-rows: ${row};
      `
    );
  }
}

// Create a new color picker instance
// https://iro.js.org/guide.html#getting-started
var colorPicker = new iro.ColorPicker(".colorPicker", {
  // color picker options
  // Option guide: https://iro.js.org/guide.html#color-picker-options
  width: 280,
  color: "rgb(255, 0, 0)",
  borderWidth: 1,
  borderColor: "#fff",
});

var values = document.getElementById("values");
var hexInput = document.getElementById("hexInput");

// https://iro.js.org/guide.html#color-picker-events
colorPicker.on(["color:init", "color:change"], function (color) {
  // Show the current color in different formats
  // Using the selected color: https://iro.js.org/guide.html#selected-color-api
  values.innerHTML = [
    "hex: " + color.hexString,
    "rgb: " + color.rgbString,
    "hsl: " + color.hslString,
  ].join("<br>");

  hexInput.value = color.hexString;
});

hexInput.addEventListener("change", function () {
  colorPicker.color.hexString = this.value;
});
