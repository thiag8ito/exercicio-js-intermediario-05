const setaVoltar = document.querySelector(".seta-voltar");

const setaAvancar = document.querySelector(".seta-avancar");

const slides = document.getElementsByClassName("imagem");
let slideAtual = 0;
console.log(slides);

setaAvancar.addEventListener("click", function () {
    const ultimoSlide = slideAtual === slides.length - 1;
    if (ultimoSlide) return;

    esconderSlideAnterior();
    slideAtual++
    mostrarSlideSelecionado();

    alterarOpacidadeSetas();
});

setaVoltar.addEventListener("click", function () {
    const primeiroSlide = slideAtual === 0;
    if (primeiroSlide) return;

    esconderSlideAnterior();
    slideAtual--;
    mostrarSlideSelecionado();

    alterarOpacidadeSetas();
});

function mostrarSlideSelecionado() {
    slides[slideAtual].classList.add("selecionado");
}

function esconderSlideAnterior() {
    const slideSelecionado = document.querySelector(".selecionado");
    slideSelecionado.classList.remove("selecionado");
}

function alterarOpacidadeSetas() {
    const naoEhPrimeiroSlide = slideAtual !== 0
    if (naoEhPrimeiroSlide) {
        setaVoltar.classList.remove("opacidade");
    } else {
        setaVoltar.classList.add("opacidade");
    }

    const finalDosSlides = slideAtual === slides.length - 1;
    if(finalDosSlides){
        setaAvancar.classList.add("opacidade");
    }else{
        setaAvancar.classList.remove("opacidade");
    }
}