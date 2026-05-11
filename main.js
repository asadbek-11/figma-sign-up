document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelector(".bars");
  const menu = document.querySelector(".top-middle");
  const closeBtn = document.querySelector(".close");

  bars.addEventListener("click", () => {
    menu.classList.add("show-menu");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("show-menu");
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !bars.contains(e.target)) {
      menu.classList.remove("show-menu");
    }
  });
});
let carouselInner = document.querySelector(".carousel__inner")
let dots = document.querySelectorAll(".dot")
let current = 0

function changeSlide() {
  carouselInner.style.transform = `translateX(-${current * 100}%)`

  dots.forEach(function (dot) {
    dot.classList.remove("active")
  })

  dots[current].classList.add("active");
}

dots.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    current = index
    changeSlide()
  })
})

setInterval(function () {
  current++;

  if (current === dots.length) {
    current = 0;
  }
  changeSlide()


}, 3000);


const modal = document.getElementById("modal");
const signUpBtn = document.querySelector(".btns");
const closeModal = document.getElementById("closeModal");
const lgn = document.querySelector("#lgnLink")

signUpBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

closeModal.addEventListener("click", (event) => {
  if (event.target === modal) {
    чё
    modal.style.display = "none";
  }
});

lgn.addEventListener("click", function () {
  loginModal.style.display = "flex"
})

const loginModal = document.querySelector("#login-modal");
const loginBtns = document.querySelector(".login-btns");
const loginCloseModal = document.querySelector("#login-closeModal");
const lgnBtn = document.querySelector("#lgnBtn");


loginCloseModal.addEventListener("click", () => {
  loginModal.style.display = "none";
});

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  loginModal.style.display = "none";
  modal.style.display = "flex";
});

lgnBtn.addEventListener("click", function(){
  loginModal.style.display = "flex"
})