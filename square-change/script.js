const div = document.createElement('div');
div.className = 'container';
document.body.append(div);


for (let i = 0; i < 5; i++) {
	let divChild = document.createElement('div');

	divChild.className = 'div-child';
	divChild.innerHTML = 'Vasya';
	divChild.style.background = '#000';
	divChild.style.color = '#fff';
	divChild.style.textAlign = 'center';
	divChild.style.margin = '10px';
	div.appendChild(divChild);
}

const divChild = document.querySelectorAll('.div-child');


for (item in divChild) {

	divChild[item].style.width = `${150 - (item * 20)}px`;
	divChild[item].style.height = `${150 - (item * 20)}px`;
	divChild[item].style.fontSize = `${20 - (item * 2)}px`;
}

// arr[0].style.padding = `${50}px`;
// arr[0].style.fontSize = `${20}px`;

// arr[1].style.padding = `${50 - 10}px`;
// arr[1].style.fontSize = `${18}px`;

// arr[2].style.padding = `${40 - 10}px`;
// arr[2].style.fontSize = `${16}px`;

// arr[3].style.padding = `${30 - 10}px`;
// arr[3].style.fontSize = `${14}px`;

// arr[4].style.padding = `${20 - 10}px`;
// arr[4].style.fontSize = `${12}px`;






