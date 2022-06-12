import { Button } from '../../components/Button';
import { Checkbox } from '../../components/Checkbox';
import { Dropdown } from '../../components/Dropdown';
import { Input } from '../../components/Input';
import './index.scss';

const location = [
  {
    id: 0,
    title: 'New York',
    selected: false,
    key: 'location',
  },
  {
    id: 1,
    title: 'Dublin',
    selected: false,
    key: 'location',
  },
  {
    id: 2,
    title: 'California',
    selected: false,
    key: 'location',
  },
  {
    id: 3,
    title: 'Istanbul',
    selected: false,
    key: 'location',
  },
  {
    id: 4,
    title: 'Izmir',
    selected: false,
    key: 'location',
  },
  {
    id: 5,
    title: 'Oslo',
    selected: false,
    key: 'location',
  },
];

export const Form = () => {
  return (
    <div className='form__container'>
      <div className='form__header'>
        <h1 className='form__title'>Оставить заявку</h1>
        <p className='form__subtitle'>Заполните данные формы</p>
      </div>
      <div className='form__content'>
        <Input placeholder='Фамилия' />
        <Input placeholder='Имя' />
        <Input placeholder='Отчество' />
        <Input placeholder='Email' type='email' />
        <div className='form__group'>
          <Dropdown
            title='Водительское удостоверение'
            list={location}
            onChange={(item) => console.log(item)}
          />
          <Dropdown
            title='Город'
            list={location}
            onChange={(item) => console.log(item)}
          />
        </div>
        <div className='form__group'>
          <Dropdown
            title='Марка автомобиля'
            list={location}
            onChange={(item) => console.log(item)}
          />
          <Dropdown
            title='Модель'
            list={location}
            onChange={(item) => console.log(item)}
          />
        </div>
        <Checkbox onChange={(checked) => console.log(checked)}>
          Согласен на обработку персональных данных
        </Checkbox>
      </div>
      <div className='form__actions'>
        <Button>Сохранить</Button>
        <Button>Отправить на регистрацию</Button>
      </div>
    </div>
  );
};
