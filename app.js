const noBtn = document.querySelector('.btn.no');

function moverBoton() {
    const card = document.querySelector('.card');
    const cardRect = card.getBoundingClientRect();
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    let newX = Math.random() * (cardRect.width - btnWidth);
    let newY = Math.random() * (cardRect.height - btnHeight);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
}

noBtn.addEventListener('mouseenter', moverBoton);

noBtn.addEventListener('touchstart', moverBoton);
noBtn.addEventListener('click', moverBoton);

function mostrarMensajeLindo() {
    const card = document.querySelector('.card');
    card.innerHTML = `
        <h2>¡Sabía que dirías que sí!💖</h2>
        <p>🥰</p>
        <img src="oso.jfif" alt="Osito feliz" style="width: 250px; border-radius: 12px; margin-top: 16px;">
    `;
}
