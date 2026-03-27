document.addEventListener("DOMContentLoaded", () => {
  function Merge() {
    let area = document.querySelector("[data-js='mergeGame']");
    let house = document.querySelector("[data-js='mergeHouse']");
    let tree = document.querySelector("[data-js='mergeTree']");
    let moving = false;
    tree.style.left = " 28px";
    house.addEventListener("pointerdown", () => {
      moving = true;
    });
    house.addEventListener("pointermove", (e) => {
      if (moving) {
        let x = e.pageX - house.getBoundingClientRect().width / 2;
        house.style.left = `${x}px`;
        console.log(tree.style.left);
        if (house.style.left < tree.style.left) {
          console.log("aaa");

          house.hidden = true;
          tree.src = "./assets/img/merged.svg";
          tree.style.position = "static";
        }
      }
    });
    house.addEventListener("pointerup", () => {
      moving = false;
    });
    document.addEventListener("pointerup", () => {
      moving = false;
    });
    area.addEventListener("pointerexit", () => {
      moving = false;
    });
  }
  function Garden() {
    let items = document.querySelectorAll("[data-js='item']");
    let area = document.querySelector("[data-js='gardenGame']");
    let activeItem = null;
    let offsetX = 0;
    let offsetY = 0;
    document.addEventListener("pointerdown", (e) => {
      if (Array.from(items).includes(e.target)) {
        activeItem = e.target;
        const rect = activeItem.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
      }
    });
    document.addEventListener("pointermove", (e) => {
      if (!activeItem) return;
      const areaRect = area.getBoundingClientRect();
      activeItem.style.left = `${e.clientX - areaRect.left - offsetX}px`;
      activeItem.style.top = `${e.clientY - areaRect.top - offsetY}px`;
    });
    document.addEventListener("pointerup", () => {
      activeItem = null;
    });
    document.addEventListener("pointerleave", () => {
      activeItem = null;
    });
    area.addEventListener("pointerleave", () => {
      activeItem = null;
    });
  }
  Garden();
  Merge();
});
