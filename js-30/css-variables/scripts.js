const favzies = prompt('What are your favorite things?');
const text = document.querySelector('.text');
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

	if (this.value == 360){
		document.documentElement.style.setProperty(`--base`, '#60BB1E');
		text.innerHTML="Maximum Rotation Achieved!!! <br> You've earned 500 " + favzies + "! <br> Prepare for <a target='_blank' href='https://youtu.be/dQw4w9WgXcQ'>level 2</a>...";
		text.style.setProperty('display', 'block');
	}

}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));