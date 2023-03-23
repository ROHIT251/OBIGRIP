const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	const temp = parseFloat(document.querySelector('#temp').value);
	const unit = document.querySelector('#unit').value;

	if (unit === 'Celsius') {
		const fahrenheit = (temp * 9/5) + 32;
		result.innerHTML = `${temp}&#8451; = ${fahrenheit}&#8457;`;
	} else if (unit === 'Fahrenheit') {
		const celsius = (temp - 32) * 5/9;
		result.innerHTML = `${temp}&#8457; = ${celsius}&#8451;`;
	}
});
