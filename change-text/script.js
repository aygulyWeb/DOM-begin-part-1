const div = document.createElement('div');
const span = document.createElement('span');
const subTitle = document.createElement('h5');

document.body.appendChild(div);
div.append(span);
div.append(subTitle);

span.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ducimus nesciunt saepe error dolores accusamus perspiciatis deserunt distinctio consequuntur dolorum.`;
subTitle.innerHTML = 'Hello world';

div.style.cssText = `
					margin: auto;
					border: 1px solid red;
					padding: 10px;
					max-width: 800px;
  					`;
span.style.cssText = `
					color: blue;
					font-size: 16px;
					font-weight: bold;
					`
subTitle.style.cssText = `
					margin-top: 10px;
					color: grey;
					display: block;
					border: 1px solid red;
					`






