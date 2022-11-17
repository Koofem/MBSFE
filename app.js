console.log('Привет мир')
function mountFirstElement() {
	const selector = document.getElementById('container')
	selector.innerText = 'Привет МИР!'
	selector.style.color = 'red';
	selector.style.padding = '10px';
	selector.style.fontSize = '25px'
	selector.style.width = 'fit-content'

}
addEventListener("load", (event) => {
	mountFirstElement()
});


