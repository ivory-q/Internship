import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import rootStore from '../../stores/rootStore';
import EStatuses from '../../types/enums/EStatuses';
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
        .loadRequest(parseInt(reqId), { acceptCached: true })
        .then((req) => {
          if (!req) throw 'Ошибка получения заявки';
          return req;
        })
        .then((req) => {
          (req.status.code == EStatuses.DRAFT ||
            req.status.code == EStatuses.PROCESSING) &&
            navigate(`/draft/${req.id}`);
          return req;
        })
        .then((req) => {
          setRequest(req);
        })
        .catch((error) => {
          store.uiStore.alert(`${error}`);
        });
    }
  }, [navigate, reqId, store.requestStore]);

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
          <div className='request__actions'>
            <Button onClick={() => navigate('/')}>К списку заявок</Button>
          </div>
        </div>
      )}
    </>
  );
});
