import {delayResponse} from '@/assets/utils/utilsPromis'

export async function fetchFooterData() {
    let FooterData = [    
        ["Меню","Купить","Продать","Сдать","Снять","Без агента"],
        ["Наша компания","О компании","Вакансии","Отзывы","Контакты"],
        ["Услуги", "Ремонт", "Дизайн"],
        ["Сотрудничество", "Сотрудничество", "Сдать в управление",],
    ];
    
        return delayResponse(FooterData);
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