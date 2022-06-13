import Joi from 'joi';
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from 'mobx';
import EStatuses from '../types/enums/EStatuses';
import ICar from '../types/ICar';
import ICity from '../types/ICity';
import { IRequestBody, IRequestFull } from '../types/IRequest';
import Nullable from '../types/Nullable';
import requestStore from './requestStore';

interface IValidationErrors<T> {
  [K: string]: T;
}

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

  @observable checkbox = false;

  @observable validation_errors: IValidationErrors<string> = observable.object({
    lastName: '',
    firstName: '',
    secondName: '',
    email: '',
    driverLicense: '',
    city: '',
    brand: '',
    car: '',
  });

  validation_messages = {
    required: `Это поле обязательно`,
    cyrillic: `Поле может содержать только русские буквы`,
    email: `Поле должно содержать корректный E-mail адрес`,
    driverLicense: `Формат поля: 9999 999999`,
  };

  validation_schemas: IValidationErrors<Joi.Schema> = {
    lastName: Joi.string()
      .required()
      .pattern(/[а-яёА-ЯЁ]/)
      .messages({
        'string.empty': this.validation_messages.required,
        'string.pattern.base': this.validation_messages.cyrillic,
      }),
    firstName: Joi.string()
      .required()
      .pattern(/[а-яёА-ЯЁ]/)
      .messages({
        'string.empty': this.validation_messages.required,
        'string.pattern.base': this.validation_messages.cyrillic,
      }),
    secondName: Joi.string()
      .empty('')
      .pattern(/[а-яёА-ЯЁ]/)
      .messages({
        'string.pattern.base': this.validation_messages.cyrillic,
      }),
    email: Joi.string()
      .empty('')
      .email({ tlds: { allow: false } })
      .messages({
        'string.email': this.validation_messages.email,
      }),
    driverLicense: Joi.string()
      .required()
      .pattern(/^[0-9]{4}\s[0-9]{6}$/)
      .messages({
        'string.empty': this.validation_messages.required,
        'string.pattern.base': this.validation_messages.driverLicense,
      }),
    city: Joi.object<ICity>()
      .keys({
        code: Joi.string(),
        name: Joi.string(),
      })
      .required()
      .messages({
        'string.base': this.validation_messages.required,
      }),
    brand: Joi.string().required().messages({
      'string.empty': this.validation_messages.required,
    }),
    car: Joi.object<ICar>()
      .keys({
        id: Joi.number(),
        name: Joi.string(),
      })
      .required()
      .messages({
        'number.base': this.validation_messages.required,
      }),
    checkbox: Joi.boolean().invalid(false).messages({
      'any.invalid': this.validation_messages.required,
    }),
  };

  @computed get validate() {
    this.validateAll();

    const isErrors = Object.values(this.validation_errors).every((value) => {
      if (value === '') {
        return true;
      }
      return false;
    });
    return isErrors;
  }

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

  validateAll() {
    this.validateField('lastName', this.lastName);
    this.validateField('firstName', this.firstName);
    this.validateField('secondName', this.secondName);
    this.validateField('driverLicense', this.driverLicense);
    this.validateField('email', this.email);
    this.validateField('city', this.city);
    this.validateField('brand', this.brand);
    this.validateField('car', this.car);
    this.validateField('checkbox', this.checkbox);
  }

  validateField(field: string, value: any) {
    const { error } = this.validation_schemas[field].validate(value);
    runInAction(() => {
      error
        ? (this.validation_errors[field] = error.message)
        : (this.validation_errors[field] = '');
    });

    return;
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
    this.checkbox = false;
    this.validation_errors = {
      lastName: '',
      firstName: '',
      secondName: '',
      driverLicense: '',
      email: '',
      brand: '',
      car: '',
      city: '',
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
    this.validateField('lastName', value);

    this.lastName = value;
  }

  @action setFirstName(value: string) {
    this.validateField('firstName', value);

    this.firstName = value;
  }

  @action setSecondName(value: string) {
    this.validateField('secondName', value);

    this.secondName = value;
  }

  @action setDriverLicense(value: string) {
    this.validateField('driverLicense', value);

    this.driverLicense = value;
  }

  @action setEmail(value: string) {
    this.validateField('email', value);

    this.email = value;
  }

  @action setBrand(value: string) {
    this.validateField('brand', value);
    this.brand = value;
    this.clearCar();
  }

  @action setCar(value: ICar) {
    this.validateField('car', value);
    this.car = value;
  }

  @action setCity(value: ICity) {
    this.validateField('city', value);
    this.city = value;
  }

  @action setCheckbox(value: boolean) {
    this.validateField('checkbox', value);
    this.checkbox = value;
  }

  @action async save(id?: number) {
    const request: IRequestBody = this.getNewRequest();
    if (id) return requestStore.updateRequest(id, request);

    return requestStore.createRequest(request);
  }

  @action async register(id?: number) {
    if (await requestStore.checkProcessing()) return;
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
