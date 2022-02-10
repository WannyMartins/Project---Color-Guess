const balls = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const rgbColor = document.getElementById('rgb-color');
const bntResetGame = document.getElementById('reset-game');
const score = document.getElementById('score');

let resultPlacar = 0;

const rgb = () => {
  const a = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const c = Math.floor(Math.random() * 256);

  return `rgb(${a}, ${b}, ${c})`;
};

const corAletoria = () => {
  balls.forEach((ball) => {
    const bolas = ball;
    bolas.style.backgroundColor = rgb();
  });
};

corAletoria();

const ballCerta = () => {
  let de1A6 = balls.length;
  de1A6 = Math.floor(Math.random() * 5);
  console.log(de1A6);
  de1A6 = balls[de1A6];
  rgbColor.innerText = de1A6.style.backgroundColor;
  return rgbColor.innerText;
};

const respostaInicial = () => {
  answer.innerText = 'Escolha uma cor';
};

respostaInicial();

const refresh = () => {
  corAletoria();
  ballCerta();
  respostaInicial();
};

ballCerta();

const setTout = () => {
  setTimeout(() => {
    refresh();
  }, 1000);
};

const textoResposta = (event) => {
  const click = event.target;
  if (click.style.backgroundColor === rgbColor.innerText) {
    resultPlacar += 3;
    score.innerText = resultPlacar;
    answer.innerText = 'Acertou!';
    setTout();
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
