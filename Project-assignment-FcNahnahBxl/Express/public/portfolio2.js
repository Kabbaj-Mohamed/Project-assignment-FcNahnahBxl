// Sélectionner nos éléments
let btn1       = document.querySelector('#btn1');
let btn2       = document.querySelector('#btn2');
let btn3       = document.querySelector('#btn3');

let div1       = document.querySelector('#cache1');
let div2       = document.querySelector('#cache2');
let div3       = document.querySelector('#cache3');

let hidden    = true;

// Cacher le message
div1.style.display = "none";
div2.style.display = "none";
div3.style.display = "none";
// Détecter le clic
btn1.addEventListener('click', () => {
  
  if(hidden) {
    btn1.textContent = "Cacher";
    div1.style.display = "block";
    hidden = false;
  }
  else {
    btn1.textContent = "Afficher";
    div1.style.display = "none";
    hidden = true;
  }
  
});

// Pour le deuxième button
btn2.addEventListener('click', () => {
  
  if(hidden) {
    btn2.textContent = "Cacher";
    div2.style.display = "block";
    hidden = false;
  }
  else {
    btn2.textContent = "Afficher";
    div2.style.display = "none";
    hidden = true;
  }
  
});

btn3.addEventListener('click', () => {
  
  if(hidden) {
    btn3.textContent = "Cacher";
    div3.style.display = "block";
    hidden = false;
  }
  else {
    btn3.textContent = "Afficher";
    div3.style.display = "none";
    hidden = true;
  }
  
});