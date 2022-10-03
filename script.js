const combinacoes = [
  [0, 1, 2], // linha 1
  [3, 4, 5], // linha 2
  [6, 7, 8], // linha 3
  [0, 3, 6], // coluna 1
  [1, 4, 7], // coluna 2
  [2, 5, 8], // coluna 3
  [0, 4, 8], // diagonal esqueda direita
  [2, 4, 6], // diagonal direita esquerda
];

//Globais
let grid = document.querySelector(".grid");
let jogador = document.querySelector("#player");
let div = document.getElementsByClassName("celula");
let playerAtual = "";

//function cria divs
function criaDiv() {
  for (let i = 0; i < 9; i++) {
    let div = document.createElement("div");
    div.setAttribute("id", i);
    div.addEventListener("click", jogar);
    div.setAttribute("class", "celula");
    grid.appendChild(div);
  }
}
criaDiv();

//function jogar junto a verificação do ganhador
function jogar(event) {
  let alvo = event.target;

  if (jogador.innerText == "Vez do jogador X") {
    jogador.innerText = "Vez do jogador O";
    playerAtual = "X";
  } else if ((jogador.innerText = "Vez do jogador O")) {
    jogador.innerText = "Vez do jogador X";
    playerAtual = "O";
  }
  alvo.innerText = playerAtual;

  for (let i = 0; i < combinacoes.length; i++) {
    posicoes = combinacoes[i];
    pontos = 0;

    for (let j = 0; j < posicoes.length; j += 1) {
      if (document.getElementById(posicoes[j]).innerText == playerAtual) {
        pontos += 1;
        if (pontos >= 3) {
          jogador.innerText = `jogador ${playerAtual} Ganhou!!`;
        } else {
          deuEmpate();
        }
      }
    }
  }
}

//function para quando der empate
function deuEmpate() {
  let cont = 0;
  for (let i = 0; i < div.length; i++) {
    if (div[i].innerText !== "") {
      cont += 1;
      if (cont == div.length) {
        jogador.innerText = "Deu empate!";
      }
    }
  }
}

//function botão para resetar jogo
function reset() {
  let button = document.getElementById("reset");
  button.addEventListener("click", (event) => {
    for (let i = 0; i < div.length; i++) {
      div[i].innerText = "";
      jogador.innerText = "Vez do jogador X";
    }
  });
}
reset();
