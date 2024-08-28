const bar = document.querySelectorAll(".bar");
const x = document.querySelector(".x");
const listBar = document.querySelector(".list-bar");

bar.forEach((p) => {
  p.addEventListener("click", () => {
    listBar.classList.remove("hidden");
  });
});
x.addEventListener("click", () => {
  listBar.classList.add("hidden");
});

const storeBig = document.querySelector(".store-big");
const listStoreBig = document.querySelector(".list-store-big");

storeBig.addEventListener("mouseover", () => {
  {
    listStoreBig.classList.remove("hidden");
  }
});
storeBig.addEventListener("mouseout", () => {
  {
    listStoreBig.classList.add("hidden");
  }
});
