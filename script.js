let pageTitle = document.createElement('h1');
pageTitle.textContent = 'Etch As Sketch';
pageTitle.style.textAlign = 'center';

let pageBody = document.querySelector('body');
pageBody.appendChild(pageTitle)

container.style.width = '500px';
container.style.height = '500px';
container.style.margin = 'auto';
container.style.border = '1px solid black';

pageBody.insertBefore(pageTitle, container);



div.classList.add('box');
div.style.width = '20px'
div.style.height = '20px'
div.style.backgroundColor = 'green'

for(let i = 0; i < 16; i++){
    let div = document.createElement('div');
    container.appendChild(div);
}

