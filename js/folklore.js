document.addEventListener("DOMContentLoaded", () => {
  function Slider() {
    let curPageIndex = 0;
    let leftArrow = document.querySelector("[data-js='fl-la']");
    let slider = document.querySelector("[data-js='fl-slider']");
    let rightArrow = document.querySelector("[data-js='fl-ra']");
    function changePage(delta) {
      curPageIndex += delta;
      if (curPageIndex >= 3) {
        curPageIndex = 3;
        leftArrow.hidden = false;
        rightArrow.hidden = true;
      } else if (curPageIndex <= 0) {
        curPageIndex = 0;
        leftArrow.hidden = true;
        rightArrow.hidden = false;
      } else {
        leftArrow.hidden = false;
        rightArrow.hidden = false;
      }
      slider.style.left = `-${50 * curPageIndex}svw`;
    }
    leftArrow.hidden = true;
    leftArrow.addEventListener("pointerdown", () => {
      changePage(-1);
      console.log("left");
    });
    rightArrow.addEventListener("pointerdown", () => {
      changePage(1);
      console.log("rt");
    });
  }
  function Apple() {
    let count = 0;
    const apples = document.querySelectorAll("[data-js='fl-apple']");
    let disc = document.querySelector("[data-js='fl-disc']");
    document.addEventListener("pointerdown", (e) => {
      if (Array.from(apples).includes(e.target)) {
        e.target.remove();
        count++;
        if (count == 4) {
          disc.hidden = false;
        }
      }
    });
  }
  Apple();
  Slider();
});
