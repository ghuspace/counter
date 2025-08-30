// Lógica do contador inicial

let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});

// Lógica da navbar
const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".navbarlateral");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("collapsed");
});
