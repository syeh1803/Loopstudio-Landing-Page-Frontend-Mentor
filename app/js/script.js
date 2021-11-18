const burger = document.querySelector("#burger");
const times = document.querySelector("#times");
const navList = document.querySelector('#nav-list');
const header = document.querySelector('#header');

burger.addEventListener('click', () => {
    navList.classList.toggle('show');
    burger.style.display = "none";
    times.style.display = "block";
    header.style.backgroundColor = "black";
})

times.addEventListener("click", () => {
  navList.classList.toggle("show");
  burger.style.display = "block";
  times.style.display = "none";
  header.style.backgroundColor = "transparent";
});