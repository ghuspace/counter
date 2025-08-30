// Variáveis

let count = 0;
let mode = "comum";
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const options = document.querySelectorAll(".navbarlateral a");

// Lógica das opções
options.forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    mode = e.currentTarget.id;
    if (mode == "impar"){
      count = 1;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});

// Ainda preciso colocar pra destacar a corzinha da opção la no menu, qnd o usuário escolhe
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    let option;
    if (styles.contains("decrease")) {
      option = "decrease";
    } else if (styles.contains("increase")) {
      option = "increase";
    } else {
      option = "reset";
    }

    switch (mode) {
      case "comum":
        count = commonCount(count, option);
        break;

      case "par":
        count = evenCount(count, option);
        break;

      case "impar":
        count = oddCount(count, option);
        break;

      case "aleatorio":
        count = randomCount(count, option);
        break;
    }
    value.textContent = count;
  });
});

// Lógica da navbar lateral
const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".navbarlateral");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("collapsed");
});

// Funções de contagem

// Comum
function commonCount(count, option) {
  if (option === "decrease") return count- 1;
  if (option === "increase") return count+ 1;
  return 0;
}

// Par
function evenCount(count, option) {
  if (option === "decrease") return count- 2;
  if (option === "increase") return count+ 2;
  return 0;
}

// Ímpar
function oddCount(count, option) {
  if (option === "decrease") count -= 2;
  else if (option === "increase") count += 2;
  else count = 1;
  return count;
}

// Aleatória
function randomCount(count, option) {
  let random = Math.floor(Math.random() * 10) + 1;
  if (option === "decrease") return count - random;
  if (option === "increase") return count + random;
  return 0;
}

// To tentando deixar padronizado em ingles o codigo, se achar alguma caca ai pode me falarKKKKKKKKKK