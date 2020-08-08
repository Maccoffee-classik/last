//  <h5>Другие полезные статьи:</h5>
//  ...
//  <a href="akt-priema-peredachi.html">
//    <div class="linkComposition">
//      <div class="imageContainer" style="backgroundImage(src)" />
//      <p>link to</p>
//    </div>
//  </a>
//  ...
const autoLinks = {
  '1': {
    'image': 'images/adaperio.png',
    'link': 'podobrat-avtomobil.html',
    'text': 'Проверка автомобиля по VIN коду онлайн'
  },
  '2': {
    'image': 'images/авто%20картинки/почему-троит-двигатель.jpg',
    'link': 'pochemu-troit-dvigatel.html',
    'text': 'Почему может троить двигатель автомобиля'
  },
  '3': {
    'image': 'images/авто%20картинки/материнский-капитал-на-автомобиль.jpg',
    'link': 'materinskiy-kapital-na-avto.html',
    'text': 'Как получить материнский капитал на покупку автомобиля'
  },
  '4': {
    'image': 'images/авто%20картинки/vozvrat-straxovki-po-kreditu-posle-pogasheniya-kredita.jpg',
    'link': 'vozvrat-strahovki-po-kreditu.html',
    'text': 'Возврат страховки по кредиту при досрочном погашении'
  },
  '5': {
    'image': 'images/авто%20картинки/то-после-покупки.jpg',
    'link': 'posle-pokupki-avtomobilya.html',
    'text': 'Что надо сделать после покупки поддержанного автомобиля'
  },
  '6': {
    'image': 'images/авто%20картинки/cena-vladeniya-avto.jpg',
    'link': 'stoimost-obsluzhivaniya-avtomobilei.html',
    'text': 'Стоимость содержания автомобиля, примерная стоимость расходных материалов'
  },
  '7': {
    'image': 'images/авто%20картинки/выбор-авто.jpg',
    'link': 'kak-vibrat-avtomobil.html',
    'text': 'Выбираем хороший автомобиль для себя'
  },
  '8': {
    'image': 'images/авто%20картинки/выбор-отечественного-автомобиля.jpg',
    'link': 'kak-vybrat-rossijskij-avtomobil.html',
    'text': 'Выбираем хороший автомобиль отечественного производства'
  },
  '9': {
    'image': 'images/авто%20картинки/автозапуск-с-приложением.jpg',
    'link': 'signalizaciya-s-avtozapuskom.html',
    'text': 'Сигнализация с автозапуском, плюсы и минусы'
  },
  '10': {
    'image': 'images/samie-nadezhnie-avtomobili/самые-надежные-автомобили.jpg',
    'link': 'samie-nadezhnie-avtomobili.html',
    'text': 'Самые надёжные автомобили'
  },
  '11': {
    'image': 'images/prava-voditelya-pri-obshenii-s-gibdd/как-вести-себя-с-дпс.jpg',
    'link': 'prava-voditelya-pri-obshenii-s-gibdd.html',
    'text': 'Как общаться с инспектором ГИБДД, если ваше авто остановили'
  },
  '12': {
    'image': 'images/podgotovka-avtomobilya-k-zime/подготовка-авто-к-зиме.jpg',
    'link': 'podgotovka-avtomobilya-k-zime.html',
    'text': 'Подготовка автомобиля к зиме'
  },
  '13': {
    'image': 'images/predprodazhnaya-podgotovka-avtomobilya/предпродажная-подготовка-автомобиля.jpg',
    'link': 'predprodazhnaya-podgotovka-avtomobilya.html',
    'text': 'Предпродажная подготовка автомобиля'
  },
  '14': {
    'image': 'images/kak-vibrat-videoregistrator/видеорегистраторы.jpg',
    'link': 'kak-vibrat-videoregistrator.html',
    'text': 'Как выбрать автомобильный видеорегистратор'
  },
  '15': {
    'image': 'images/puteshestvie-na-mashine/путешетсвие-на-машине.jpg',
    'link': 'puteshestvie-na-mashine.html',
    'text': 'Подготовка автомобиля к длительному путешествию'
  },
  '16': {
    'image': 'images/vozhdenie-avtomobilya-zimoi/езда-зимой.jpg',
    'link': 'vozhdenie-avtomobilya-zimoi.html',
    'text': 'Советы по безопасному вождению автомобиля зимой'
  },
  '17': {
    'image': 'images/prodal-mashiny-prihodyat-shtrafi/prishel-shtraf.jpg',
    'link': 'prodal-mashiny-prihodyat-shtrafi.html',
    'text': 'Пришел штраф на проданный автомобиль, что делать?'
  },
  '18': {
    'image': 'images/razvody-gibdd/razvody-gibdd.jpg',
    'link': 'razvody-gibdd.html',
    'text': 'Обманы и спекуляции, используемые ГИБДД на дорогах'
  },
  '19': {
    'image': 'images/kak-poluchit-vyplatu-po-osago-posle-dtp/kak-poluchit-vyplatu-po-osago-posle-dtp.jpg',
    'link': 'kak-poluchit-vyplatu-po-osago-posle-dtp.html',
    'text': 'Как получить выплату по ОСАГО после ДТП?'
  },
  '20': {
    'image': 'images/kak-pravilno-zavodit-avtomobil-zimoj/kak-pravilno-zavodit-avtomobil-zimoj-2.jpg',
    'link': 'kak-pravilno-zavodit-avtomobil-zimoj.html',
    'text': 'Как правильно заводить автомобиль зимой, хитрости и советы'
  },
  '21': {
    'image': 'images/dopuslugi-pri-zakluchenii-osago/osago.jpg',
    'link': 'dopuslugi-pri-zakluchenii-osago.html',
    'text': 'Доп. услуги при заключении ОСАГО'
  },
  '22': {
    'image': 'images/chto-nuzhno-znat-o-motornom-masle/motornoe-maslo.jpg',
    'link': 'chto-nuzhno-znat-o-motornom-masle.html',
    'text': 'Что нужно знать о моторном масле'
  },
  '23': {
    'image': 'images/neskolko-priemov-iskusnogo-vozhdeniya/kontravarijnoe-vozhdenie.jpg',
    'link': 'neskolko-priemov-iskusnogo-vozhdeniya.html',
    'text': 'Несколько приемов искусного вождения'
  },
  '24': {
    'image': 'images/kia-rio-x-line/foto-kia-rio-x-line.jpg',
    'link': 'kia-rio-x-line-cross.html',
    'text': 'Обзор кроссовера Kia Rio X-line'
  },
  '25': {
    'image': 'images/elektronniy-pts/PTS-2018.jpg',
    'link': 'elektronniy-pts.html',
    'text': 'Замена бумажных ПТС на электронные в 2018 году'
  },
  '26': {
    'image': 'images/vziskanie-uscherba-pri-dtp/vziskanie-uscherba-pri-dtp.jpg',
    'link': 'vziskanie-uscherba-pri-dtp.html',
    'text': 'Взыскание ущерба с виновника ДТП'
  },
  '27': {
    'image': 'images/pretenziya-o-zanizhenii-vyplat-osago-kasko/pretenziya-o-zanizhenii-vyplat-osago-kasko.jpg',
    'link': 'pretenziya-o-zanizhenii-vyplat-osago-kasko.html',
    'text': 'Претензия о занижении выплаты по ОСАГО/КАСКО'
  },
  '28': {
    'image': 'images/kak-ne-stat-zhertvoi-moshennikov-v-internete/avto-moshenniki-v-internete.jpg',
    'link': 'kak-ne-stat-zhertvoi-moshennikov-v-internete.html',
    'text': 'Как автовладельцу не стать жертвой мошенников в Интернете?'
  },
  '29': {
    'image': 'images/lishaut-prav-za-nurofen/дпс.jpg',
    'link': 'lishaut-prav-za-nurofen.html',
    'text': 'Лишают прав за «Нурофен»: правда или нет?'
  },
  '30': {
    'image': 'images/arenda-avtomobilya-sovety/аренда-автомобиля-советы.jpg',
    'link': 'arenda-avtomobilya-sovety.html',
    'text': 'Статья про аренду автомобиля в России'
  },
  '31': {
    'image': 'images/arenda-avtomobilya-osmotr/осмотр-авто-фото.jpg',
    'link': 'arenda-avtomobilya-osmotr.html',
    'text': 'Проверка прокатного автомобиля - пошаговая инструкция'
  },
  '32': {
    'image': 'images/sovety-pri-pokupke-garazha/идеальный-гараж.jpg',
    'link': 'sovety-pri-pokupke-garazha.html',
    'text': 'Советы по выбору гаража'
  },
  '33': {
    'image': 'images/kak-oformit-sdelku-po-prodazhe-avtomobilya/мрэо-ГИБДД.jpg',
    'link': 'kak-oformit-sdelku-po-prodazhe-avtomobilya.html',
    'text': 'Как оформить сделку по продаже автомобиля'
  },
  '34': {
    'image': 'images/kak-pravilno-prodat-avtomobil/как-правильно-продавать-автомобиль.png',
    'link': 'kak-pravilno-prodat-avtomobil.html',
    'text': 'Как правильно продавать автомобиль'
  },
  '35': {
    'image': 'images/doverennost-na-avto/доверенность.jpg',
    'link': 'doverennost-na-avto.html',
    'text': 'Нужна ли сейчас доверенность на автомобиль?'
  },
  '36': {
    'image': 'images/novie-pravila-kupli-prodazhi-avto/nomera.jpg',
    'link': 'novie-pravila-kupli-prodazhi-avto.html',
    'text': 'Оформление сделки купли-продажи и регистрация автомобиля в 2020 году'
  },
  '37': {
    'image': 'images/kak-vibrat-moto-ekipirovku/мото-экипировка.jpg',
    'link': 'kak-vibrat-moto-ekipirovku.html',
    'text': 'Выбор защитной экипировки для мотоциклистов'
  }
}
const realtyLinks = {
  '1': {
    'image': 'images/deklaraciya-3-ndfl-2017/3ndfl.png',
    'link': 'deklaraciya-3-ndfl-2017.html',
    'text': '3 НДФЛ на имущественный вычет, как заполнить декларацию'
  },
  '2': {
    'image': 'images/imuschestvennii-nalogovii-vichet/nalogovii-vichet.jpg',
    'link': 'imuschestvennii-nalogovii-vichet.html',
    'text': 'Налоговый вычет с покупки квартиры - как получить?'
  },
  '3': {
    'image': 'images/registraciya-prava-sobstvennosti-na-kvartiru/регистрация-права-собственности.jpg',
    'link': 'registraciya-prava-sobstvennosti-na-kvartiru.html',
    'text': 'Просто и понятно о процедуре регистрации права собственности на квартиру.'
  },
  '4': {
    'image': 'images/spravka-2-ndfl-kodi/2ndfl.png',
    'link': 'spravka-2-ndfl-kodi.html',
    'text': 'Справка 2-НДФЛ для физ лиц'
  },
  '5': {
    'image': 'images/spravka-iz-bti-o-sobstvennosti/справки-из-бти.jpg',
    'link': 'spravka-iz-bti-o-sobstvennosti.html',
    'text': 'Просто и понятно о всех справках из БТИ вашего района.'
  },
  '6': {
    'image': 'images/svidetelstvo-o-gosudarstvennoi-registracii-prava-sobstvennosti/свидетельство-о-гос-регистрации-права.jpg',
    'link': 'svidetelstvo-o-gosudarstvennoi-registracii-prava-sobstvennosti.html',
    'text': 'Что такое свидетельство о гос. регистрации прав собственности?'
  },
  '7': {
    'image': 'images/usloviya-ipoteki-v-2020-godu/условия-ипотеки.jpg',
    'link': 'usloviya-ipoteki-v-2020-godu.html',
    'text': 'Порядок получения ипотеки в 2019 году'
  },
  '8': {
    'image': 'images/minusy-zagorodnoy-zhizni/одинокий-дом-за-городом.jpg',
    'link': 'minusy-zagorodnoy-zhizni.html',
    'text': 'Что нам не нравится в загородной жизни?'
  },
  '9': {
    'image': 'images/plusy-zhizni-za-gorodom/свой-дом-за-городом.jpg',
    'link': 'plusy-zhizni-za-gorodom.html',
    'text': 'Чего мы ожидаем от загородной жизни в своём доме?'
  },
  '10': {
    'image': 'images/proverka-prava-sobstvennosti-na-kvartiru/выписка-егрн.jpg',
    'link': 'proverka-prava-sobstvennosti-na-kvartiru.html',
    'text': 'Проверка права собственности, анализ выписки из ЕГРН.'
  },
  '11': {
    'image': 'images/obman-pri-pokupke-kvartiry/cheater.jpg',
    'link': 'obman-pri-pokupke-kvartiry.html',
    'text': 'Подмена собственника - один из видов мошенничества с недвижимостью'
  },
  '12': {
    'image': 'images/kak-kupit-kvartiru-bez-rieltora/без-риелтора.jpg',
    'link': 'kak-kupit-kvartiru-bez-rieltora.html',
    'text': 'Как купить квартиру без риелтора'
  },
  '13': {
    'image': 'images/15-pravil-arendy-kvartiry/arenda-kvartiry-sovety.jpg',
    'link': '15-pravil-arendy-kvartiry.html',
    'text': '15 правил аренды квартиры по объявлению'
  },
  '14': {
    'image': 'images/soveti-pri-sdache-kvartiry-v-arendu/идеальное-фото-квартиры-для-объявления.jpg',
    'link': 'soveti-pri-sdache-kvartiry-v-arendu.html',
    'text': 'Грамотно составляем объявление о сдаче квартиры'
  },
  '15': {
    'image': 'images/kak-vibrat-zemelnii-uchastok/земельные-участки.jpeg',
    'link': 'kak-vibrat-zemelnii-uchastok.html',
    'text': 'Выбираем земельный участок для строительства дома'
  },
  '16': {
    'image': 'images/sdelki-s-obshedolevoy-sobstvennostu/нотариальная-сделка-купли-продажи-квартиры.jpg',
    'link': 'sdelki-s-obshedolevoy-sobstvennostu.html',
    'text': 'В России упростили процедуру сделок с общедолевой собственностью.'
  }
}

