import IconSuccess from '@assets/icons/success.svg';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import './index.scss';

export const Request = () => {
  const navigate = useNavigate();

  return (
    <div className='request__container'>
      <div className='request__header'>
        <div className='request__icon'>
          <img src={IconSuccess} alt='icon draft' />
        </div>
        <h1 className='request__name'>Заявка №2</h1>
      </div>
      <div className='request__content'>
        <p className='request__info'>Автомобиль: LADA Гранта</p>
        <p className='request__info'>Дата заявки: 22.11.2021</p>
      </div>
      <div className='requset__actions'>
        <Button onClick={() => navigate('/')}>К списку заявок</Button>
      </div>
    </div>
  );
};
