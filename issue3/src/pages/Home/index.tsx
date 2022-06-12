import IconDraft from '@assets/icons/draft.svg';
import IconProcessing from '@assets/icons/processing.svg';
import IconSuccess from '@assets/icons/success.svg';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { UnstyledLink } from '../../components/UnstyledLink';
import './index.scss';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='home__container'>
      <div className='home__header'>
        <h1 className='home__title'>Список заявок</h1>
        <p className='home__subtitle'>Ваши заявки на покупку автомобилей</p>
      </div>
      <div className='requests'>
        <UnstyledLink to={'/request/1'} className='requests__item'>
          <div className='requests__icon'>
            <img src={IconDraft} alt='icon draft' />
          </div>
          <div className='requests__content'>
            <p className='requests__title'>
              Заявка №1 на автомобиль VOLKSWAGEN Поло
            </p>
            <span className='requests__status'>Статус: черновик</span>
            <span className='requests__date '>Дата: 12.07.2021</span>
          </div>
        </UnstyledLink>
        <UnstyledLink to={'/request/1'} className='requests__item'>
          <div className='requests__icon'>
            <img src={IconSuccess} alt='icon success' />
          </div>
          <div className='requests__content'>
            <p className='requests__title'>
              Заявка №1 на автомобиль VOLKSWAGEN Поло
            </p>
            <span className='requests__status'>Статус: черновик</span>
            <span className='requests__date '>Дата: 12.07.2021</span>
          </div>
        </UnstyledLink>
        <UnstyledLink to={'/request/1'} className='requests__item'>
          <div className='requests__icon'>
            <img src={IconProcessing} alt='icon processing' />
          </div>
          <div className='requests__content'>
            <p className='requests__title'>
              Заявка №1 на автомобиль VOLKSWAGEN Поло
            </p>
            <span className='requests__status'>Статус: черновик</span>
            <span className='requests__date '>Дата: 12.07.2021</span>
          </div>
        </UnstyledLink>
      </div>
      <div className='home__actions'>
        <Button onClick={() => navigate('/form')}>Создать заявку</Button>
      </div>
    </div>
  );
};
