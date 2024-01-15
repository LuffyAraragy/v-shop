import {delayResponse} from '@/assets/utils/utilsPromis'

export async function fetchFooterData() {
    let footerData = [    
        ["Меню","Купить","Продать","Сдать","Снять","Без агента"],
        ["Наша компания","О компании","Вакансии","Отзывы","Контакты"],
        ["Услуги", "Ремонт", "Дизайн"],
        ["Сотрудничество", "Сотрудничество", "Сдать в управление",],
    ];
        return delayResponse(footerData);
}

export async function fetchFooterDataSocialNetwork() {
  let socialNetwork = ["vk.svg", "media.svg", "youtube.svg", "facebook.svg", "iconfinder.svg"];
  return delayResponse(socialNetwork);
}

export async function fetchFooterDataContacts() {
  const socialContacts = [
    ["mail.svg","Info@hh-r.ru"],
    ["telephone.svg","+7 812 333-55-15"],
    ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut magna aliqua. / @2020. Все права защищены"]
  ];
  return delayResponse(socialContacts);
}

export async function vCardObject () {
  const numbersСredit = {
    price: "5000000",
    myMoney: "500000",
    loanTerm: "240",
    percentCredit: "100"
  }
  return delayResponse(numbersСredit);
}

export async function vBank2() {
  let bankContent2 = [
    ["multimedia-option 5.svg", "Вы оставляете заявку", "Вы оставляете заявку, мы связываемся с Вами для уточнения подробностей, согласовываем дату и время встречи"],
    ["multimedia-option 5.svg", "Вы оставляете заявку", "Вы оставляете заявку, мы связываемся с Вами для уточнения подробностей, согласовываем дату и время встречи"],
    ["multimedia-option 5.svg", "Вы оставляете заявку", "Вы оставляете заявку, мы связываемся с Вами для уточнения подробностей, согласовываем дату и время встречи"],
    ["multimedia-option 5.svg", "Вы оставляете заявку", "Вы оставляете заявку, мы связываемся с Вами для уточнения подробностей, согласовываем дату и время встречи"],
  ]
  return delayResponse(bankContent2);
}

export async function vBank() {
  let bankContent = [
    ["39307215501_a6edae48a0_o 2.svg", "Сбербанк 18%", "от 28.05.2020"],
    ["Dom 1.svg", "Дом.рф 15%", "от 28.05.2020"],
    ["1356398132 1.svg", "Росбанк   18%", "от 28.05.2020"],
    ["058 1.svg", "Россельхозбанк 20%", "от 28.05.2020"],
  ]
  return delayResponse(bankContent);
}


export async function vCardItem() {
  let cardItem = [
    ["VladaSteblina.png", "5206 1.png", "23184 1.png"],
    ["3 900 000 ₽", "love.svg"],
    ["2-ком. квартира", "73 кв. м.", "2/15 эт."],
    ["ул. Воскресенская 12А"],
    ["м. Сокольники"],
  ]
  return delayResponse(cardItem);
}

export async function vServiceCardList() {
  let serviceCardList = [
    { img: ["VladaSteblina.png", "5206 1.png", "23184 1.png"], price: "3 900 000 ₽", icon: "love.svg", characteristics: ["2-ком. квартира", "73 кв. м.", "2/15 эт."], address: "ул. Воскресенская 12А", metro: "м. Сокольники", onLiked: false},
    { img: ["VladaSteblina.png", "5206 1.png", "23184 1.png"], price: "3 900 222 ₽", icon: "love.svg", characteristics: ["2-ком. квартира", "73 кв. м.", "2/15 эт."], address: "ул. Воскресенская 12А", metro: "м. Сокольники", onLiked: false},
    { img: ["VladaSteblina.png", "5206 1.png", "23184 1.png"], price: "3 900 333 ₽", icon: "love.svg", characteristics: ["2-ком. квартира", "73 кв. м.", "2/15 эт."], address: "ул. Воскресенская 12А", metro: "м. Сокольники", onLiked: false},
  ]
  return delayResponse(serviceCardList);
}

