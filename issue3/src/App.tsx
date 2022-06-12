import { useEffect } from 'react';
import { Dictionaries, Requests } from './services/http.service';
import EDictionaries from './types/enums/EDictionaries';

export const App = () => {
  useEffect(() => {
    Requests.getAll().then(console.log);
    Requests.getOne(2).then(console.log);
    Requests.getStatus(2).then(console.log);
    Requests.checkProcessing().then(console.log);
    Requests.create({
      person: {
        lastName: 'Иванов',
        firstName: 'Иван',
        secondName: 'Иванович',
        driverLicense: '2345 123456',
        email: 'test@test.ru',
      },
      auto: {
        brand: 'LADA',
        model: {
          id: 1,
          name: 'Гранта',
        },
      },
      city: {
        code: 'MSK',
        name: 'Москва',
      },
    }).then(console.log);
    Dictionaries.getDict(EDictionaries.DICT_AUTO).then(console.log);
  }, []);

  return <div>App</div>;
};
