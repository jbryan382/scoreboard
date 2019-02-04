let counter1 = 0
let counter2 = 0

const main = () => {
	document.querySelector('.team1Score').textContent = 0
	document.querySelector('.team2Score').textContent = 0
}

let teamName1 = document.querySelector('.teamname1').value
let teamName2 = document.querySelector('.teamname2').value

const updateTeam1 = () => {
	teamName1 = document.querySelector('.newteam1').value
	document.querySelector('.teamname1').textContent = teamName1
}

const updateTeam2 = () => {
	teamName2 = document.querySelector('.newteam2').value
	document.querySelector('.teamname2').textContent = teamName2
}

const increaseCounter1 = () => {
	console.log('Button Clicked')
	counter1 = counter1 + 1
	console.log(counter1)
	document.querySelector('.team1Score').textContent = counter1
}
const increaseCounter2 = () => {
	console.log('Button Clicked')
	counter2 = counter2 + 1
	console.log(counter2)
	document.querySelector('.team2Score').textContent = counter2
}

const decreaseCounter1 = () => {
	console.log('Button Clicked')
	counter1 = counter1 - 1
	console.log(counter1)
	document.querySelector('.team1Score').textContent = counter1
}

const decreaseCounter2 = () => {
	console.log('Button Clicked')
	counter2 = counter2 - 1
	console.log(counter2)
	document.querySelector('.team2Score').textContent = counter2
}

document.addEventListener('DOMContentLoaded', main)

document
	.querySelector('.team-1-add-1-button')
	.addEventListener('click', increaseCounter1)
document
	.querySelector('.team-2-add-1-button')
	.addEventListener('click', increaseCounter2)
document
	.querySelector('.team-1-subtract-1-button')
	.addEventListener('click', decreaseCounter1)
document
	.querySelector('.team-2-subtract-1-button')
	.addEventListener('click', decreaseCounter2)
document
	.querySelector('.update-team-1-name')
	.addEventListener('click', updateTeam1)
document
	.querySelector('.update-team-2-name')
	.addEventListener('click', updateTeam2)
