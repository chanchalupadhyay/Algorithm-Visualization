function swap(bl1, bl2) {
  return new Promise(resolve => {
    const style1 = window.getComputedStyle(bl1);
    const style2 = window.getComputedStyle(bl2);

    const tranform1 = style1.getPropertyValue("transform");
    const tranform2 = style2.getPropertyValue("transform");

    bl1.style.transform = tranform2;
    bl2.style.transform = tranform1;

    window.requestAnimationFrame(() => {
      setTimeout(() => {
        algoContainer.insertBefore(bl2, bl1);
        resolve();
      }, 250);
    });
  });
}

async function bubbleSort() {
  let blocks = document.querySelectorAll(".block");
  console.log("welcome in bubble sort function=" + blocks.length);

  for (let i = 0; i < blocks.length; i++) {
    for (let j = 0; j < blocks.length - i - 1; j++) {
      blocks[j].style.backgroundColor = "#FF4949";
      blocks[j + 1].style.backgroundColor = "#FF4949";

      await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, 100)
      );

      let value1 = blocks[j].childNodes[0].innerHTML;
      let value2 = blocks[j + 1].childNodes[0].innerHTML;

      if (!isNaN(value1)) {
        value1 = Number(value1);
        value2 = Number(value2);
      }

      if (value1 > value2) {
        await swap(blocks[j], blocks[j + 1]);
        blocks = document.querySelectorAll(".block");
      }

      blocks[j].style.backgroundColor = "#58B7FF";
      blocks[j + 1].style.backgroundColor = "#58B7FF"; //blue
    }

    blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66"; //green
  }
}
