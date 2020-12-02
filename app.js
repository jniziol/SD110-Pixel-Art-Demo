const form = document.getElementById('sizePicker');
const pixelCanvas = document.getElementById('pixelCanvas');
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const color = document.getElementById('colorPicker');

function makeGrid(rows, columns) {
  const tbody = document.createElement("tbody");

  for(let row = 0; row < rows; row++) {
    const tr = document.createElement("tr");
    for(let column = 0; column < columns; column++){
      const td = document.createElement("td");
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  pixelCanvas.textContent = "";
  pixelCanvas.appendChild(tbody);
}

form.addEventListener("submit", function(event) {
  makeGrid(inputHeight.value, inputWidth.value);
  event.preventDefault();
}); 

pixelCanvas.addEventListener('click', function(event) {
  if (event.target.nodeName === "TD") {
    event.target.style.backgroundColor = color.value;
  }
});