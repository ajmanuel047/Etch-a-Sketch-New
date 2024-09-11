let pageTitle = document.createElement('h1');
pageTitle.textContent = 'Etch A Sketch';
pageTitle.style.textAlign = 'center';

let pageBody = document.querySelector('body');
pageBody.appendChild(pageTitle)

let container = document.querySelector('#container')
let width = '500px'
let height = '500px'
container.style.width = `${width}`;
container.style.height = `${height}`;
container.style.margin = 'auto';
pageBody.insertBefore(pageTitle, container);
container.style.display = 'flex';
container.style.flexWrap = 'wrap'
let num = 19

function randomColor(){
    let color = ['orange', 'green', 'pink', 'purple', 'green', 'blue', 'black', 'gray', 'yellow', 'skyblue'];
    let randomValue = Math.floor(Math.random() * color.length)
    return color[randomValue]
}

for(let i = 0; i < num * num; i++){
    let div = document.createElement('div');
    div.style.height = `calc(${height} / ${num})`
    div.style.width = `calc(${width} / ${num})`
    div.style.boxShadow = '0px 0px 0px 1px black inset';
    container.appendChild(div);
   
}
