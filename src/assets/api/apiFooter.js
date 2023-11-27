import {delayResponse} from '@/assets/utils/utilsPromis'

export async function fetchFooterData() {
    let number = {     
        array1: ["Меню","Купить","Продать","Сдать","Снять","Без агента"],
        array2: ["Наша компания","О компании","Вакансии","Отзывы","Контакты"],
        array3: ["Услуги", "Ремонт", "Дизайн",],
        array4: ["Сотрудничество", "Сотрудничество", "Сдать в управление",],
      };
        return delayResponse(number);
}
