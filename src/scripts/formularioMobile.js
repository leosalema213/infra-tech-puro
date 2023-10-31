const formMobile = document.querySelector('#formMobile form')
const inputCelMobile = document.querySelector("#formMobile #cel")
const btnMobile = document.querySelector('#formMobile #btn-submit')
const msgErrorMobile = document.querySelector('#formMobile .input__group span')

const inputCelInvalidMobile = () => {
  inputCelMobile.style.border = '2px solid red'
  msgErrorMobile.classList.add('is-visible')
    btnMobile.classList.add('disabled')
    btnMobile.disabled = true
  }
  
  const inputCelValidMobile = () => {
    inputCelMobile.style.border = '1px solid #00a2ff'
    msgErrorMobile.classList.remove('is-visible')
    btnMobile.classList.remove('disabled')
    btnMobile.disabled = false
  }
  
  IMask(
    inputCelMobile,
    {
      mask: '(00) 00000-0000'
    }
  )
  
  formMobile.addEventListener('submit', (e) => {
    Swal.fire('Inscrição realizada com sucesso')
  })

  inputCelMobile.addEventListener('blur', (e) => {
    value = e.target.value 
    if (value.length < 15) {
      inputCelInvalidMobile()
    } else {
      inputCelValidMobile()
    }
    
  })
  