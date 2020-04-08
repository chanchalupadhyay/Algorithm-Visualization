const algoContainer = document.querySelector(".algo-animation-container");
//  for generate Blocks

function generateBlocks() {
  let length = document.getElementById("input-size").value;
  let len = length || 10;

  let value;
  for (let i = 0; i < len; i++) {
    value = Math.floor(Math.random() * 100);
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.height = `${value * 1}px`;
    if (typeof value == "string") {
      block.style.height = `${Math.floor(value.charCodeAt(0) / 2)}px`;
    }

    block.style.transform = `translateX(${i * 30}px)`;

    const blockLabel1 = document.createElement("label");

    blockLabel1.classList.add("block_id");
    blockLabel1.innerHTML = value;
    block.appendChild(blockLabel1);
    algoContainer.appendChild(block);
  }

  document.getElementById("input-search-value").disabled = false;
}

function reset() {
  document.getElementById("input-size").value = "";
  document.getElementById("input-search-value").value = "";
  let inputArray = document.querySelectorAll(".display-values");
  let inputArray1 = document.querySelectorAll(".algo-animation-container");

  inputArray.forEach(function(input) {
    input.innerHTML = "";
  });
  inputArray1.forEach(function(input) {
    input.value = "";
    input.innerHTML = "";
  });
}
generateBlocks();
