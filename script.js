const balls = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const rgbColor = document.getElementById('rgb-color');
const bntResetGame = document.getElementById('reset-game');

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

ballCerta();
answer.innerText = 'Escolha uma cor';

const textoResposta = (event) => {
  const click = event.target;
  console.log(click.style.backgroundColor);
  if (click.style.backgroundColor === rgbColor.innerText) {
    answer.innerHTML = 'Acertou!';
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
  }
};

const refresh = () => {
  window.location.reload();
}

balls.forEach((ball) => ball.addEventListener('click', textoResposta));
bntResetGame.addEventListener('click', refresh);