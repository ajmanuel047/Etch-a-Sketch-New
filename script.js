let pageTitle = document.createElement('h1');
pageTitle.textContent = 'Etch A Sketch';
pageTitle.style.textAlign = 'center';

let pageBody = document.querySelector('body');
pageBody.appendChild(pageTitle)

let container = document.querySelector('#container')
let width = '600px'
let height = '450px'
container.style.width = `${width}`;
container.style.height = `${height}`;
container.style.margin = 'auto';
pageBody.insertBefore(pageTitle, container);
container.style.display = 'flex';
container.style.flexWrap = 'wrap'
let num = 10

let parentButtonDiv = document.createElement('div');
pageBody.insertBefore(parentButtonDiv, container)

let randomColorButton = document.createElement('button');
randomColorButton.textContent = 'Multiple Colors'
pageBody.insertBefore(randomColorButton, container);

parentButtonDiv.appendChild(randomColorButton)

function randomColor(){
    let color = ['orange', 'green', 'pink', 'purple', 'green', 'blue', 'black', 'gray', 'yellow', 'skyblue'];
    let randomValue = Math.floor(Math.random() * color.length)
    console.log(color[randomValue])
    return color[randomValue]
}

let singleColorButton = document.createElement('button');
singleColorButton.textContent = 'Single Colors'
pageBody.insertBefore(singleColorButton, container)

parentButtonDiv.appendChild(singleColorButton)

function singleColor(i){
    let color = 'yellow';
    console.log(color) 
    return color
}

let clearButton = document.createElement('button');
clearButton.textContent = 'Clear Single Boxes';
pageBody.insertBefore(clearButton, container);

parentButtonDiv.appendChild(clearButton)

let clearAllBoxes = document.createElement('button');
clearAllBoxes.textContent = 'Clear All Colors';
pageBody.insertBefore(clearAllBoxes, container)

parentButtonDiv.appendChild(clearAllBoxes)
parentButtonDiv.style.width = '90%'
parentButtonDiv.style.textAlign = 'center'
parentButtonDiv.style.margin = 'auto'
parentButtonDiv.style.height = '30px'
parentButtonDiv.style.marginBottom = '10px'

let buttonBoxes = document.querySelectorAll('button')
let arr = Array.from(buttonBoxes)

arr.map((elements) => {
    elements.style.height = '30px';
    elements.style.border = '1px solid black'
    elements.style.marginRight = '10px'
    elements.style.width = '150px'
})

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
  
    clearAllBoxes.addEventListener('click', function(){
        div.style.backgroundColor = ''
    })

    container.appendChild(div);
   
}


// contine from creating parentDiv so you can center your buttons
