function createHeart() {
    const container = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerText = '❤️';
    heart.style.left = Math.random() * 100 + "vw";
    const duration = (Math.random() * 3) + 5;
    heart.style.animationDuration = duration + "s";
    container.appendChild(heart);
    setTimeout(() => { heart.remove(); }, duration * 1000);
}
setInterval(createHeart, 400);
