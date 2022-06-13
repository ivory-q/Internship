import EStatuses from '../../types/enums/EStatuses';
import getIcon from '../../utils/getIcon';
import ISOtoDateString from '../../utils/ISOtoDateString';
import { UnstyledLink } from '../UnstyledLink';
import './index.scss';

interface IRequestProps {
  id: number;
  status: EStatuses;
  createDate: string;
  auto: {
    brand: string;
    model: {
      id: number;
      name: string;
    };
  };
}

export const Request = ({ id, status, createDate, auto }: IRequestProps) => {
  return (
    <UnstyledLink to={`/request/${id}`} className='requests__item'>
      <div className='requests__icon'>
        <img src={getIcon(status)} alt='icon processing' />
      </div>
      <div className='requests__content'>
        <p className='requests__title'>
          <>
            Заявка №1 на автомобиль {auto.brand} {auto.model.name}
          </>
        </p>
        <span className='requests__status'>Статус: {status}</span>
        <span className='requests__date '>
          Дата: {ISOtoDateString(createDate)}
        </span>
      </div>
    </UnstyledLink>
  );
};
