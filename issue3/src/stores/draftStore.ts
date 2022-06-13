import { action, makeObservable, observable } from 'mobx';
import ICar from '../types/ICar';
import ICity from '../types/ICity';
import { IRequestBody } from '../types/IRequest';
import Nullable from '../types/Nullable';
import requestStore from './requestStore';

class draftStore {
  @observable lastName = '';
  @observable firstName = '';
  @observable secondName = '';

  @observable driverLicense = '';
  @observable email = '';

  @observable brand = '';
  @observable car: Nullable<ICar> = {
    id: null,
    name: null,
  };

  @observable city: Nullable<ICity> = {
    code: null,
    name: null,
  };

  constructor() {
    makeObservable(this);
  }

  getNewRequest(): IRequestBody {
    return {
      person: {
        lastName: this.lastName,
        firstName: this.firstName,
        secondName: this.secondName,
        driverLicense: this.driverLicense,
        email: this.email,
      },
      auto: {
        brand: this.brand,
        model: {
          id: this.car.id as number,
          name: this.car.name as string,
        },
      },
      city: {
        code: this.city.code as string,
        name: this.city.name as string,
      },
    };
  }

  @action clear() {
    this.lastName = '';
    this.firstName = '';
    this.secondName = '';

    this.driverLicense = '';
    this.email = '';

    this.brand = '';
    this.car = {
      id: null,
      name: null,
    };
    this.city = {
      code: null,
      name: null,
    };
  }

  @action clearCar() {
    this.car = {
      id: null,
      name: null,
    };
  }

  @action setLastName(value: string) {
    this.lastName = value;
  }

  @action setFirstName(value: string) {
    this.firstName = value;
  }

  @action setSecondName(value: string) {
    this.secondName = value;
  }

  @action setDriverLicense(value: string) {
    this.driverLicense = value;
  }

  @action setEmail(value: string) {
    this.email = value;
  }

  @action setBrand(value: string) {
    this.brand = value;
    this.clearCar();
  }

  @action setCar(value: ICar) {
    this.car = value;
  }

  @action setCity(value: ICity) {
    this.city = value;
  }

  @action save() {
    const request: IRequestBody = this.getNewRequest();

    return requestStore.createRequest(request);
  }

  @action register() {
    const request: IRequestBody = this.getNewRequest();

    return requestStore.registerRequest(request);
  }
}

export default new draftStore();
