import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Request } from '../../components/Request';
import rootStore from '../../stores/rootStore';
import { IRequestFull } from '../../types/IRequest';
import './index.scss';

export const List = observer(({ store }: { store: typeof rootStore }) => {
  const navigate = useNavigate();

  return (
    <div className='home__container'>
      <div className='home__header'>
        <h1 className='home__title'>Список заявок</h1>
        <p className='home__subtitle'>Ваши заявки на покупку автомобилей</p>
      </div>
      <div className='home__requests'>
        <>
          {store.requestStore.requests.map(
            ({ id, status, createDate, auto }: IRequestFull) => {
              return (
                <Request
                  key={id}
                  id={id}
                  status={status.code}
                  createDate={createDate}
                  auto={auto}
                />
              );
            }
          )}
        </>
      </div>
      <div className='home__actions'>
        <Button
          onClick={() => {
            navigate('/draft');
          }}
        >
          Создать заявку
        </Button>
        <Button
          onClick={() => {
            store.uiStore.success('Тестовое уведомление');
          }}
        >
          Уведомление
        </Button>
      </div>
    </div>
  );
});
