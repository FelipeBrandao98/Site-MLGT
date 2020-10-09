const modalButton = document.getElementById('modal-button')
const modifyButtonBlue = document.getElementById('modify-button-blue')
const modifyButtonYellow = document.getElementById('modify-button-yellow')
const modifyButtonGreen = document.getElementById('modify-button-green')
const modifyButtonPurple = document.getElementById('modify-button-purple')

const colorButtomFromStorage = localStorage.getItem('modalButtom')

changeColor(colorButtomFromStorage)

function changeColor(color) {
  modalButton.setAttribute('class', color)
  localStorage.setItem('modalButtom', color)
}

modifyButtonBlue.addEventListener('click', () => {
  changeColor('blue')
})
modifyButtonYellow.addEventListener('click', () => {
  changeColor('yellow')
})
modifyButtonGreen.addEventListener('click', () => {
  changeColor('green')
})
modifyButtonPurple.addEventListener('click', () => {
  changeColor('purple')
})
