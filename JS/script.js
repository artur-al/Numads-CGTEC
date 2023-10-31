const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

// Função para alternar o estado do menu (aberto/fechado)
function toggleMenu() {
    const mainElement = document.querySelector('main');
    mainElement.classList.toggle('hamburger-active');
    const footerElement = document.querySelector('footer');
    footerElement.classList.toggle('hamburger-activeF');
}