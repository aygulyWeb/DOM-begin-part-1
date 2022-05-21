const div = document.createElement('div');
const title = document.createElement('h2');
const img = document.createElement('img');
const button = document.createElement('button');
const btn = document.createElement('button');

document.body.appendChild(div);
div.append(title);
div.append(img);
div.append(button);
div.append(btn);

div.style.padding = '100px';
title.innerHTML = 'Change Images';
button.innerHTML = 'HTML';
button.style.cursor = 'pointer';
btn.innerHTML = 'CSS';
btn.style.cursor = 'pointer';
img.style.marginTop = '20px';
img.style.width = '200px';
img.style.height = '200px';

button.addEventListener('click', () => {
	img.src = 'html.png';
});
btn.addEventListener('click', () => {
	img.src = 'css.png';

});