function linksMap (selectedLinks = [], current, links = 3, type = false) {
  // вставляем элемент с линками в конец блока main
  var main = document.getElementsByTagName('main')
  var linksBar = document.createElement('div')
  linksBar.setAttribute('id', 'linksBar')
  linksBar.className = 'textblock'
  main[0].appendChild(linksBar)
  // добавляем заголовок контейнера
  var linkContainerHeader = document.createElement('h5')
  linkContainerHeader.innerHTML = 'Другие полезные статьи на нашем сайте:'
  linksBar.appendChild(linkContainerHeader)

  const linksTable = type ? realtyLinks : autoLinks
  var count = Object.keys(linksTable)
  const maxLinks = links
  if (selectedLinks.length == 0 || selectedLinks.length < maxLinks) {
    while (selectedLinks.length < maxLinks) {
      randomNumber = Math.floor(Math.random() * count.length + 1)
      if (!selectedLinks.includes(randomNumber) && randomNumber != current) {
        selectedLinks.push(randomNumber)
      }
    }
  }
  // цикл по массиву указаных статей
  for (var key in selectedLinks) {
    var i = selectedLinks[key]
    var tableElemet = linksTable[count[i - 1]]
    // формируем линку
    var linka = document.createElement('a')
    linka.setAttribute('href', tableElemet.link)
    linka.setAttribute('onclick', "{yaCounter33710244.reachGoal('crumbCounter');}")
    // формируем блок внутри линки
    var linkComposition = document.createElement('div')
    linkComposition.className = 'linkComposition'
    // картинка
    var imageContainer = document.createElement('div')
    imageContainer.className = 'imageContainer'
    imageContainer.style.backgroundImage = `url(${tableElemet.image})`

    // формируем текст ссылки
    var linkText = document.createElement('p')
    linkText.innerHTML = tableElemet.text

    linkComposition.appendChild(imageContainer)
    linkComposition.appendChild(linkText)
    linksBar.appendChild(linka).appendChild(linkComposition)
  }
}

