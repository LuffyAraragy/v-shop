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