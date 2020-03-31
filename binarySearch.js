function foundValue(val, search) {
  return new Promise(resolve => {
    const valueStyle = window.getComputedStyle(val);
    const searchValStyle = window.getComputedStyle(search);

    const value = valueStyle.getPropertyValue("backgroundColor");
    const searchval = searchValStyle.getPropertyValue("border");

    val.style.backgroundColor = "yellow";
    search.style.border = "4px solid yellow";

    window.requestAnimationFrame(() => {
      setInterval(() => {
        resolve();
      }, 250);
    });
  });
}

async function binarySearch() {
  await bubbleSort();
  search();

  let blocks = document.querySelectorAll(".block");
  let searchContainer = document.querySelectorAll(".searchBox");
  let searchValue = searchContainer[0].childNodes[0].innerHTML;

  let lowIndex = 0;
  let highIndex = blocks.length;
  let midIndex;
  while (lowIndex <= highIndex) {
    midIndex = Math.floor((lowIndex + highIndex) / 2);
    blocks[lowIndex].style.backgroundColor = "#FF4949"; // red color
    searchContainer[0].style.border = "4px solid FF4949";

    await new Promise(resolve => {
      setInterval(() => {
        resolve();
      }, 100);
    });
    let value1 = blocks[midIndex].childNodes[0].innerHTML;
    if (!isNaN(value1)) {
      value1 = Number(value1);
      searchValue = Number(searchValue);
    }
    if (value1 == searchValue)
      return await foundValue(blocks[midIndex], searchContainer[0]);
    else if (value1 > searchValue) {
      blocks[lowIndex].style.backgroundColor = "#58B7FF";
      highIndex = midIndex - 1;
    } else lowIndex = midIndex + 1;
  }
  return null;
}
