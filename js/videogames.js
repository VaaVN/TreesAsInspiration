document.addEventListener("DOMContentLoaded", () => {
  function DragonAttack() {
    let dragon = document.querySelector("[data-js='dragon']");
    let progress = document.querySelector("[data-js='dragonProgress']");
    let bar = document.querySelector("[data-js='dragonBar']");
    let health = 100;
    dragon.addEventListener("pointerdown", () => {
      dragon.style.scale = "0.9";
      setTimeout(() => {
        dragon.style.scale = "1";
      }, 200);
      health -= 10;
      progress.style.width = `${health}%`;
      if (health <= 0) {
        bar.hidden = true;
        dragon.src = "./assets/img/sleepDragon.svg";
      }
    });
  }
  function Roots() {
    const roots = document.querySelectorAll("[data-js='root']");
    document.addEventListener("pointerdown", (e) => {
      if (Array.from(roots).includes(e.target)) {
        e.target.style.bottom = "-100%";
        setTimeout(() => {
          e.target.style.bottom = "0";
        }, 2000);
      }
    });
  }
  Roots();
  DragonAttack();
});
