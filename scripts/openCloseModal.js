const modalbutton = document.getElementById('modal-button')
const modalClosebutton = document.getElementById('close-button')
const modal = document.getElementById('modal')

function openCloseModal() {
  modal.classList.toggle('hide')
}

modalbutton.addEventListener('click', () => {
  openCloseModal()
})

modalClosebutton.addEventListener('click', () => {
  openCloseModal()
})
