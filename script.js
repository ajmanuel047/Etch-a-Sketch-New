let pageTitle = document.createElement('h1');
pageTitle.textContent = 'Etch A Sketch';
pageTitle.style.textAlign = 'center';

let pageBody = document.querySelector('body');
pageBody.appendChild(pageTitle)

let container = document.querySelector('#container')
let width = '600px'
let height = '500px'
container.style.width = `${width}`;
container.style.height = `${height}`;
container.style.margin = 'auto';
pageBody.insertBefore(pageTitle, container);
container.style.display = 'flex';
container.style.flexWrap = 'wrap'
let num = 10

let randomColorButton = document.createElement('button');
randomColorButton.textContent = 'Multiple Colors'
pageBody.insertBefore(randomColorButton, container);

// randomColorButton.addEventListener('click', function(){
//     pageBody.style.backgroundColor = 'green'
// })

function randomColor(){
    let color = ['orange', 'green', 'pink', 'purple', 'green', 'blue', 'black', 'gray', 'yellow', 'skyblue'];
    let randomValue = Math.floor(Math.random() * color.length)
    console.log(color[randomValue])
    return color[randomValue]
}

let singleColorButton = document.createElement('button');
singleColorButton.textContent = 'Single Colors'
pageBody.insertBefore(singleColorButton, container)

function singleColor(i){
    let color = 'yellow';
    console.log(color) 
    return color
}

let clearButton = document.createElement('button');
clearButton.textContent = 'Clear Single Boxes';
pageBody.insertBefore(clearButton, container);


console.log(singleColor())
for(let i = 0; i < num * num; i++){
    let div = document.createElement('div');
    div.style.height = `calc(${height} / ${num})`
    div.style.width = `calc(${width} / ${num})`
    div.style.boxShadow = '0px 0px 0px 1px black inset';

    randomColorButton.addEventListener('click', function(){
        div.addEventListener('mouseover', function(){
             div.style.backgroundColor = randomColor()
         })
    })

    singleColorButton.addEventListener('click', function(){
        div.addEventListener('mouseover', function(){
            div.style.backgroundColor = singleColor()
        })
    })
   
    clearButton.addEventListener('click', function(){
        div.addEventListener('mouseover', function(){
            div.style.backgroundColor = ''
        })
    })
  

    container.appendChild(div);
   
}



