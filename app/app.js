// Variáveis
let count = 0;
let mode = "comum";
let interval;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const options = document.querySelectorAll(".navbarlateral a");
const estilizacao = document.querySelector(".pag-estilizacao");
const diceEstilizacao = document.querySelector(".dice-estilizacao")
const type = document.querySelector("#type");
const automaticEstilizacao = document.querySelector(".pag-relogio")

// Fibonacci config
let fibonacci_sequence = [1, 1, 2]
let fibonacci_index = 0 // vai de 0 a 2
let decreased = false;
let increased = false;

// Lógica das opções
options.forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    mode = e.currentTarget.id;
    clearInterval(interval);

    switch (mode) {
      case "comum": 
        document.body.style.background = "#dae2ecff";
        type.textContent = "Comum"; 

        //count config
        count = 0;
        
        //removing html classes
        diceEstilizacao.classList.remove("active"); 
        estilizacao.classList.remove("active");
        automaticEstilizacao.classList.remove("active");

        break;
      case "primos": 
        document.body.style.background = "#6cf5ffff";
        type.textContent = "Primos"; 

        //count config
        count = 2;

        //removing html classes
        diceEstilizacao.classList.remove("active"); 
        estilizacao.classList.remove("active");
        automaticEstilizacao.classList.remove("active");

        break;

      case "par": 
        document.body.style.background = "#ebd9bbff";
        type.textContent= "Par"; 

        //count config
        count = 0;

        //removing html classes
        diceEstilizacao.classList.remove("active"); 
        estilizacao.classList.remove("active");
        automaticEstilizacao.classList.remove("active");

        break;

      case "impar": 
        document.body.style.background = "#de6ef7ff";
        type.textContent = "Ímpar"; 

        //count config
        count = 1;

        //removing html classes
        diceEstilizacao.classList.remove("active"); 
        estilizacao.classList.remove("active"); 
        automaticEstilizacao.classList.remove("active");

        break;

      case "aleatorio": 
        document.body.style.background = "#4ddbacff";
        type.textContent = "Aleatório"; 

        //count config
        count = 0;

        //adding html class
        diceEstilizacao.classList.add("active");

        //removing html classes
        estilizacao.classList.remove("active");
        automaticEstilizacao.classList.remove("active");

        break;

      case "automatico": 
        document.body.style.background = "#fc9ac0";
        type.textContent = "Automático"; 

        //count config
        count = 0;

        //adding html class
        automaticEstilizacao.classList.add("active");

        //removing html classes
        diceEstilizacao.classList.remove("active"); 
        estilizacao.classList.remove("active");
        break;

      case "romano": 
        document.body.style.background = "#dfc192ff";
        
        type.textContent = "Romano"; 

        //count config
        count = "I"
        
        //adding html class
        estilizacao.classList.add("active"); 

        //removing html classes
        diceEstilizacao.classList.remove("active"); 
        automaticEstilizacao.classList.remove("active");

        break;

      case "fibonacci": 
      document.body.style.background = "#FFD700";
        type.textContent = "Fibonacci"; 

        //fibonacci variables config
        decreased = false
        increased = false
        count = 0
        
        //removing html classes
        diceEstilizacao.classList.remove("active"); 
        estilizacao.classList.remove("active");
        automaticEstilizacao.classList.remove("active");

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

      case "par":
        count = evenCount(count, option);
        break;

      case "impar":
        count = oddCount(count, option);
        break;

      case "aleatorio":
        count = randomCount(count, option);
        break;
      
      case "fibonacci":
        count = fibonacciCount(count, option);
        break;

      case "primos":
        count = primeCount(count, option);
        break;
      
      case "romano":
        count = romanCount(count, option);
        break; 

      case "automatico":
        automaticCount(option);
        turnOnClock();
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

// Fibonacci
function fibonacciCount(count, option) {
  if (option === "decrease") {
    decreased = true;
    if(increased) {
      increased = false
      fibonacci_index--;
    }
    if(count < 2) {
      if (count == 0) {
        count = 0
        fibonacci_index=0
        fibonacci_sequence = [1, 1, 2]
      } else {
        count--;
        fibonacci_index--;
      }
    } else {
      if (fibonacci_index == 0){
        fibonacci_sequence[0] = fibonacci_sequence[2] - Math.abs(fibonacci_sequence[1])
        count = fibonacci_sequence[2];
        fibonacci_index = 2
      } else if (fibonacci_index == 1){
        fibonacci_sequence[1] = fibonacci_sequence[0] - Math.abs(fibonacci_sequence[2])
        count = fibonacci_sequence[0];
        fibonacci_index = 0
      }
      else{ 
        fibonacci_sequence[2] = fibonacci_sequence[1] - Math.abs(fibonacci_sequence[0])
        count = fibonacci_sequence[1];
        fibonacci_index = 1
      }
    }
  } else if (option == "increase") {
    increased = true
    if(decreased) {
      decreased = false
      fibonacci_index++;
    }
    if(count < 2) {
      if (fibonacci_index != 2) {
        count = fibonacci_sequence[fibonacci_index]
        fibonacci_index++;
      } else {
        fibonacci_index = 0
        count = fibonacci_sequence[2]
      }
    } else {
      if (fibonacci_index == 0){
        fibonacci_sequence[0] = fibonacci_sequence[1] + fibonacci_sequence[2]
        count = fibonacci_sequence[0];
        fibonacci_index = 1
      } else if (fibonacci_index == 1){
        fibonacci_sequence[1] = fibonacci_sequence[2] + fibonacci_sequence[0]
        count = fibonacci_sequence[1];
        fibonacci_index = 2
      }
      else{ 
        fibonacci_sequence[2] = fibonacci_sequence[1] + fibonacci_sequence[0]
        count = fibonacci_sequence[2];
        fibonacci_index = 0
      }
    }
  } else {
    count = 0;
    fibonacci_index = 0 
    fibonacci_sequence = [1, 1, 2]
  } 
  return count
}

// Primos
function primeCount(count, option) {
  if(option == "decrease"){
    let prime = true
    while (prime){
      count--;
      if(isItPrime(count)){
        prime = false
      }
    }
  }
  else if(option == "increase") {
    let prime = true
    while (prime){
      count++;
      if(isItPrime(count)){
        prime = false
      }
    }
  }
  else {
    count = 2
  }

  return count
}

function isItPrime(number){
  if(number == 1 || number == 0){
    return false
  }

  if(number > 0 ){
    for(let i = 0; i<number; i++){
      if(number%i==0) {
        if(number%i==0 && i!=1 && i!=number){
          return false;
        }
      }
    }
  } else {
    let numberPositive = number*(-1)
    for(let i = 0; i<numberPositive; i++){
      if(numberPositive%i==0) {
        if(numberPositive%i==0 && i!=1 && i!=numberPositive){
          return false;
        }
      }
    }
  }


  return true;
}

// Romano
function romanCount(count, option){
  if(option == "decrease"){
    if(count == "I"){
      return "I";
    }
    let number = fromRoman(count)
    number--;
    count = toRoman(number)
  }else if(option == "increase"){
    let number = fromRoman(count)
    number++;
    count = toRoman(number)
  }
  else{
    count = "I"
  }
  
  return count;
}

function toRoman(num) {
  const algarisms = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];
  let result = '';
  for (const [value, numeral] of algarisms) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result;
}

function fromRoman(str) {
  const algarisms = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    const curr = algarisms[str[i]], next = algarisms[str[i+1]];
    if (next > curr) num -= curr;
    else num += curr;
  }
  return num;
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

function turnOnClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourAngle = (hours % 12) * 30 + minutes * 0.5;
  const minuteAngle = minutes * 6;
  const secondAngle = seconds * 6;

  document.querySelector(".hora").style.transform = `rotate(${hourAngle}deg)`;
  document.querySelector(".minuto").style.transform = `rotate(${minuteAngle}deg)`;
  document.querySelector(".segundo").style.transform = `rotate(${secondAngle}deg)`;
}

setInterval(turnOnClock, 1000);