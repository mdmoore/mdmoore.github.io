function playSound(e) {
	var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

	// stop function if no audio
	if(!audio) return; 

	//simulate round robin - let sounds ring out
	if(audio.currentTime > 0){
		audio = audio.cloneNode();
	}
	audio.play();

	key.classList.add('playing');
}

function removeTransition(e) {
	if(e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);