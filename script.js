let pageTitle = document.createElement('h1');
pageTitle.textContent = 'Etch A Sketch';
pageTitle.style.textAlign = 'center';

let pageBody = document.querySelector('body');
pageBody.appendChild(pageTitle)

container.style.width = '500px';
container.style.height = '500px';
container.style.margin = 'auto';
container.style.border = '1px solid black';

pageBody.insertBefore(pageTitle, container);