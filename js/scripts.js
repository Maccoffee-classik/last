// функции интерфейса
$(function () {
  $('header').load('interface/header.html')
  $('nav').load('interface/nav.html')
  $('aside').load('interface/aside.html')
  $('footer').load('interface/footer.html')
  $('footerRealty').load('interface/footerRealty.html')
  $('#ribl').load('interface/ribl.html')
  $('#headerRealty').load('interface/headerRealty.html')
  $('#headerNews').load('interface/headerNews.html')
  $('navRealty').load('interface/navRealty.html')
})

function showPopup () {
  if (document.body.clientWidth < 1024) {
    window.location.href = 'online-zapolnenie.html'
    return
  }
  document.getElementById('popup').style.display = 'flex'
}
function hidePopup () {
  document.getElementById('popup').style.display = 'none'
}
setTimeout(
  function () {
    document.querySelector('.burger').onclick = function(){
      document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
      var nav = document.getElementById('navigation')
      if (nav.style.left == "30vw") {
        nav.style.left = 'calc(100% + 15px)';
        nav.style.visibility = 'hidden'
        document.body.style.overflow = "auto"
      } else {
        nav.style.left = '30vw'
        nav.style.visibility = 'visible'
        document.body.style.overflow = "hidden"
      }
    }
  }
  , 1000
)