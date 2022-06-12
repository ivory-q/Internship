import EStatuses from '../types/enums/EStatuses';
import { IRequestFull } from '../types/IRequest';

const requests: IRequestFull[] = [
  {
    id: 1,
    status: {
      code: EStatuses.PROCESSING,
    },
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
    createDate: '2021-06-16T10:13:52.894052Z',
  },
  {
    id: 2,
    status: {
      code: EStatuses.DRAFT,
    },
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
    createDate: '2021-06-16T10:13:52.894052Z',
  },
];

export default requests;