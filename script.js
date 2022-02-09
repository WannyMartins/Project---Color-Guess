const balls = document.querySelectorAll('.ball');

const rgb = (a, b, c) => {
    a = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    c = Math.floor(Math.random() * 256);

    return `rgb(${a}, ${b}, ${c})`;
}

const corAletoria = () => {
    balls.forEach((ball) => {
        ball.style.backgroundColor = rgb();
    })
}
corAletoria()