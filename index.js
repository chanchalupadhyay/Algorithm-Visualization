let inputDataArray = [];
const algoContainer = document.querySelector(".algo-animation-container");

function addNumberInArray() {
  document.getElementById("error").innerHTML = "";

  let input = document.getElementById("input-value").value;
  let len = inputDataArray.length;
  var size = parseInt(document.getElementById("input-size").value);

  // check input is empty
  if (!input) document.getElementById("error").innerHTML = "Enter Any Value";

  if (len < size && input) {
    //check and convert string into number
    if (!isNaN(input)) {
      input = parseInt(input);
    }

    inputDataArray.push(input);

    document.getElementById("display-values").textContent += input + " ";
    document.getElementById("input-value").value = "";
  } else if (len >= size)
    document.getElementById("error").innerHTML = "Out of Size";

  if (size - 1 == len) {
    document.getElementById("input-search-value").disabled = false;

    generateBlocks();
  }
}

//  for generate Blocks
function generateBlocks() {
  let len = inputDataArray.length;
  console.log("ll=" + inputDataArray);
  let identifyInput;

  let value;
  for (let i = 0; i < len; i++) {
    value = inputDataArray[i];
    console.log(typeof value);
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.height = `${value * 1}px`;
    if (typeof value == "string") {
      block.style.height = `${Math.floor(value.charCodeAt(0) / 2)}px`;
      console.log(`charcode==${Math.floor(value.charCodeAt(0) / 2)}px`);
    }

    block.style.transform = `translateX(${i * 30}px)`;

    const blockLabel1 = document.createElement("label");

    blockLabel1.classList.add("block_id");
    blockLabel1.innerHTML = value;
    block.appendChild(blockLabel1);
    algoContainer.appendChild(block);
  }
}

function reset() {
  document.getElementById("input-value").value = "";
  document.getElementById("error").innerHTML = "";
  document.getElementById("input-size").value = "";
  document.getElementById("input-search-value").value = "";
  inputDataArray.length = 0;
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
