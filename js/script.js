document.addEventListener("DOMContentLoaded", () => {
  function scroll() {
    let curPageIndex = 0;
    let pagesId = ["title", "folklore", "videogames", "design", "end"];
    document.getElementById(pagesId[0]).scrollIntoView({ behavior: "smooth" });
    function changePage(delta) {
      curPageIndex += delta;
      if (curPageIndex >= 4) curPageIndex = 4;
      if (curPageIndex <= 0) curPageIndex = 0;
      document
        .getElementById(pagesId[curPageIndex])
        .scrollIntoView({ behavior: "smooth" });
    }
    document.addEventListener("wheel", (e) => {
      if (e.deltaY > 0) {
        changePage(1);
      } else {
        changePage(-1);
      }
    });
  }
  scroll();
});
