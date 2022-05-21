const div = document.createElement('div');
const label = document.createElement('label');
const input = document.createElement('input');
const button = document.createElement('button');
const span = document.createElement('span');

document.body.appendChild(div);

div.append(label);
div.append(input);
div.append(button);
div.append(span);


div.style.maxWidth = '1250px';
div.style.margin = `auto`;
div.style.marginTop = '10px';
div.style.paddingBottom = '100px';
label.innerHTML = 'Текст';
button.innerHTML = 'Реклама';
span.style.display = 'block';
span.style.paddingTop = '20px';


button.addEventListener('click', () => {

	span.innerHTML += `
	<marquee direction="left" scrollamount="8">hello ${input.value}!</marquee>
	`;

	// let text = input.value;
	// setInterval(() => {
	// 	text = text[text.length - 1] + text.substring(0, text.length - 1);
	// 	span.innerHTML = text;

	// }, 100);
});
