// Variáveis para armazenar o índice atual de cada carrossel
let indexTerror = 0;
let indexRomance = 0;
let indexFiccao = 0;
let indexFantasia = 0;
let indexAnimes = 0;


/**
 * Função para mover o carrossel horizontalmente
 * @param {number} step - Quantidade de passos para mover (+1 para direita, -1 para esquerda)
 * @param {string} carouselId - ID do carrossel que será movido
 */
function moveCarousel(step, carouselId) {
    const carousel = document.getElementById(carouselId); // Obtém o elemento do carrossel pelo ID
    const totalCards = carousel.querySelectorAll('.card').length; // Conta o número total de cards no carrossel
    const maxIndex = totalCards - 4; // Define o limite máximo de deslocamento (supondo 4 cards visíveis)

    // Verifica qual carrossel está sendo movido e ajusta o índice correspondente
    if (carouselId === 'carouselTerror') {
        indexTerror = Math.min(Math.max(indexTerror + step, 0), maxIndex); // Garante que o índice não ultrapasse os limites
        carousel.style.transform = `translateX(-${indexTerror * 25}%)`; // Move o carrossel
    } else if (carouselId === 'carouselRomance') {
        indexRomance = Math.min(Math.max(indexRomance + step, 0), maxIndex);
        carousel.style.transform = `translateX(-${indexRomance * 25}%)`;
    } else if (carouselId === 'carouselFiccao') {
        indexFiccao = Math.min(Math.max(indexFiccao + step, 0), maxIndex);
        carousel.style.transform = `translateX(-${indexFiccao * 25}%)`;
    } else if (carouselId === 'carouselFantasia') {
        indexFantasia = Math.min(Math.max(indexFantasia + step, 0), maxIndex);
        carousel.style.transform = `translateX(-${indexFantasia * 25}%)`;
    } else if (carouselId === 'carouselAnimes') {
        indexAnimes = Math.min(Math.max(indexAnimes + step, 0), maxIndex);
        carousel.style.transform = `translateX(-${indexAnimes * 25}%)`;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Ajuste aqui a altura do seu cabeçalho fixo
    const headerOffset = 280; 

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();

                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Limpa o hash da URL
                history.replaceState(null, null, ' ');
            }
        });
    });
});