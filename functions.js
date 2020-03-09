const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')

//if there are items already in the localStorage, read them or declare an empty array 
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

// create li tag and add the new data
const liMaker = text => {
	const li = document.createElement('li')
	li.textContent = text
	ul.appendChild(li)
}

form.addEventListener('submit', function(e) {
	e.preventDefault()

	itemsArray.push(input.value)
	localStorage.setItem('items', JSON.stringify(itemsArray))
	liMaker(input.value)	
	input.value = ''
});

//saved data in the localStorage
data.forEach(item => {
	liMaker(item)
})

button.addEventListener('click', function() {
	localStorage.clear()

	while(ul.firstChild) {
		ul.removeChild(ul.firstChild)
	}
})

