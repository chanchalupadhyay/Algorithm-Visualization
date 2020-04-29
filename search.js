async function searchAlgo(choosenAlgo) {
  let length = inputArray.length;
  let searchValue = document.getElementById("input-search-value").value;

  let blocks = document.querySelectorAll(".block");

  switch (choosenAlgo) {
    case "linearSearch":
      for (let i = 0; i < blocks.length; i++) {
        blocks[i].style.backgroundColor = RED_COLOR;
        await delay();
        if (inputArray[i] == searchValue) {
          blocks[i].style.backgroundColor = GREEN_COLOR;

          return;
        }
        blocks[i].style.backgroundColor = BLUE_COLOR;
      }
      break;
    case "binarySearch":
      inputArray.sort((a, b) => a - b);
      // remove previous unsorted array
      let child = algoContainer.lastElementChild;
      while (child) {
        algoContainer.removeChild(child);
        child = algoContainer.lastElementChild;
      }
      // create sorted array
      for (let i = 0; i < length; i++) {
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

      blocks = document.querySelectorAll(".block");
      searchContainer = document.querySelectorAll(".searchBox");
      let lowIndex = 0;
      let highIndex = length;
      let midIndex;
      while (lowIndex <= highIndex) {
        midIndex = Math.floor((lowIndex + highIndex) / 2);
        console.log("ss" + midIndex);
        blocks[lowIndex].style.backgroundColor = RED_COLOR;

        await delay();
        if (inputArray[midIndex] == searchValue) {
          blocks[midIndex].style.backgroundColor = GREEN_COLOR;
          console.log("found");
          return;
        } else if (inputArray[midIndex] > searchValue) {
          blocks[lowIndex].style.backgroundColor = BLUE_COLOR;
          highIndex = midIndex - 1;
        } else {
          blocks[lowIndex].style.backgroundColor = BLUE_COLOR;
          lowIndex = midIndex + 1;
        }
      }
      alert("not found");
      return null;
      break;
  }
}
