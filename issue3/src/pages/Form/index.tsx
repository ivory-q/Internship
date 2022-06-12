import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import './index.scss';

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
        <Input placeholder='Email' />
        <div className='form__group'>
          <Input placeholder='Водительское удостоверение' />
          <Input placeholder='Город' />
        </div>
        <div className='form__group'>
          <Input placeholder='Марка автомобиля' />
          <Input placeholder='Модель' />
        </div>
        <input type='checkbox' name='conf' id='conf' />
        <label htmlFor='conf'>Согласен на обработку персональных данных</label>
      </div>
      <div className='form__actions'>
        <Button>Сохранить</Button>
        <Button>Отправить на регистрацию</Button>
      </div>
    </div>
  );
};
