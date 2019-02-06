let counter1 = 0
let counter2 = 0

const main = () => {
  document.querySelector('.team1Score').textContent = 0
  document.querySelector('.team2Score').textContent = 0
  counter1 = 0
  counter2 = 0
  document.querySelector('.WinPopup').classList.add('Hidden')
  document.querySelector('.Hidden').classList.remove('WinPopup')
}

let teamName1 = document.querySelector('.teamname1').textContent
let teamName2 = document.querySelector('.teamname2').textContent

const updateTeam1 = () => {
  teamName1 = document.querySelector('.newteam1').value
  document.querySelector('.teamname1').textContent = teamName1
}

const updateTeam2 = () => {
  teamName2 = document.querySelector('.newteam2').value
  document.querySelector('.teamname2').textContent = teamName2
}

const buttons = () => {
  document.querySelector('button')
}

const increaseCounter1 = () => {
  console.log('Button Clicked')
  if (counter1 <= 20 && counter2 !== 21) {
    counter1 = counter1 + 1
    console.log(counter1)
    document.querySelector('.team1Score').textContent = counter1
    if (counter1 === 21) {
      document.querySelector('.Hidden').classList.add('WinPopup')
      document.querySelector('.WinPopup').classList.remove('Hidden')
      document.querySelector('.winner').textContent = teamName1
      // Attempt to remove buttons after 21.
      buttons.classList.remove('update-team-1-name')
      buttons.classList.remove('update-team-2-name')
      buttons.classList.remove('team-1-add-1-button')
      buttons.classList.remove('team-2-add-1-button')
      buttons.classList.remove('team-1-subtract-1-button')
      buttons.classList.remove('team-2-subtract-1-button')
      buttons.classList.add('Hidden')
    } else {
      return
    }
  }
}
const increaseCounter2 = () => {
  if (counter2 <= 20 && counter1 !== 21) {
    counter2 = counter2 + 1
    console.log(counter2)
    document.querySelector('.team2Score').textContent = counter2
    if (counter2 === 21) {
      document.querySelector('.Hidden').classList.add('WinPopup')
      document.querySelector('.WinPopup').classList.remove('Hidden')
      document.querySelector('.winner').textContent = teamName2
      // Attempt to remove buttons after 21.
      buttons.classList.remove('update-team-1-name')
      buttons.classList.remove('update-team-2-name')
      buttons.classList.remove('team-1-add-1-button')
      buttons.classList.remove('team-2-add-1-button')
      buttons.classList.remove('team-1-subtract-1-button')
      buttons.classList.remove('team-2-subtract-1-button')
      buttons.classList.add('Hidden')
    }
  } else {
    return
  }
}

const decreaseCounter1 = () => {
  if (counter1 >= 1) {
    console.log('Button Clicked')
    counter1 = counter1 - 1
    console.log(counter1)
    document.querySelector('.team1Score').textContent = counter1
  } else {
    document.querySelector('.team1Score').textContent = counter1
  }
}

const decreaseCounter2 = () => {
  if (counter2 >= 1) {
    console.log('Button Clicked')
    counter2 = counter2 - 1
    console.log(counter2)
    document.querySelector('.team2Score').textContent = counter2
  } else {
    document.querySelector('.team2Score').textContent = counter2
  }
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

document.querySelector('.reset').addEventListener('click', main)
