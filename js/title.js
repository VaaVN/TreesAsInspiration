document.addEventListener("DOMContentLoaded", () => {
  function Tree() {
    let curState = 4;
    let tree = document.querySelector("[data-js='tl-tree']");
    function changeState() {
      curState--;
      if (curState < 0) {
        curState = 4;
      }
      tree.style.left = `-${55 * curState}%`;
    }
    tree.addEventListener("pointerdown", () => {
      changeState();
    });
  }
  Tree();
});
