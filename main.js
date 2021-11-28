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
