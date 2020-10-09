const nightMode = document.querySelector('input[name=theme]')

function setDarkMode() {
  document.documentElement.classList.toggle('night-mode')

  const storage = localStorage.getItem('night')

  if (storage === 'true') {
    localStorage.removeItem('night')
    localStorage.setItem('night', false)
  }

  if (storage === 'false') {
    localStorage.removeItem('night')
    localStorage.setItem('night', true)
  }
}

const storage = localStorage.getItem('night')

if (storage === 'true') {
  nightMode.click()
  document.documentElement.classList.toggle('night-mode')
}

if (storage === null) {
  console.log('agora foi')
  localStorage.setItem('night', false)
}

// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
  // adiciona a classe `night-mode` ao html
  setDarkMode()
})
