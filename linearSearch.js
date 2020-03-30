function foundValue(val, search) {
  return new Promise(resolve => {
    const valueStyle = window.getComputedStyle(val);
    const searchValStyle = window.getComputedStyle(search);

    const value = valueStyle.getPropertyValue("backgroundColor");
    const searchval = searchValStyle.getPropertyValue("border");

    val.style.backgroundColor = "#13CE66";
    search.style.border = "4px solid #13CE66";

    window.requestAnimationFrame(() => {
      setInterval(() => {
        resolve();
      }, 500);
    });
  });
}

async function linearSearch() {
  search();

  let blocks = document.querySelectorAll(".block");
  let searchContainer = document.querySelectorAll(".searchBox");
  let searchValue = searchContainer[0].childNodes[0].innerHTML;

  for (let i = 0; i < blocks.length; i++) {
    blocks[i].style.backgroundColor = "#FF4949"; // red color
    searchContainer[0].style.border = "4px solid FF4949";
    let value1 = blocks[i].childNodes[0].innerHTML;

    await new Promise(resolve => {
      setInterval(() => {
        resolve();
      }, 500);
    });

    if (!isNaN(value1)) {
      value1 = Number(value1);
      searchValue = Number(searchValue);
    }
    if (value1 == searchValue) {
      return await foundValue(blocks[i], searchContainer[0]);
    }
    blocks[i].style.backgroundColor = "#58B7FF"; //blue color
  }
}
