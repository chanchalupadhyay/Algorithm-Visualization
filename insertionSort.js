function assign(bl1, bl2) {
  return new Promise(resolve => {
    const style1 = window.getComputedStyle(bl1);
    const style2 = window.getComputedStyle(bl2);

    const transform1 = style1.getPropertyValue("transform");
    const transform2 = style2.getPropertyValue("transform");

    bl1.style.transform = transform2;
    bl2.style.transform = transform1;
    let clone2 = bl2.cloneNode(true);
    let clone1 = bl1.cloneNode(true);

    window.requestAnimationFrame(() => {
      setTimeout(() => {
        algoContainer.replaceChild(clone1, bl2);
        algoContainer.replaceChild(clone2, bl1);

        resolve();
      }, 500);
    });
  });
}

async function insertionSort() {
  let blocks = document.querySelectorAll(".block");
  for (let i = 1; i < blocks.length; i++) {
    for (j = i; j > 0; j--) {
      let value2 = blocks[j].childNodes[0].innerHTML;
      let value1 = blocks[j - 1].childNodes[0].innerHTML;
      if (!isNaN(value1)) {
        value2 = Number(value2);
        value1 = Number(value1);
      }
      if (value1 > value2) {
        blocks[j].style.backgroundColor = "red";
        blocks[j - 1].style.backgroundColor = "red";

        await new Promise(resolve =>
          setTimeout(() => {
            resolve();
          }, 100)
        );

        await swap(blocks[j], blocks[j - 1]);
        blocks = document.querySelectorAll(".block");
      }
      blocks[j].style.backgroundColor = "#13CE66";
      blocks[j - 1].style.backgroundColor = "#13CE66";
    }
  }
}
