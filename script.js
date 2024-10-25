
const btnEl = document.getElementById("calculate");
const diameterInput = document.getElementById("dia");
const lengthInput = document.getElementById("length");
const totalInput = document.getElementById("total");

function calculateTotal() {
  const diameterValue = diameterInput.value;
  const lengthValue = lengthInput.value;
  const totalValue = (diameterValue **2)*lengthValue/162;
  totalInput.innerText = totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal);
