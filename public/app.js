let CreatePlayer = document.querySelector('.CreatePlayer');

CreatePlayer.addEventListener('submit', (e) => {
	e.preventDefault();
	let first_name = CreatePlayer.querySelector('.first_name').value;
	let last_name = CreatePlayer.querySelector('.last_name').value;
	let email = CreatePlayer.querySelector('.email').value;
	let password = CreatePlayer.querySelector('.password').value;
	post('/createPlayer', { first_name, last_name, email, password });
});

function post(path, data) {
	return window.fetch(path, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
}