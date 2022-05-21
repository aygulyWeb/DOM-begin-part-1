const title = document.createElement('h2');
const text = document.createElement('div');

document.body.appendChild(title);
document.body.appendChild(text);


title.innerHTML = 'wow, a new h1 heading!';
title.style.color = 'red';
title.style.textTransform = 'capitalize';
title.style.padding = '20px'

text.innerHTML = `This is a simple demonstration of how you can navigate the DOM and locate an element on the page and then change the element using JavaScript.
					When you look at the red title above you see that it is not the text in the h1 tag of the HTML. The original text was, "The Old H1 Heading." It has been replaced by the JavaScript.
					So, what happened? The JavaScript navigates the DOM looking for the element that has an ID of "mainHeading." Once it finds its on the web page it stores it in the variable called, "headline."
					It then changes the html of the variable to a string, "Wow, a New H1 Heading!" `;
text.style.lineHeight = '2';
text.style.padding = '20px'