// TODO Убрать в поздних версиях проекта, после отладки ветвей git (Не использую)
export async function vCardService() {
  let cardService = [
    [
      ["VladaSteblina.png", "5206 1.png", "23184 1.png"],
      ["3 900 000 ₽", "love.svg"],
      ["2-ком. квартира", "73 кв. м.", "2/15 эт."],
      ["ул. Воскресенская 12А"],
      ["м. Сокольники"],
    ],
    [
      ["VladaSteblina.png", "5206 1.png", "23184 1.png"],
      ["3 900 222 ₽", "love.svg"],
      ["2-ком. квартира", "73 кв. м.", "2/15 эт."],
      ["ул. Воскресенская 12А"],
      ["м. Сокольники"],
    ],
    [
      ["VladaSteblina.png", "5206 1.png", "23184 1.png"],
      ["3 900 333 ₽", "love.svg"],
      ["2-ком. квартира", "73 кв. м.", "2/15 эт."],
      ["ул. Воскресенская 12А"],
      ["м. Сокольники"],
    ],
  ]
  return delayResponse(cardService);
}

// TODO Убрать в поздних версиях проекта, после отладки ветвей git (Не использую)
// export async function vMenuLeft() {
//   let menuContent = [
//     ["Rectangle 5.svg", "Купить"],
//     ["Rectangle 2.svg", "Продать"],
//     ["Rectangle 1.svg", "Сдать"],
//     ["Rectangle 4.svg", "Снять"],
//     ["Rectangle 3.svg", "Без агента"],
//     ["О компании"],
//     ["Вакансии"],
//     ["Ремонт"],
//     ["Дизайн"],
//     ["Отзывы"],
//     ["Сотрудничество"],
//     ["Сдать в управление"],
//     ["Контакты"],
//   ]
//   return delayResponse(menuContent);
// }

export async function vMenuLeft() {
  let menuContent = [
    {img: "Rectangle 5.svg", dropdownButton: "Купить"},
    {img: "Rectangle 5.svg", dropdownButton: "Продать"},
    {img: "Rectangle 5.svg", dropdownButton: "Сдать"},
    {img: "Rectangle 5.svg", dropdownButton: "Снять"},
    {img: "Rectangle 5.svg", dropdownButton: "Без агента"},
    {dropdownButton: "О компании"},
    {dropdownButton: "Вакансии"},
    {dropdownButton: "Ремонт"},
    {dropdownButton: "Дизайн"},
    {dropdownButton: "Отзывы"},
    {dropdownButton: "Сотрудничество"},
    {dropdownButton: "Сдать в управление"},
    {dropdownButton: "Контакты"},
  ]
  return delayResponse(menuContent);
}

// TODO Убрать весь контент vAddObject и сделать формы статическими
export async function vAddObject() {
  let addObject = [
    ["Добавить Объект"],
    ["Продать", "Сдать"],
    ["Город"],
    ["Район"],
    ["Количество комнат"],
    ["Студия", "1", "2", "3", "4", "4+"],
    ["Этаж"],
    ["Состояние"],
    ["Плохое", "Хорошее", "Отличное"],
    ["Предполагаемая стоимость продажи"],
    ["Фамилия"],
    ["Имя"],
    ["Отчество"],
    ["Телефон"],
    ["Электронная почта"],
    ["Разместить объявление"],
  ]
  return delayResponse(addObject);
}

export async function vCardAgent() {
  let cardItem = [
    ["skills 1.svg", "profile 1.svg", "contract-2 1.svg", "contract-3 1.svg", "contract-4 1.svg", "credit-card 1.svg", "profile 1.svg", "statement 1.svg",],
    ["Консультация", "Купля-продажа", "Купля-продажа", "Цессия", "Договор аренды", "Ипотечный кредит", "Проверка участника", "Выписка"],
    ["Консультация по проведению сделки", "Составление договора купли-продажи 1-й сложности (2 участника)", "Составление договора купли-продажи 2-й сложности (2+ участников)", "Составление договора цессии", "Составление договора аренды", "Согласование ипотечного кредита", "Проверка участника сделки", "Выписка из ЕГРН"],
    ["5 000 ₽", "2 000 ₽", "5 000 ₽", "2 000 ₽", "1 500 ₽", "10 000 ₽", "2 000 ₽", "100 ₽"],
    ["Оставить заявку"],
  ]
  return delayResponse(cardItem);
}

export async function vAppComponentAnyPage() {
  let componentAnyPage = [
    {mainDescription: "Нам доверяют свою недвижимость Управляем объектами более 34 собственников Доверьтесь и Вы", imgMain: "WithoutAgent.svg",  imgIcon: "Group.svg", descriptionCapabilities: ["Гибкая система вознаграджения", "Индивидуальный подход к каждому клиенту", "Прозрачное сотрудничество"], dropdownButton: "Сдать в управление"},
  ]
  return delayResponse(componentAnyPage);
}