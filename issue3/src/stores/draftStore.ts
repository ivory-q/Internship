import { action, computed, makeObservable, observable } from 'mobx';
import EStatuses from '../types/enums/EStatuses';
import ICar from '../types/ICar';
import ICity from '../types/ICity';
import { IRequestBody, IRequestFull } from '../types/IRequest';
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

  @computed get brandObj() {
    return { name: this.brand };
  }

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

  @action.bound setDraft(request: IRequestBody) {
    this.lastName = request.person.lastName;
    this.firstName = request.person.firstName;
    this.secondName = request.person.secondName;

    this.driverLicense = request.person.driverLicense;
    this.email = request.person.email;

    this.brand = request.auto.brand;
    this.car = request.auto.model;
    this.city = request.city;
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

  @action save(id?: number) {
    const request: IRequestBody = this.getNewRequest();
    if (id) return requestStore.updateRequest(id, request);

    return requestStore.createRequest(request);
  }

  @action register(id?: number) {
    const request: IRequestBody = this.getNewRequest();
    const fullRequest: IRequestBody & Partial<IRequestFull> = {
      ...request,
      status: {
        code: EStatuses.PROCESSING,
      },
    };
    if (id) return requestStore.updateRequest(id, fullRequest);

    return requestStore.registerRequest(request);
  }
}

export default new draftStore();