function linksMapAll (type = false, sort) {
  // вставляем элемент с линками в конец блока main
  var main = document.getElementsByTagName('main')
  var linksBar = document.createElement('div')
  linksBar.setAttribute('id', 'linksBar')
  linksBar.className = 'textblock'
  main[0].appendChild(linksBar)

  const linksTable = type ? realtyLinks : autoLinks
  const countOfStates = Object.keys(linksTable).length
  for (var key = countOfStates; key >= 1; key--) {
    var tableElemet = linksTable[key]
    // формируем линку
    var linka = document.createElement('a')
    linka.setAttribute('href', tableElemet.link)
    linka.setAttribute('onclick', "{yaCounter33710244.reachGoal('crumbCounter');}")
    // формируем блок внутри линки
    var linkComposition = document.createElement('div')
    linkComposition.className = 'linkComposition'
    // картинка
    var imageContainer = document.createElement('div')
    imageContainer.className = 'imageContainer'
    imageContainer.style.backgroundImage = `url(${tableElemet.image})`

    // формируем текст ссылки
    var linkText = document.createElement('p')
    linkText.innerHTML = tableElemet.text

    linkComposition.appendChild(imageContainer)
    linkComposition.appendChild(linkText)
    linksBar.appendChild(linka).appendChild(linkComposition)
  }
}
