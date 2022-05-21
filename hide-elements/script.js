const div = document.createElement('div');
const title = document.createElement('h2');
const button = document.createElement('button');
const btn = document.createElement('button');

document.body.appendChild(div);
div.append(title);
div.append(button);
div.append(btn);

div.style.padding = '100px';
title.innerHTML = 'Hide HTML Elements';
button.innerHTML = 'See ya';
button.style.cursor = 'pointer';
btn.innerHTML = 'Come back!';
btn.style.cursor = 'pointer';


button.addEventListener('click', () => {
	title.innerHTML = ' ';
});
btn.addEventListener('click', () => {
	title.innerHTML = 'Hide HTML Elements';

});
