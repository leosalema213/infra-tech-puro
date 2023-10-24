const form = document.querySelector('form')
const inputCel = document.querySelector("#cel")
const btn = document.querySelector('#btn-submit')
const msgError = document.querySelector('.inputGroup span')
const counter = document.querySelector('#contador')

const inputCelInvalid = () => {
  inputCel.style.border = '2px solid red'
  msgError.classList.add('is-visible')
  btn.classList.add('disabled')
  btn.disabled = true
}

const inputCelValid = () => {
  inputCel.style.border = '1px solid #00a2ff'
  msgError.classList.remove('is-visible')
  btn.classList.remove('disabled')
  btn.disabled = false
}

IMask(
  document.querySelector("#cel"),
  {
    mask: '(00) 00000-0000'
  }
)

form.addEventListener('submit', (e) => {
  Swal.fire('Inscrição realizada com sucesso')
})


inputCel.addEventListener('blur', (e) => {
  value = e.target.value 
  if (value.length < 15) {
    inputCelInvalid()
  } else {
    inputCelValid()
  }
  
})

function startTimer(duration, display) {
  let timer = duration,hours,minutes, seconds;

  setInterval(function(){
    hours = parseInt(timer / 3600, 10)
    minutes = parseInt(timer / 60, 10)
    minutes = hours ? minutes - (60 * hours) : minutes;
    seconds = parseInt(timer % 60, 10)

    display.textContent = hours + ":" + minutes + ":" + seconds

    if(--timer < 0) {
      timer = duration
    }

  }, 1000)

  
}

window.onload = function() {
  let duration = 60 * 1440
  let display = counter

  startTimer(duration, display)
}