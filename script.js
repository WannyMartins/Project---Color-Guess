const balls = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const rgbColor = document.getElementById('rgb-color');
const bntResetGame = document.getElementById('reset-game');
const score = document.getElementById('score');
const respostaInicial = 'Escolha uma cor';
let resultPlacar = 0;


const rgb = (a, b, c) => {
  a = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  c = Math.floor(Math.random() * 256);

  return `rgb(${a}, ${b}, ${c})`;
}

const corAletoria = () => {
  balls.forEach((ball) => {
    ball.style.backgroundColor = rgb();
  });
};

corAletoria();

const ballCerta = () => {
  let de1A6 = balls.length;
  de1A6 = Math.floor(Math.random() * 5);
  console.log(de1A6)
  de1A6 = balls[de1A6];
  rgbColor.innerText = de1A6.style.backgroundColor;
  return rgbColor.innerText;
};
const refresh = () => {
  corAletoria();
  ballCerta();
  answer.innerText = respostaInicial;
};

ballCerta();
answer.innerText = 'Escolha uma cor';

const textoResposta = (event) => {
  const click = event.target;
  console.log(click.style.backgroundColor);
  if (click.style.backgroundColor === rgbColor.innerText) {
    resultPlacar += 3;
    score.innerText = resultPlacar;
    answer.innerText = 'Acertou!';
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
    resultPlacar -= 1;
    score.innerText = resultPlacar;
    if (resultPlacar <= -6) {
      resultPlacar = 0;
      answer.innerHTML = 'Você Perdeu! Clique em Reiniciar o jogo!';
      score.innerText = 0;
    }
  }
};

balls.forEach((ball) => ball.addEventListener('click', textoResposta));
bntResetGame.addEventListener('click', refresh);