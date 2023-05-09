const mario = document.querySelector("#mario");
const logo = document.querySelector("#logo");
const coin = document.querySelector("#coin");

document.addEventListener("keypress", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    mario.style.animation = "none";
    void mario.offsetWidth; // reflow
    mario.style.animation = "mario .6s normal";
  }
});

logo.addEventListener("click", (e) => {
  logo.style.animation = "none";
  void logo.offsetWidth; // reflow
  logo.style.animation = "logo .25s ease";
  coin.style.animation = "none";
  void coin.offsetWidth; // reflow
  coin.style.animation = "coin .5s ease";
});

let posicaoAtual = 0;
let velocidade = 15

document.addEventListener('keydown', (e) => {
  if (e.code === 'KeyD') {
    posicaoAtual += velocidade
    mario.style.transform = `translateX(${posicaoAtual}px)`;
  }
});
document.addEventListener('keydown', (e) => {
  if (e.code === 'KeyA') {
    posicaoAtual -= velocidade
    mario.style.transform = `translateX(${posicaoAtual}px) rotateY(180deg)`;
    mario.style.transition = "translateX .3s ease"
  }
});
