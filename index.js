const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll("button");

botones.forEach((item) => {
  item.onclick = () => {
    if (item.id == "borrar") {
      pantalla.innerText = "";
    } else if (item.id == "backspace") {
      let string = pantalla.innerText.toString();
      pantalla.innerText = string.substring(0, string.length - 1);
    } else if (pantalla.innerText != "" && item.id == "igual") {
      pantalla.innerText = eval(pantalla.innerText);
    } else if (pantalla.innerText == "" && item.id == "igual") {
      pantalla.innerText = "Null";
      setTimeout(()=> (pantalla.innerText=""), 2000);
    }else{
        pantalla.innerText+=item.id;
    }
  };
});

const temaBoton = document.querySelector('.tema-toggler');
const calculadora = document.querySelector(".calculadora");

let isDark=true;
temaBoton.onclick=() =>{
  calculadora.classList.toggle('dark')
  temaBoton.classList.toggle('active')
  isDark = !isDark
} 