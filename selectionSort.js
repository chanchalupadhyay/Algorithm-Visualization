function swap(bl1, bl2) {
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
        algoContainer.replaceChild(clone2, bl1);
        algoContainer.replaceChild(clone1, bl2);

        resolve();
      }, 500);
    });
  });
}
//console.log(`welcome selection sort`);

async function selectionSort() {
  let blocks = document.querySelectorAll(".block");
  console.log("welcome selection sort1 $" + blocks);
  console.log("welcome selection sort 2" + blocks[0].childNodes[0].innerHTML);
  console.log("lenSe=" + blocks.length);

  for (let i = 0; i < blocks.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < blocks.length; j++) {
      blocks[minIndex].style.backgroundColor = "#FF4949";
      blocks[j].style.backgroundColor = "#FF4949";

      await new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 500);
      });

      let minValue = blocks[minIndex].childNodes[0].innerHTML;
      let value = blocks[j].childNodes[0].innerHTML;

      //   check typeOf values if it is number then change into Number
      if (!isNaN(value)) {
        minValue = Number(minValue);
        value = Number(value);
      }

      if (minValue > value) {
        blocks[minIndex].style.backgroundColor = "#58B7FF";
        minIndex = j;
      } else blocks[j].style.backgroundColor = "#58B7FF";
    }

    if (minIndex !== i) {
      blocks[i].style.backgroundColor = "#FF4949";

      await swap(blocks[i], blocks[minIndex]);
      blocks = document.querySelectorAll(".block");
    }
    blocks[i].style.backgroundColor = "#13CE66"; //green
  }
}
