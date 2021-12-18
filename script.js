
// adiciona eventos em varios elementos
const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const color = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');

for (let i = 0; i < color.length; i += 1){ 
    color[i].addEventListener('click',selecionaCor);
}
function selecionaCor(event){
    for(let i =0; i <color.length; i += 1){
    color[i].classList.remove('selected');
    event.target.classList.add('selected');
}
}
for (let i=0; i < pixel.length; i+=1){
    pixel[i].addEventListener('click', pintaPixel);
}

function pintaPixel(event){
    event.target.style.backgroundColor = 'black';
    
    if (color[0].classList.contains('selected')){
        event.target.style.backgroundColor = 'black';
    } else if (color[1].classList.contains('selected')){
        event.target.style.backgroundColor = 'blue';
    } else if(color[2].classList.contains('selected')){
        event.target.style.backgroundColor = 'pink';
    } else if(color[3].classList.contains('selected')){
        event.target.style.backgroundColor = 'yellow';
    }  
}
// tentei fazer desse forma mas não consegui entender o que estava dando errado
// function pintaPixel(event){
//     let pinta = document.querySelector('.selected');
//     event.target.style.backgroundColor = pinta.style.backgroundColor;
// }
let button = document.querySelector('#clear-board');

button.addEventListener('click', limpar); 

function limpar (){
    for (i =0; i < pixel.length; i +=1){
        pixel[i].style.backgroundColor = 'white';
    }
}