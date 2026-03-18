document.addEventListener("DOMContentLoaded", () => {
  function BinarTree() {
    let curState = 5;
    let treeGame = document.querySelector("[data-js='end-treeGame']");
    let hover = document.querySelector("[data-js='end-hover']");
    function changeState() {
      curState--;
      if (curState < 0) {
        curState = 5;
      }
      hover.style.height = `${20 * curState}%`;
    }
    treeGame.addEventListener("pointerdown", () => {
      changeState();
    });
  }
  BinarTree();
});
