function downloadPDF () {
  document.getElementsByClassName('buttons')[0].style.display = 'none'
  html2canvas(document.getElementById('pdf')).then(canvas => {
    pdf = new jsPDF('p', 'mm', 'a4')
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298)
    pdf.save('Договор купли продажи.pdf')
    document.getElementsByClassName('buttons')[0].style.display = ''
  })
}

function clearForm () {
  if (window.confirm('Все внесённые данные пропадут, очистить все заполненные поля?')) {
    window.localStorage.clear()
    location.reload()
  }
}
