import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import rootStore from '../../stores/rootStore';
import { IRequestFull } from '../../types/IRequest';
import getIcon from '../../utils/getIcon';
import ISOtoDateString from '../../utils/ISOtoDateString';
import './index.scss';

export const Request = observer(({ store }: { store: typeof rootStore }) => {
  const navigate = useNavigate();
  const { reqId } = useParams();
  if (!reqId) navigate('/');

  const [request, setRequest] = useState<IRequestFull | null>(null);

  useEffect(() => {
    if (reqId) {
      store.requestStore
        .loadRequest(2, { acceptCached: true })
        .then(setRequest);
    }
  }, []);

  return (
    <>
      {request && (
        <div className='request__container'>
          <div className='request__header'>
            <div className='request__icon'>
              <img src={getIcon(request.status.code)} alt='icon draft' />
            </div>
            <h1 className='request__name'>Заявка №{request.id}</h1>
          </div>
          <div className='request__content'>
            <p className='request__info'>
              Автомобиль: {request.auto.brand} {request.auto.model.name}
            </p>
            <p className='request__info'>
              Дата заявки: {ISOtoDateString(request.createDate)}
            </p>
          </div>
          <div className='requset__actions'>
            <Button onClick={() => navigate('/')}>К списку заявок</Button>
          </div>
        </div>
      )}
    </>
  );
});
