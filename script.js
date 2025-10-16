const heart = document.getElementById("heart");
const conteudo = document.getElementById("conteudo");
const heartsContainer = document.getElementById("heartsContainer");

heart.addEventListener("click", () => {
  heart.style.display = "none"; // esconde o coração principal
  conteudo.style.display = "flex"; // mostra o conteúdo com foto e mensagem
  conteudo.setAttribute("aria-hidden", "false");
});

// Função para criar corações flutuantes
function createHeart() {
  const heartFloat = document.createElement("div");
  heartFloat.classList.add("heart-float");
  heartFloat.innerText = "❤️";

  heartFloat.style.left = Math.random() * 100 + "vw";
  heartFloat.style.fontSize = Math.random() * 20 + 15 + "px";

  const duration = Math.random() * 3 + 4;
  heartFloat.style.animationDuration = duration + "s";

  heartsContainer.appendChild(heartFloat);

  setTimeout(() => {
    heartFloat.remove();
  }, duration * 1000);
}

setInterval(createHeart, 600);

// ---------------------------
// Loop de fotos
const imagens = [
  "src/vida1.png",
  "src/vida2.png",
  "src/vida3.png",
  "src/vida4.png",
];

const fotoContainer = document.querySelector(".foto-container");

// Inserir imagens no HTML
imagens.forEach((src, index) => {
  const img = document.createElement("img");
  img.src = src;
  if (index === 0) img.classList.add("active");
  fotoContainer.appendChild(img);
});

// Função para trocar imagens
let indexAtual = 0;
function trocarImagem() {
  const fotos = document.querySelectorAll(".foto-container img");

  fotos[indexAtual].classList.remove("active");
  indexAtual = (indexAtual + 1) % fotos.length;
  fotos[indexAtual].classList.add("active");
}

// Troca a cada 3 segundos
setInterval(trocarImagem, 3000);
