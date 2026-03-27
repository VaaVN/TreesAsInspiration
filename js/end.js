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
  function BoxDestroy() {
    let box = document.querySelector("[data-js='box']");
    let progress = document.querySelector("[data-js='boxProgress']");
    let bar = document.querySelector("[data-js='boxBar']");
    let name = document.querySelector("[data-js='myName']");
    let group = document.querySelector("[data-js='myGroup']");
    let health = 100;
    box.addEventListener("pointerdown", () => {
      box.style.scale = "0.9";
      setTimeout(() => {
        box.style.scale = "1";
      }, 200);
      health -= 10;
      progress.style.width = `${health}%`;
      if (health <= 0) {
        bar.hidden = true;
        box.hidden = true;
        name.style.transform = "scale(1) rotate(0deg)";
        name.style.top = "5%";
        name.style.left = "5%";
        group.style.transform = "scale(1) rotate(0deg)";
        group.style.bottom = "5%";
        group.style.right = "5%";
      }
    });
  }
  function FlowerOpen() {
    let flower = document.querySelector("[data-js='flower']");
    let qr = document.querySelector("[data-js='qr']");
    flower.addEventListener("pointerdown", () => {
      flower.style.scale = "1.5";
      setTimeout(() => {
        flower.style.scale = "1";
      }, 200);
      flower.src = "./assets/img/OpenFlower.svg";
      flower.style.width = "60%";
      qr.hidden = false;
    });
  }
  FlowerOpen();
  BoxDestroy();
  BinarTree();
});
