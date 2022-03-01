const container = document.querySelector("#container");
const button = document.querySelector("#reload");

for (let i = 0; i < 256; i++) {
  div = document.createElement("div");
  container.appendChild(div);

  div.addEventListener("mouseover", (e) => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.backgroundColor = "#" + randomColor;
  });
}

button.addEventListener("click", () => {
  document.querySelector("#container").textContent = "";

  const size = prompt("what size grid do you want?");
  const sizeGrid = Math.pow(size, 2);

  if (sizeGrid >= 10000) {
    alert("grid size cannot be greater than 100x100, press reset again");
    return;
  }

  const eventSizeGrid = (size) => {
    const columns = "1fr ".repeat(size);
    const row = "1fr ".repeat(size);

    container.setAttribute(
      "style",
      `
      grid-template-columns: ${columns}; 
      grid-template-rows: ${row};
      `
    );
  };
  eventSizeGrid(size);

  for (let i = 0; i < sizeGrid; i++) {
    div = document.createElement("div");
    container.appendChild(div);

    div.addEventListener("mouseover", (e) => {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      e.target.style.backgroundColor = "#" + randomColor;
    });
  }
});
