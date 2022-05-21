const div = document.createElement('div');
const button = document.createElement('button');
const title = document.createElement('h2');

document.body.appendChild(div);
div.append(title);
div.append(button);


div.style.padding = '100px';
button.innerHTML = 'Click Me!';
button.style.marginTop = '10px';
button.style.cursor = 'pointer';
button.style.padding = '3px';
title.innerHTML = 'Change HTML Content';
title.style.display = 'block';


button.addEventListener('click', () => {

	title.innerHTML = 'Hello JavaScript!!!';

});