const RED_COLOR = "#FF4949";
const BLUE_COLOR = "#58B7FF";
const GREEN_COLOR = "#13CE66";
const algoContainer = document.querySelector(".algo-animation-container");

let inputArray = [];
function generateRandomArray() {
  let length = document.getElementById("input-size").value;
  let len = length || 10;
  let randomArray;

  for (let i = 0; i < len; i++) {
    {
      randomArray = Math.floor(Math.random() * 100);
      inputArray.push(randomArray);
    }
  }
}

//  for generate Blocks
function generateBlocks() {
  // remove previous array
  let child = algoContainer.lastElementChild;
  while (child) {
    algoContainer.removeChild(child);
    child = algoContainer.lastElementChild;
  }
  inputArray = [];
  generateRandomArray();

  let lengthOfArray = inputArray.length;
  for (let i = 0; i < lengthOfArray; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.height = `${inputArray[i] * 1}px`;
    block.style.transform = `translateX(${i * 30}px)`;
    const blockLabel1 = document.createElement("label");
    blockLabel1.classList.add("block_id");
    blockLabel1.innerHTML = inputArray[i];
    block.appendChild(blockLabel1);
    algoContainer.appendChild(block);
  }
  document.getElementById("input-search-value").disabled = false;
}

function reset() {
  window.location.reload();
}

//all algoritmn
async function algorithmn(choosenAlgo) {
  const length = inputArray.length;
  let blocks = document.querySelectorAll(".block");

  switch (choosenAlgo) {
    case "bubbleSort":
      let swapped;
      do {
        swapped = false;
        for (let j = 0; j < length - 1; j++) {
          blocks[j].style.backgroundColor = RED_COLOR;
          blocks[j + 1].style.backgroundColor = RED_COLOR;

          await delay();

          if (inputArray[j] > inputArray[j + 1]) {
            let temp = inputArray[j];
            let tempNum = blocks[j].innerHTML;
            let tempHeight = blocks[j].style.height;

            inputArray[j] = inputArray[j + 1];
            blocks[j].innerHTML = blocks[j + 1].innerHTML;
            blocks[j].style.height = blocks[j + 1].style.height;
            inputArray[j + 1] = temp;
            blocks[j + 1].innerHTML = tempNum;
            blocks[j + 1].style.height = tempHeight;

            swapped = true;
          }

          blocks[j].style.backgroundColor = BLUE_COLOR;
          blocks[j + 1].style.backgroundColor = BLUE_COLOR;
        }
      } while (swapped);
      console.log(inputArray);
      break;

    case "selectionSort":
      for (let i = 0; i < length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < length; j++) {
          blocks[minIndex].style.backgroundColor = RED_COLOR;
          blocks[j].style.backgroundColor = RED_COLOR;
          await delay();

          if (inputArray[minIndex] > inputArray[j]) {
            blocks[minIndex].style.backgroundColor = BLUE_COLOR;
            minIndex = j;
          } else blocks[j].style.backgroundColor = BLUE_COLOR;
        }
        if (minIndex != i) {
          let temp = inputArray[minIndex];

          let tempNum = blocks[minIndex].innerHTML;
          let tempHeight = blocks[minIndex].style.height;

          inputArray[minIndex] = inputArray[i];
          blocks[minIndex].innerHTML = blocks[i].innerHTML;
          blocks[minIndex].style.height = blocks[i].style.height;

          inputArray[i] = temp;
          blocks[i].innerHTML = tempNum;
          blocks[i].style.height = tempHeight;
        }
        blocks[minIndex].style.backgroundColor = BLUE_COLOR;
        blocks[i].style.backgroundColor = BLUE_COLOR;
      }

      break;
    case "insertionSort":
      let i, key, j;

      for (i = 1; i < length; i++) {
        key = inputArray[i];
        let keyheight = blocks[i].style.height;
        let keytext = blocks[i].innerHTML;
        j = i - 1;

        await delay();
        while (j >= 0 && inputArray[j] > key) {
          inputArray[j + 1] = inputArray[j];

          blocks[j + 1].innerHTML = blocks[j].innerHTML;
          blocks[j + 1].style.height = blocks[j].style.height;
          j = j - 1;
        }
        inputArray[j + 1] = key;
        blocks[j + 1].innerHTML = keytext;
        blocks[j + 1].style.height = keyheight;
      }
      break;
    case "linearSearch":
      searchAlgo(choosenAlgo);

      break;
    case "binarySearch":
      searchAlgo(choosenAlgo);

      break;
  }
}

function delay() {
  return new Promise((resolve) => {
    setInterval(() => {
      resolve();
    }, 250);
  });
}
