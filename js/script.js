document.addEventListener("DOMContentLoaded", () => {
  let main = document.querySelector("[data-js='main']");
  setInterval(() => {
    let x = Math.floor(Math.random() * 1920);
    let y = Math.floor(Math.random() * 1080);
    let element = document.createElement("div");
    element.classList.add("purp");
    element.style.top = `${y}px`;
    element.style.left = `${x}px`;
    element = main.appendChild(element);
  }, 3000);
});
