let text = document.querySelector('[data-inputField]');

let addbtn = document.querySelector('#todobtn');

let list = document.querySelector('.what');




addbtn.addEventListener('click', runaddbtn);


function runaddbtn(e) {

	let listItem = document.createTextNode(text.value);

	let para = document.createElement('li');

	let blank = document.createTextNode('warning: blank');


	list.appendChild(para);

	if (text.value === '') {

		para.classList.add('red');
		
		list.removeChild(para);

	} else {
		para.appendChild(listItem);
	}

	

	text.value = '';

	para.addEventListener('click', function() {
		para.style.textDecoration = 'line-through';
	});

	para.addEventListener('dblclick', function() {
		list.removeChild(para);
	});


}



text.addEventListener('keyup', runadd);


function runadd(e) {

	if (e.keyCode === 13) {

	let listItem = document.createTextNode(text.value);

	let para = document.createElement('li');

	let blank = document.createTextNode('warning: blank');


	list.appendChild(para);

	if (text.value === '') {

		para.classList.add('red');
		
		list.removeChild(para);

	} else {
		para.appendChild(listItem);
	}

	

	text.value = '';

	para.addEventListener('click', function() {
		para.style.textDecoration = 'line-through';
	});

	para.addEventListener('dblclick', function() {
		list.removeChild(para);
	});

	}
}


















