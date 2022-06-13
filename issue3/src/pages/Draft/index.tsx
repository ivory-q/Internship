import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Checkbox } from '../../components/Checkbox';
import { Dropdown } from '../../components/Dropdown';
import { Input } from '../../components/Input';
import rootStore from '../../stores/rootStore';
import ICar from '../../types/ICar';
import ICity from '../../types/ICity';
import './index.scss';

export const Draft = observer(({ store }: { store: typeof rootStore }) => {
  const navigate = useNavigate();
  return (
    <div className='form__container'>
      <div className='form__header'>
        <h1 className='form__title'>Оставить заявку</h1>
        <p className='form__subtitle'>Заполните данные формы</p>
      </div>
      <div className='form__content'>
        <Input
          type='text'
          placeholder='Фамилия'
          value={store.formStore.lastName}
          onInput={action((e) => {
            store.formStore.setLastName((e.target as HTMLInputElement).value);
          })}
        />
        <Input
          placeholder='Имя'
          value={store.formStore.firstName}
          onInput={action((e) => {
            store.formStore.setFirstName((e.target as HTMLInputElement).value);
          })}
        />
        <Input
          placeholder='Отчество'
          value={store.formStore.secondName}
          onInput={action((e) => {
            store.formStore.setSecondName((e.target as HTMLInputElement).value);
          })}
        />
        <Input
          placeholder='Email'
          type='email'
          value={store.formStore.email}
          onInput={action((e) => {
            store.formStore.setEmail((e.target as HTMLInputElement).value);
          })}
        />
        <div className='form__group'>
          <Input
            placeholder='Водительское удостоверение'
            value={store.formStore.driverLicense}
            onInput={action((e) => {
              store.formStore.setDriverLicense(
                (e.target as HTMLInputElement).value
              );
            })}
          />
          <Dropdown
            title='Город'
            list={store.dictionaryStore.cities}
            onChange={action((item) => {
              store.formStore.setCity(item as ICity);
            })}
          />
        </div>
        <div className='form__group'>
          <Dropdown
            title='Марка автомобиля'
            list={store.dictionaryStore.brands}
            onChange={action((item) => {
              store.dictionaryStore.updateModels(item.name);
              store.formStore.clearCar();
              store.formStore.setBrand(item.name || '');
            })}
          />
          <Dropdown
            title='Модель'
            value={store.formStore.car}
            list={store.dictionaryStore.models}
            onChange={action((item) => {
              store.formStore.setCar(item as ICar);
            })}
          />
        </div>
        <Checkbox onChange={(checked) => console.log(checked)}>
          Согласен на обработку персональных данных
        </Checkbox>
      </div>
      <div className='form__actions'>
        <Button
          onClick={() => {
            store.formStore.save().then(() => {
              store.formStore.clear();
              navigate('/');
            });
          }}
        >
          Сохранить
        </Button>
        <Button
          onClick={() => {
            store.formStore.register().then(() => {
              store.formStore.clear();
              navigate('/');
            });
          }}
        >
          Отправить на регистрацию
        </Button>
      </div>
    </div>
  );
});
