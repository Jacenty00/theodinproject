const content = document.createElement('p');
content.classList.add('content');
content.textContent = 'Hello World!';
content.style.color = 'red';
container.appendChild(content);
const h3 = document.createElement('h3');
h3.textContent = 'Hi im blue!';
h3.style.color = 'blue';
container.appendChild(h3);
const div = document.createElement('div');
div.style.backgroundColor = 'pink';
div.style.borderColor = 'black';
const h1 = document.createElement('h1');
h1.textContent = 'Im in a div';
div.appendChild(h1);
const anotherP = document.createElement('p');
anotherP.textContent = 'ME TOO!';
div.appendChild(anotherP);
container.appendChild(div);
btn.addEventListener('click', function(e){
    console.log(e)
  })