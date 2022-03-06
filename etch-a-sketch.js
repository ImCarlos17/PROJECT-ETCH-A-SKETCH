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
