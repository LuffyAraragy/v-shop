import {delayResponse} from '@/assets/utils/utilsPromis'

import {defineStore} from 'pinia'

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

export async function vMenuLeft() {
  let menuContent = [
    {img: "Rectangle 5.svg", dropdownButton: "Купить", link:"/users/eduardo/AppDeliveryManagementPage"},
    {img: "Rectangle 5.svg", dropdownButton: "Продать", link:"/users/eduardo/AppDeliveryManagementPage"},
    {img: "Rectangle 5.svg", dropdownButton: "Сдать", link:"/users/eduardo/AppDeliveryManagementPage"},
    {img: "Rectangle 5.svg", dropdownButton: "Снять", link:"/users/eduardo/AppDeliveryManagementPage"},
    {img: "Rectangle 5.svg", dropdownButton: "Без агента", link:"/users/eduardo/AppWithoutAgentPage"},
    {dropdownButton: "О компании", link:"/users/eduardo/AppAboutCompany"},
    {dropdownButton: "Вакансии", link:"/users/eduardo/AppVacancies"},
    {dropdownButton: "Ремонт", link:"/users/eduardo/AppRepair"},
    {dropdownButton: "Дизайн", link:"/users/eduardo/AppRepair"},
    {dropdownButton: "Отзывы", link:"/users/eduardo/AppReviewsPage"},
    {dropdownButton: "Сотрудничество", link:"/users/eduardo/AppCooperation"},
    {dropdownButton: "Сдать в управление", link:"/users/eduardo/AppDeliveryManagementPage"},
    {dropdownButton: "Контакты", link:"/users/eduardo/AppContact"},
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

export async function vOurEmployees() {
  let ourEmployees = [
    {img: "ourEmployees/11867_original 1.svg", name: "Иван Иванов", description: "Риелтор с 10-летним стажем"},
    {img: "ourEmployees/11867_original 1.svg", name: "Иван Иванов", description: "Риелтор с 10-летним стажем"},
    {img: "ourEmployees/11867_original 1.svg", name: "Иван Иванов", description: "Риелтор с 10-летним стажем"},
    {img: "ourEmployees/11867_original 1.svg", name: "Иван Иванов", description: "Риелтор с 10-летним стажем"},
    {img: "ourEmployees/11867_original 1.svg", name: "Иван Иванов", description: "Риелтор с 10-летним стажем"},
    {img: "ourEmployees/11867_original 1.svg", name: "Иван Иванов", description: "Риелтор с 10-летним стажем"},
  ]
  return delayResponse(ourEmployees);
}

export async function vListOfVacancies() {
  let listOfVacancies = [
    {name: "Агент", money: "от 40 000 ₽", city: "Москва, Россия"},
    {name: "Менеджер", money: "от 40 000 ₽", city: "Москва, Россия"},
  ]
  return delayResponse(listOfVacancies);
}

export async function vListBenefits() {
  let listBenefits = [
    {img: "listBenefits/marketing 1.svg", description: "Полная рекламная поддержка"},
    {img: "listBenefits/company 1.svg", description: "Удобный офис"},
    {img: "listBenefits/discount 1.svg", description: "Высокий % от сделки"},
    {img: "listBenefits/goal 1.svg", description: "Карьерный рост"},
    {img: "listBenefits/training 1.svg", description: "Обучение"},
    {img: "listBenefits/information 1.svg", description: "Информационные базы"},
  ]
  return delayResponse(listBenefits);
}

export async function vAgent() {
  let agent = [
    {img: "agent/reward 1.svg", description: "Минимум себе, макисмум Вам"},
    {img: "agent/information-2 1.svg", description: "Доступ к базам недвижимости"},
    {img: "agent/buildings 1.svg", description: "Офис для переговоров"},
    {img: "agent/affiliate 1.svg", description: "Партнерские программы"},
  ]
  return delayResponse(agent);
}

export async function vCompany() {
  let agent = [
    {img: "agent/reward 1.svg", description: "Минимум себе, макисмум Вам"},
    {img: "agent/calendar 1.svg", description: "Доступ к базам недвижимости"},
    {img: "agent/affiliate 1.svg", description: "Офис для переговоров"},
    {img: "agent/individual 1.svg", description: "Партнерские программы"},
  ]
  return delayResponse(agent);
}

export async function vWork() {
  let work = [
    {icon: "work/multimedia-option 5.svg", title: "Вы оставляете заявку", description: "Вы оставляете заявку, мы связываемся с Вами для уточнения подробностей, согласовываем дату и время встречи"},
    {icon: "work/multimedia-option 5.svg", title: "Заключение договора", description: "Составляем договор, подготавливаем техническое задание на производство работ вместе с Вами"},
    {icon: "work/multimedia-option 5.svg", title: "Производство работ", description: "Выполняем работы с поэтапным отчетом"},
    {icon: "work/multimedia-option 5.svg", title: "Прием работы", description: "Вы осматриваете результат работ, в случае выявление недостатков мы их устраняем и предъявляем объект к приемке"},
  ]
  return delayResponse(work);
}

export async function vHeaderBlock() {
  let headerBlock = [
    {img: "work/multimedia-option 5.svg", title: "Нам доверяют свою недвижимость Управляем объектами более 34 собственников Доверьтесь и Вы", icon: ["headerBlock/Group222.svg", "headerBlock/Group222.svg", "headerBlock/Group222.svg"], description: ["Гибкая система вознаграджения", "Индивидуальный подход к каждому клиенту", "Прозрачное сотрудничество"], button: ["Сдать в управление", "Сдать в управление1"]},
  ]
  return delayResponse(headerBlock);
}

export async function vAppAboutCompanySwiperImg() {
  let headerBlock = [
    {img: "ourPartners/logo-pik 1.svg"},
    {img: "ourPartners/LSR_newlogo-png 1.svg"},
    {img: "ourPartners/Setl City 1.svg"},
    {img: "ourPartners/75d37926-d1ac-4d71-902c-c55a857399e8 1.svg"},
    {img: "ourPartners/unnamed 1.svg"},
    {img: "ourPartners/3278709 1.svg"},
    
  ]
  return delayResponse(headerBlock);
}

export async function vTestCardObject() {
  let testCard = [
    { 
      img: ["VladaSteblina.png", "5206 1.png", "23184 1.png"], 
      price: "3 900 000 ₽", 
      icon: "love.svg",
      characteristicsTitle: "Характеристики",
      characteristics: [
        {name:"Этаж:", description: "7"},
        {name:"Всего этажей:", description: "15"},
        {name:"Тип дома: ", description: "Монолитный"},
        {name:"Год постройки ", description: "2019"},
        {name:"Количество комнат: ", description: "2"},
        {name:"Общая площадь: ", description: "73 кв. м."},
        {name:"Жилая площадь: ", description: "56 кв. м."},
        {name:"Площадь кухни: ", description: "12 кв. м."},
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      additionalCharacteristicsTitle: "Дополнительные характеристики",
      additionalCharacteristics: [ 
        {name:"Этаж:", description: "7"},
        {name:"Всего этажей:", description: "15"},
        {name:"Тип дома: ", description: "Монолитный"},
        {name:"Год постройки ", description: "2019"},
        {name:"Количество комнат: ", description: "2"},
        {name:"Общая площадь: ", description: "73 кв. м."},
        {name:"Жилая площадь: ", description: "56 кв. м."},
        {name:"Площадь кухни: ", description: "12 кв. м."},
      ], 
      address: "ул. Воскресенская 12А", 
      metro: "м. Сокольники", 
      onLiked: false
    },
  ]
  return delayResponse(testCard);
}

export let useCardObject = defineStore("movieStore2", {
  state: () =>({
    movies:[
      {
        id: 1,
        img: ["VladaSteblina.png", "5206 1.png", "23184 1.png"],
        price: "3 900 000 ₽", 
        icon: "love.svg",
        characteristicsTitle: "Характеристики",
        characteristicsFaceCard: {
          roomsNumber: "2-ком. квартира",
          maxArea: "73 кв. м.",
          minNumberFloor: "2",
          maxNumberFloor: "15",
        },
        characteristics: [
          {name:"Этаж:", description: "2"},
          {name:"Всего этажей:", description: "15"},
          {name:"Тип дома: ", description: "Монолитный"},
          {name:"Год постройки ", description: "2019"},
          {name:"Количество комнат: ", description: "2"},
          {name:"Общая площадь: ", description: "73 кв. м."},
          {name:"Жилая площадь: ", description: "56 кв. м."},
          {name:"Площадь кухни: ", description: "12 кв. м."},
        ],
        descriptionTitle: "Описание",
        descriptionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        additionalCharacteristicsTitle: "Дополнительные характеристики",
        additionalCharacteristics: [
          {name:"Этаж:", description: "2"},
          {name:"Всего этажей:", description: "15"},
          {name:"Тип дома: ", description: "Монолитный"},
          {name:"Год постройки ", description: "2019"},
          {name:"Количество комнат: ", description: "2"},
          {name:"Общая площадь: ", description: "73 кв. м."},
          {name:"Жилая площадь: ", description: "56 кв. м."},
          {name:"Площадь кухни: ", description: "12 кв. м."},
        ],
        address: "ул. Воскресенская 12А", 
        metro: "м. Сокольники", 
        onLiked: false,
        isFinished: false,
      },
    ]
  })
}) 



export let useTodos = defineStore('todos', {
  state: () => ({
    /** @type {{ text: string, id: number, img: Array, price: string, icon: string, characteristicsTitle: string, characteristics: Array, descriptionText: string, additionalCharacteristicsTitle: string, additionalCharacteristics: Array, address: string, metro: string, onLiked: boolean, name: string, description: string, isFinished: boolean }[]} */
    todos: [
      {
        id: 0,
        img: ["VladaSteblina.png", "5206 1.png", "23184 1.png"],
        price: "32 900 000 ₽",
        icon: "love.svg",
        characteristicsTitle: "Характеристики",
        characteristicsFaceCard: {
          roomsNumber: "4-ком. квартира",
          maxArea: "666 кв. м.",
          minNumberFloor: "2",
          maxNumberFloor: "15",
        },
        characteristics: [
          {name:"Этаж:", description: "2"},
          {name:"Всего этажей:", description: "15"},
          {name:"Тип дома: ", description: "Монолитный"},
          {name:"Год постройки ", description: "2019"},
          {name:"Количество комнат: ", description: "2"},
          {name:"Общая площадь: ", description: "73 кв. м."},
          {name:"Жилая площадь: ", description: "56 кв. м."},
          {name:"Площадь кухни: ", description: "12 кв. м."},
        ],
        descriptionTitle: "Описание",
        descriptionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        additionalCharacteristicsTitle: "Дополнительные характеристики",
        additionalCharacteristics: [
          {name:"Этаж:", description: "2"},
          {name:"Всего этажей:", description: "15"},
          {name:"Тип дома: ", description: "Монолитный"},
          {name:"Год постройки ", description: "2019"},
          {name:"Количество комнат: ", description: "2"},
          {name:"Общая площадь: ", description: "73 кв. м."},
          {name:"Жилая площадь: ", description: "56 кв. м."},
          {name:"Площадь кухни: ", description: "12 кв. м."},
        ],
        address: "ул. Воскресенская 12А", 
        metro: "м. Сокольники", 
        onLiked: false,
        isFinished: false,
      },
      {
        id: 1,
        img: ["VladaSteblina.png", "5206 1.png", "23184 1.png"],
        price: "31 900 000 ₽", 
        icon: "love.svg",
        characteristicsTitle: "Характеристики",
        characteristicsFaceCard: {
          roomsNumber: "3-ком. квартира",
          maxArea: "777 кв. м.",
          minNumberFloor: "2",
          maxNumberFloor: "15",
        },
        characteristics: [
          {name:"Этаж:", description: "2"},
          {name:"Всего этажей:", description: "15"},
          {name:"Тип дома: ", description: "Монолитный"},
          {name:"Год постройки ", description: "2019"},
          {name:"Количество комнат: ", description: "2"},
          {name:"Общая площадь: ", description: "73 кв. м."},
          {name:"Жилая площадь: ", description: "56 кв. м."},
          {name:"Площадь кухни: ", description: "12 кв. м."},
        ],
        descriptionTitle: "Описание",
        descriptionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        additionalCharacteristicsTitle: "Дополнительные характеристики",
        additionalCharacteristics: [
          {name:"Этаж:", description: "2"},
          {name:"Всего этажей:", description: "15"},
          {name:"Тип дома: ", description: "Монолитный"},
          {name:"Год постройки ", description: "2019"},
          {name:"Количество комнат: ", description: "2"},
          {name:"Общая площадь: ", description: "73 кв. м."},
          {name:"Жилая площадь: ", description: "56 кв. м."},
          {name:"Площадь кухни: ", description: "12 кв. м."},
        ],
        address: "ул. Воскресенская 12А", 
        metro: "м. Сокольники", 
        onLiked: false,
        isFinished: false,
      },
      {
        id: 1,
        img: ["VladaSteblina.png", "5206 1.png", "23184 1.png"],
        price: "31 900 000 ₽", 
        icon: "love.svg",
        characteristicsTitle: "Характеристики",
        characteristicsFaceCard: {
          roomsNumber: "3-ком. квартира",
          maxArea: "777 кв. м.",
          minNumberFloor: "2",
          maxNumberFloor: "15",
        },
        characteristics: [
          {name:"Этаж:", description: "2"},
          {name:"Всего этажей:", description: "15"},
          {name:"Тип дома: ", description: "Монолитный"},
          {name:"Год постройки ", description: "2019"},
          {name:"Количество комнат: ", description: "2"},
          {name:"Общая площадь: ", description: "73 кв. м."},
          {name:"Жилая площадь: ", description: "56 кв. м."},
          {name:"Площадь кухни: ", description: "12 кв. м."},
        ],
        descriptionTitle: "Описание",
        descriptionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        additionalCharacteristicsTitle: "Дополнительные характеристики",
        additionalCharacteristics: [
          {name:"Этаж:", description: "2"},
          {name:"Всего этажей:", description: "15"},
          {name:"Тип дома: ", description: "Монолитный"},
          {name:"Год постройки ", description: "2019"},
          {name:"Количество комнат: ", description: "2"},
          {name:"Общая площадь: ", description: "73 кв. м."},
          {name:"Жилая площадь: ", description: "56 кв. м."},
          {name:"Площадь кухни: ", description: "12 кв. м."},
        ],
        address: "ул. Воскресенская 12А", 
        metro: "м. Сокольники", 
        onLiked: false,
        isFinished: false,
      },
      {
        id: 1,
        img: ["VladaSteblina.png", "5206 1.png", "23184 1.png"],
        price: "31 900 000 ₽", 
        icon: "love.svg",
        characteristicsTitle: "Характеристики",
        characteristicsFaceCard: {
          roomsNumber: "3-ком. квартира",
          maxArea: "777 кв. м.",
          minNumberFloor: "2",
          maxNumberFloor: "15",
        },
        characteristics: [
          {name:"Этаж:", description: "2"},
          {name:"Всего этажей:", description: "15"},
          {name:"Тип дома: ", description: "Монолитный"},
          {name:"Год постройки ", description: "2019"},
          {name:"Количество комнат: ", description: "2"},
          {name:"Общая площадь: ", description: "73 кв. м."},
          {name:"Жилая площадь: ", description: "56 кв. м."},
          {name:"Площадь кухни: ", description: "12 кв. м."},
        ],
        descriptionTitle: "Описание",
        descriptionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        additionalCharacteristicsTitle: "Дополнительные характеристики",
        additionalCharacteristics: [
          {name:"Этаж:", description: "2"},
          {name:"Всего этажей:", description: "15"},
          {name:"Тип дома: ", description: "Монолитный"},
          {name:"Год постройки ", description: "2019"},
          {name:"Количество комнат: ", description: "2"},
          {name:"Общая площадь: ", description: "73 кв. м."},
          {name:"Жилая площадь: ", description: "56 кв. м."},
          {name:"Площадь кухни: ", description: "12 кв. м."},
        ],
        address: "ул. Воскресенская 12А", 
        metro: "м. Сокольники", 
        onLiked: false,
        isFinished: false,
      },
      {
        id: 1,
        img: ["VladaSteblina.png", "5206 1.png", "23184 1.png"],
        price: "31 900 000 ₽", 
        icon: "love.svg",
        characteristicsTitle: "Характеристики",
        characteristicsFaceCard: {
          roomsNumber: "3-ком. квартира",
          maxArea: "777 кв. м.",
          minNumberFloor: "2",
          maxNumberFloor: "15",
        },
        characteristics: [
          {name:"Этаж:", description: "2"},
          {name:"Всего этажей:", description: "15"},
          {name:"Тип дома: ", description: "Монолитный"},
          {name:"Год постройки ", description: "2019"},
          {name:"Количество комнат: ", description: "2"},
          {name:"Общая площадь: ", description: "73 кв. м."},
          {name:"Жилая площадь: ", description: "56 кв. м."},
          {name:"Площадь кухни: ", description: "12 кв. м."},
        ],
        descriptionTitle: "Описание",
        descriptionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        additionalCharacteristicsTitle: "Дополнительные характеристики",
        additionalCharacteristics: [
          {name:"Этаж:", description: "2"},
          {name:"Всего этажей:", description: "15"},
          {name:"Тип дома: ", description: "Монолитный"},
          {name:"Год постройки ", description: "2019"},
          {name:"Количество комнат: ", description: "2"},
          {name:"Общая площадь: ", description: "73 кв. м."},
          {name:"Жилая площадь: ", description: "56 кв. м."},
          {name:"Площадь кухни: ", description: "12 кв. м."},
        ],
        address: "ул. Воскресенская 12А", 
        metro: "м. Сокольники", 
        onLiked: false,
        isFinished: false,
      },
    ],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // type will be automatically inferred to number
    nextId: 2,
    arrayBufferFilter: [],
    bufferCounterId: 0,
  }),
  getters: {
    finishedTodos(state) {
      // autocompletion! ✨
      return state.todos.filter((todo) => todo.isFinished)
    },
    // unfinishedTodos(state) {
    //   return state.todos.filter((todo) => !todo.isFinished)
    // },
    // TODO Начал разрабатывать фильтр
    // unfinishedTodos(state) {
    //   return state.todos.filter(function(todo) {
    //     if(todo.id==0 && todo.rooms=="2") {
    //       return !todo.isFinished;
    //     }
        
    //   })
    // },
    unfinishedTodos(state) {
      return state.todos.filter(function(todo) {
        // TODO 1 заменить первый элемент на "вторичку"
        // if(todo.id==0 && todo.rooms=="4-ком. квартира" && todo.price=="32 900 000 ₽" && todo.address=="ул. Воскресенская 12А") {
        if(todo.id == state.arrayBufferFilter[0] && todo.characteristicsFaceCard.roomsNumber==state.arrayBufferFilter[1] && todo.price == state.arrayBufferFilter[2] && todo.address==state.arrayBufferFilter[3]) {
          return !todo.isFinished;
        }
      })
    },
    /**
     * @returns {{ text: string, id: number, city: string, img: Array, price: string, icon: string, characteristicsTitle: string, characteristics: Array, descriptionText: string, additionalCharacteristicsTitle: string, additionalCharacteristics: Array, address: string, metro: string, onLiked: boolean, name: string, description: string, isFinished: boolean }[]}
     */
    filteredTodos() {
      if (this.filter === 'finished') {
        // call other getters with autocompletion ✨
        return this.finishedTodos
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos
      }
      return this.todos
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    // Поставить данные параметры , area, floor, minPrice, maxPrice, surname, name, patronymic, telephone, email
    addTodo(text, pCity, pAddress, pFloor, pMinPrice, pMaxPrice, pSurname, pName, pPatronymic, pTelephone, pEmail) {
      // you can directly mutate the state
      this.todos.push({ 
        text,
        // кастыль сверху
        id: this.nextId++,
        // TODO сделать динамическим
        img: ["VladaSteblina.png", "5206 1.png", "23184 1.png"],
        price: pMaxPrice,
        // TODO сделать динамическим
        onLiked: false,
        characteristics: [
          {name:"Этаж:", description: "2"},
          {name:"Всего этажей:", description: "15"},
          {name:"Тип дома: ", description: "Монолитный"},
          {name:"Год постройки ", description: "2019"},
          {name:"Количество комнат: ", description: "2"},
          {name:"Общая площадь: ", description: "73 кв. м."},
          {name:"Жилая площадь: ", description: "56 кв. м."},
          {name:"Площадь кухни: ", description: "12 кв. м."},
        ],
        additionalCharacteristics: [
          {name:"Этаж:", description: pFloor},
          {name:"Всего этажей:", description: "15"},
          {name:"Тип дома: ", description: "Монолитный"},
          {name:"Год пост ройки ", description: "2019"},
          {name:"Количество комнат: ", description: "2"},
          {name:"Общая площадь: ", description: "73 кв. м."},
          {name:"Жилая площадь: ", description: "56 кв. м."},
          {name:"Площадь кухни: ", description: "12 кв. м."},
        ],
        city: pCity,
        address: pAddress,
        descriptionTitle: "Описание",
        descriptionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        // TODO сделать динамическим
        rooms: "2",
        floor: pFloor,
        // TODO сделать динамическим
        state: "Хорошо",
        minPrice: pMinPrice,
        maxPrice: pMaxPrice,
        surname: pSurname,
        name: pName,
        patronymic: pPatronymic,
        telephone: pTelephone,
        email: pEmail,
        isFinished: false,
      })
    },
    addBufferNumber(element) {
      this.bufferCounterId = element;
      console.log(this.bufferCounterId);
    }
  },
})