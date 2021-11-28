function val(result) {
  form.disp.value = form.disp.value + result
}
function calculate() {
  if (form.disp.value == '') {
    alert('Por favor insira numeros')
  } else {
    form.disp.value = eval(form.disp.value)
  }
}
var btn = form.veql
btn.addEventListener('dblclick', function () {
  form.disp.value = '' //quando clica 2 vezes em igual limpa tudo
})

var cln = form.clean
cln.addEventListener('click', function () {
  form.disp.value = '' //quando clica no C limpa tudo
})

var inputText = window.document.querySelector('#disp')
var bck = form.back
bck.addEventListener('click', function () {
  if (inputText.value.length) {
    inputText.value = inputText.value.substr(0, inputText.value.length - 1)
    inputText.focus()
    //quando clica no < limpa
  }
})
