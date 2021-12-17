
// adiciona eventos em varios elementos
const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const color = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');

for (let i = 0; i < color.length; i += 1){ 
    color[i].addEventListener('click',selecionaCor);
}

function selecionaCor(event){
    const seleciona = document.querySelector('.selected');
    seleciona.classList.remove('selected');
    event.target.classList.add('selected');
}
// function mudaBackground() {
//     document.getElementsByClassName('.color').style.backgroundColor = selecionaCor;
//     }
