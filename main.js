const mario = document.querySelector("#mario");
const logo = document.querySelector("#logo");
const coin = document.querySelector("#coin");

logo.addEventListener("click", (e) => {
  logo.style.animation = "none";
  void logo.offsetWidth;
  logo.style.animation = "logo .25s ease";
  coin.style.animation = "none";
  void coin.offsetWidth;
  coin.style.animation = "coin .5s ease";
});

let posicaoAtual = 0;
let alturaPulo = 150;
let velocidade = 15;
let teclaPressionada = false;
let pulando = false;

document.addEventListener("keydown", (e) =>  {
  if (e.code === "KeyA") {
    posicaoAtual -= velocidade;
    teclaPressionada = true
    mario.style.transform = `translateX(${posicaoAtual}px) rotateY(180deg)`;
    mario.src = "/resources/css/img/mairocorrendo.gif";
    mario.style.width = "120px";
  }
  
  if (e.code === "KeyD") {
    posicaoAtual += velocidade;
    teclaPressionada = true
    mario.style.transform = `translateX(${posicaoAtual}px)`;
    mario.src = "/resources/css/img/mairocorrendo.gif";
    mario.style.width = "120px";
  }
  if (e.code === "Space") {
    e.preventDefault();
    mario.animate(
      [{ bottom: `60px;` }, { bottom: `${alturaPulo}px` }, { bottom: `60px;` }],
      {
        duration: 300,
      }
    );
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyD" || e.code === "KeyA") {
    teclaPressionada = false;
    mario.src = "/resources/css/img/mario.png";
    mario.style.width = "100px";
  }
});
