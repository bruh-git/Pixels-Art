
// adiciona eventos em varios elementos
const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const color = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');

for (let i = 0; i < color.length; i += 1){ 
    color[i].addEventListener('click',selecionaCor);
}
for (let i=0; i < pixel.length; i+=1){
    pixel[i].addEventListener('click', pintaPixel);
}

function selecionaCor(event){
    for(let i =0; i <color.length; i += 1){
    color[i].classList.remove('selected');
    event.target.classList.add('selected');
}
}
function pintaPixel(event){
  for(let i = 0; i <pixel.length; i += 1){
      event.target.style.backgroundColor = 'green';
  }
}

