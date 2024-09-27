let imagens = [];
let indiceAtual = 0;

function embaralharImagens() {
    const galeria = document.querySelector('.galeria');
    imagens = Array.from(galeria.getElementsByTagName('img')).map(img => img.src);
    
    for (let i = imagens.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imagens[i], imagens[j]] = [imagens[j], imagens[i]];
    }

    galeria.innerHTML = '';
    imagens.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('miniatura');
        img.onclick = () => abrirModal(src);
        galeria.appendChild(img);
    });
}

function abrirModal(src) {
    const modal = document.getElementById("meuModal");
    modal.classList.add("ativo");
    indiceAtual = imagens.indexOf(src);
    document.getElementById("img01").src = src;
}

function fecharModal() {
    const modal = document.getElementById("meuModal");
    modal.classList.remove("ativo");
}

function trocarImagem(direcao) {
    indiceAtual += direcao;
    if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1;
    } else if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }
    document.getElementById("img01").src = imagens[indiceAtual];
}

window.onload = function() {
    embaralharImagens();
};
