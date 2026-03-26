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
  function TitleGame() {
    let tab = document.querySelector('[data-test="titleGame"]');
    let pictures = Array.from(tab.children);
    let swappable = new Draggable.Swappable(pictures, {
      draggable: ".Block--isDraggable",
      mirror: { constrainDimensions: true },
    });
    swappable.on("drag:stop", () => {
      requestAnimationFrame(() => {
        let curTab = Array.from(tab.children);
        curTab.forEach((img, i) => {
          const imgIndex = parseInt(img.getAttribute("data-index")) - 1;
          if (i == imgIndex) {
            img.classList.remove("Block--isDraggable");
            img.style.opacity = "70%";
          }
        });
      });
    });
  }
  Tree();
  TitleGame();
});
