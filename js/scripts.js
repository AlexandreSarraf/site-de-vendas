window.onload = function() {
    alert("Bem-vindo à Livraria Sarraf!");

};

// Array de URLs das imagens
const images = [
    './imagens/imagem1.jpg',
    './imagens/imagem2.jpg',
    './imagens/imagem3.jpg',
    './imagens/imagem4.jpg',
    './imagens/imagem5.jpg'
];

// Inicializa o índice do slide
let currentIndex = 0;

// Função para atualizar a imagem do slide
function updateSlide() {
    const slide = document.getElementById('slide');
    slide.src = images[currentIndex]; // Define a imagem atual

    // Incrementa o índice ou reinicia se chegar ao fim
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Reinicia o índice
    }
}

// Chama a função updateSlide a cada 2 segundos (2000 milissegundos)
setInterval(updateSlide, 2000);