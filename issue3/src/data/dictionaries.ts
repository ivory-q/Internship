import ICar from '../types/ICar';
import ICity from '../types/ICity';
import IDictionary from '../types/IDictionary';

const DICT_AUTO: IDictionary<ICar> = {
  LADA: [
    {
      id: 1,
      name: 'Гранта',
    },
    {
      id: 2,
      name: 'Калина',
    },
    {
      id: 3,
      name: 'Веста',
    },
  ],
  KIA: [
    {
      id: 8,
      name: 'Рио',
    },
    {
      id: 9,
      name: 'Селтос',
    },
    {
      id: 10,
      name: 'Церато',
    },
    {
      id: 11,
      name: 'Соренто',
    },
  ],
  VOLKSWAGEN: [
    {
      id: 4,
      name: 'Поло',
    },
    {
      id: 5,
      name: 'Джетта',
    },
    {
      id: 6,
      name: 'Тигуан',
    },
    {
      id: 7,
      name: 'Поло',
    },
  ],
};

const DICT_CITIES: IDictionary<ICity> = {
  items: [
    {
      code: 'MSK',
      name: 'Москва',
    },
    {
      code: 'VLG',
      name: 'Волгоград',
    },
    {
      code: 'TMB',
      name: 'Тамбов',
    },
    {
      code: 'BLG',
      name: 'Белгород',
    },
    {
      code: 'VRG',
      name: 'Воронеж',
    },
    {
      code: 'LPC',
      name: 'Липецк',
    },
  ],
};

const dictionaries = { DICT_AUTO, DICT_CITIES };

export default dictionaries;
