function addToScreen(value) {
	document.getElementById('screen').value += value;
}

function clearScreen() {
	document.getElementById('screen').value = '';
}

function backspace() {
	var value = document.getElementById('screen').value;
	document.getElementById('screen').value = value.substr(0, value.length - 1);
}

function calculate() {
	var value = document.getElementById('screen').value;
	document.getElementById('screen').value = eval(value);
}
