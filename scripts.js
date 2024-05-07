let index = 0;

function nextImage() {
    const images = document.querySelectorAll('.slide');
    images[index].style.display = 'none';
    index = (index + 1) % images.length;
    images[index].style.display = 'block';
}

window.onload = function() {
    alert("Bem-vindo à Livraria Sarraf!");

    const images = document.querySelectorAll('.slide');
    setInterval(nextImage, 2000); // Troca de imagem a cada 2 segundos
};