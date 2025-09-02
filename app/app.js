// Variáveis
let count = 0;
let mode = "comum";
let interval;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const options = document.querySelectorAll(".navbarlateral a");
const estilizacao = document.querySelector(".pag-estilizacao");
const type = document.querySelector("#type");

// Lógica das opções
options.forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    mode = e.currentTarget.id;
    clearInterval(interval);

    if (mode == "impar"){
      count = 1;
    } else {
      count = 0;
    }

    if (mode == "romano"){
      document.body.style.background = "#edd9b9";
      document.body.style.transition = "1s"
      estilizacao.classList.add("active"); 
    } else {
      document.body.style.background = "hsl(205, 100%, 96%)";
      estilizacao.classList.remove("active"); 
    }

    switch (mode) {
      case "comum": 
        type.textContent = "Comum"; 
        break;
      case "primos": 
        type.textContent = "Primos"; 
        break;

      case "par": 
        type.textContent= "Par"; 
        break;

      case "impar": 
        type.textContent = "Ímpar"; 
        break;

      case "aleatorio": 
        type.textContent = "Aleatório"; 
        break;

      case "automatico": 
        type.textContent = "Automático"; 
        break;

      case "romano": 
        type.textContent = "Romano"; 
        break;

      case "fibonacci": 
        type.textContent = "Fibonacci"; 
        break;
    }

    value.textContent = count;
  });
});

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

      case "primos":
        count = primosCount(count, option);
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
      
      case "automatico":
        automaticCount(option)
        break;

      case "romano":
        count = romanCount(count, option)
        break;

      case "fibonacci":
        count = fibonacciCount(count, option)
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

// Automática
function automaticCount(option) { 
  clearInterval(interval) 
  if (option === "reset") {
    count = 0;
    value.textContent = count;
    return;
  }
  
  if (option === "decrease") count--;
  if (option === "increase") count++; 
  
  document.querySelector("#value").textContent = count; 
  interval = setInterval( 
    () => { 
      if (option === "decrease") count --;
      if (option === "increase") count ++;

      document.querySelector("#value").textContent = count; 
    }, 1000 
  ) 
}

// Romano
function romanCount(count, option) { 
  
}
