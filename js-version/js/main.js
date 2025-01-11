const pianoButton = document.getElementById('pianoButton');
const drumButton = document.getElementById('drumButton');

pianoButton.addEventListener('click', () => {
	window.location.href = 'piano.html';
});

drumButton.addEventListener('click', () => {
    window.location.href = 'drum.html';
});