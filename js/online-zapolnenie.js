document.addEventListener('keydown', onKeyDown)
function focusToNextInput (target) { // перевод фокуса на следующий tabindex
  var currentIndex = target.tabIndex
  var inputs = document.getElementsByTagName('input')
  for (var i = 0; i < inputs.length; i++) { // берём все input и переходим на следующий tabindex
    if (inputs[i].tabIndex == currentIndex + 1) {
      inputs[i].focus()
    }
  }
}
function onKeyDown (event) { // on enter key down
  if (event.key == 'Enter') {
    focusToNextInput(event.target)
  }
}

function dateValidate (event) { // валидация даты
  // var test = target.value.search(/\d{2}\.\d{2}\.\d{4}/)
  var result = event.target.value
  var cursor = event.target.selectionEnd

  // добавляем 0 если день из одной цифры
  if (result.length == 2 && result[1] == '.') {
    result = '0' + result
    return result
  }
  // добавляем 0 если месяц из одной цифры
  if (result.length == 5 && result[4] == '.') {
    result = result.substr(0, 3) + '0' + result.substr(3, 2)
  }
  // добавляем . после дня и месяца
  console.log(event.inputType)
  if ((result.length == 2 || result.length == 5) && event.inputType !== 'deleteContentBackward') {
    result += '.'
  }
  if (result.length >= 10 && cursor >= 10) { // если заполненна дата и курсор на последнем символе
    result = result.substr(0, 10)
    focusToNextInput(event.target)
  }
  return result
}

function getToday () {
  const today = new Date()
  var options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  }
  return today.toLocaleString('ru', options)
}
function serialNumberValidate (target, count) {
  if (target.value.length == count) {
    focusToNextInput(target)
  }
}

window.onload = function onload () {
  // if (ymaps && ymaps.geolocation) {
  ymaps.geolocation.get({
    provider: 'yandex',
    autoReverseGeocode: true
  }).then(function (res) {
    console.log('>>>>', res.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.text)
  })
  // }
  // setTimeout(function () {
  //  console.log('>>', ymaps && ymaps.geolocation)
  //  var bounds = 0
  //  ymaps && ymaps.geolocation && ymaps.geolocation.get().then(function (res) {
  //    console.log('>>>>', bounds)
  //    bounds = res.geoObjects.get(0).properties.get('metaDataProperty')
  //  })
  // }, 2500)
  // if (ymaps && ymaps.geolocation && typeof ymaps.geolocation.city == 'string') { // устанавливаем город
  //  document.getElementsByName('place')[0].value = ymaps.geolocation.city
  //  document.getElementById('place').innerHTML = ymaps.geolocation.city
  // }
  document.getElementsByName('date')[0].value = getToday()
  document.getElementById('date').innerHTML = getToday() // устанавливаем текущую дату заполнения договора
  var inputs = document.getElementsByClassName('formAutoUnit')
  for (var i = 0; i < inputs.length; i++) { // сдвигаем placeholder если в input есть текст
    if (inputs[i].children[0].value) {
      inputs[i].children[1].className = 'labelTop'
    }
  }
}
function onChange (event) { // заполнить поле в договрк из input
  if (event.target.name.toLowerCase().includes('serial') ||
  event.target.name.toLowerCase().includes('year')) { // валидация серии документов
    serialNumberValidate(event.target, 4)
  }
  if (event.target.name.includes('Number')) { // валидация номера документов
    serialNumberValidate(event.target, 6)
  }
  if (event.target.name.toLowerCase().includes('date')) { // валидация полей с датами
    // const data = event.data
    const data = event.target.value[event.target.value.length - 1]
    if (data && data.search(/\d|\./) != -1) {
      if (event.target.value.search(/\.\./) != -1) {
        event.target.value = event.target.value.substr(0, event.target.value.length - 1)
      }
      event.target.value = dateValidate(event)
    } else {
      event.target.value = event.target.value.substr(0, event.target.value.length - 1)
    }
  }
  document.getElementById(event.target.name).innerHTML = event.target.value
  if (event.target.name.toLowerCase().includes('price')) {
    document.getElementById('price1').innerHTML = event.target.value
  }
  if (event.target.className == 'clickAlert') { // убираем alert когда начинаем печатать
    event.target.className = ''
  }
}
function onClick (event) { // фокус на соответствующий input
  const id = event.target.id || event.target.previousElementSibling.id
  const div = document.getElementsByName(id)
  div[0].focus()
  div[0].className = 'clickAlert'
}
function onFocus (event) {
  var input = event.target
  input.select()
  var inputParent = input.nextElementSibling
  inputParent.className = 'labelTop' // сдвигаем placeholder вверх
}
function onBlur (event) {
  var input = event.target
  input.className = ''
  var inputParent = input.nextElementSibling
  if (!input.value) { // если input не заполнен сдвигаем placeholder вниз
    inputParent.className = ''
  }
}
function onLabelClick (event) {
  var div = event.target.offsetParent
  div.firstElementChild.focus()
}
function downloadPDF () {
  html2canvas(document.getElementById('pdf')).then(canvas => {
    pdf = new jsPDF('p', 'mm', 'a4')
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298)
    pdf.save('Договор купли продажи.pdf')
  })
}
