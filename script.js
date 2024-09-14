let pageTitle = document.createElement('h1');
pageTitle.textContent = 'Etch A Sketch';
pageTitle.style.fontFamily = 'Courier New, Courier, monospace';
pageTitle.style.marginTop = '-2px'
pageTitle.style.textAlign = 'center';

let pageBody = document.querySelector('body');
pageBody.style.backgroundColor = 'snow'
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

let parentButtonDiv = document.createElement('div');
pageBody.insertBefore(parentButtonDiv, container)

let numberOfBoxesButton = document.createElement('button');
numberOfBoxesButton.textContent = 'Box Numbers';
parentButtonDiv.appendChild(numberOfBoxesButton)

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

// function singleColor(i){
//     let color = prompt('Input the name of a color');
//     console.log(color) 
//     return color
// }

let clearButton = document.createElement('button');
clearButton.textContent = 'Clear Single';
pageBody.insertBefore(clearButton, container);

parentButtonDiv.appendChild(clearButton)

let clearAllBoxes = document.createElement('button');
clearAllBoxes.textContent = 'Clear All';
pageBody.insertBefore(clearAllBoxes, container)

parentButtonDiv.appendChild(clearAllBoxes)
parentButtonDiv.style.width = '100%'
parentButtonDiv.style.minWidth = '660px'
parentButtonDiv.style.textAlign = 'center'
parentButtonDiv.style.margin = 'auto'
parentButtonDiv.style.height = '30px'
parentButtonDiv.style.marginBottom = '10px'

let buttonBoxes = document.querySelectorAll('button')
let arr = Array.from(buttonBoxes)

arr.map((elements) => {
    elements.style.height = '30px';
    elements.style.border = '1px solid black';
    elements.style.marginRight = '10px';
    elements.style.marginTop = '-6px';
    elements.style.width = '15%';
    elements.style.fontSize = '12px'
    elements.addEventListener('mouseover', () => {
        elements.style.backgroundColor = 'lightgray'
    })
    elements.addEventListener('mouseout', () => {
        elements.style.backgroundColor = ''
    })
    elements.addEventListener('click', () => {
        elements.style.transform = 'scale(0.97)' 
        setTimeout(() => {
            elements.style.transform = 'scale(1)'
        })        
    })
})

function createDivs(num = 10) {
    for(let i = 0; i < num * num; i++){
        console.log(num)
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
                div.style.backgroundColor = 'yellow'
            })
        })
       
        clearButton.addEventListener('click', function(){
            div.addEventListener('mouseover', function(){
                div.style.backgroundColor = ''
            })
        })
      
        clearAllBoxes.addEventListener('click', function(){
            div.style.backgroundColor = '';
            div.addEventListener('mouseover', function (){
                div.style.backgroundColor = ''
            })
        })
        document.getElementById('container').appendChild(div);

    } 
}
createDivs()

function newContainer (){
    let container = document.createElement('div')
    container.setAttribute('id', 'container')
    container.style.width = `${width}`;
    container.style.height = `${height}`;
    container.style.margin = 'auto';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap'
    pageBody.appendChild(container)
}

numberOfBoxesButton.addEventListener('click', function(){   
    let result = prompt('Enter Number Of Boxes To Be On Both Length And Breath i.e Above 1', 'Must Be Less Than 101 And Greater Than 0')
    if(Number(result) && result > 0 && result < 101){
        document.getElementById('container').remove()
        let num = Number(result)
        console.log(typeof num)
        newContainer()
        createDivs(num)
    }else if(result < 0 || result > 100){
        alert('Number Must Be Greater Than 0 And Less Than 101')
    }
    else if(result == ''){
        alert('Please Enter A Number')
    }
    else {
        alert('Please Enter A Number')
    }
})

// let num = Number(result)
// console.log(typeof num)
// newContainer()
// createDivs(num)

// you are trying to make the code shorter
// num is reading in the console but for some reason it is not being rendered

