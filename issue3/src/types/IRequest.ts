import { EStatuses } from './enums/EStatuses';

export interface IRequestFull extends IRequestBody {
  id: number;
  status: {
    code: EStatuses;
  };
  createDate: string;
}

export interface IRequestBody {
  person: {
    lastName: string;
    firstName: string;
    secondName: string;
    driverLicense: string;
    email: string;
  };
  auto: {
    brand: string;
    model: {
      id: number;
      name: string;
    };
  };
  city: {
    code: string;
    name: string;
  };
}
