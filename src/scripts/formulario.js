const form = document.querySelector('form')
const inputCel = document.querySelector("#cel")
const btn = document.querySelector('#btn-submit')
const msgError = document.querySelector('.input__group span')

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
    inputCel,
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
  