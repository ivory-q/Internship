import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Checkbox } from '../../components/Checkbox';
import { Dropdown } from '../../components/Dropdown';
import { Input } from '../../components/Input';
import { LoaderOverlay } from '../../components/LoaderOverlay';
import rootStore from '../../stores/rootStore';
import EStatuses from '../../types/enums/EStatuses';
import ICar from '../../types/ICar';
import ICity from '../../types/ICity';
import { IRequestFull } from '../../types/IRequest';
import './index.scss';

export const Draft = observer(({ store }: { store: typeof rootStore }) => {
  const { draftId } = useParams();
  const navigate = useNavigate();

  const [draft, setDraft] = useState<IRequestFull | null>(null);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

  useEffect(() => {
    if (draftId) {
      store.draftStore.clear();
      store.uiStore.setLoading(true);
      store.requestStore
        .loadRequest(parseInt(draftId), { acceptCached: true })
        .then((draft) => {
          store.draftStore.setDraft(draft);
          return draft;
        })
        .then((draft) => {
          if (draft.status.code == EStatuses.PROCESSING) {
            const loadInterval = setInterval(() => {
              const status = store.requestStore.getStatus(draft.id);
              if (status != EStatuses.PROCESSING) {
                store.uiStore.setLoading(false);
                clearInterval(intervalId);
              }
            }, 3000);
            setIntervalId(loadInterval);
          } else {
            store.uiStore.setLoading(false);
          }
          return draft;
        })
        .then(setDraft);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [
    draftId,
    intervalId,
    store.draftStore,
    store.requestStore,
    store.uiStore,
  ]);

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
          value={store.draftStore.lastName}
          onInput={action((e) => {
            store.draftStore.setLastName((e.target as HTMLInputElement).value);
          })}
        />
        <Input
          placeholder='Имя'
          value={store.draftStore.firstName}
          onInput={action((e) => {
            store.draftStore.setFirstName((e.target as HTMLInputElement).value);
          })}
        />
        <Input
          placeholder='Отчество'
          value={store.draftStore.secondName}
          onInput={action((e) => {
            store.draftStore.setSecondName(
              (e.target as HTMLInputElement).value
            );
          })}
        />
        <Input
          placeholder='Email'
          type='email'
          value={store.draftStore.email}
          onInput={action((e) => {
            store.draftStore.setEmail((e.target as HTMLInputElement).value);
          })}
        />
        <div className='form__group'>
          <Input
            placeholder='Водительское удостоверение'
            value={store.draftStore.driverLicense}
            onInput={action((e) => {
              store.draftStore.setDriverLicense(
                (e.target as HTMLInputElement).value
              );
            })}
          />
          <Dropdown
            title='Город'
            value={store.draftStore.city}
            list={store.dictionaryStore.cities}
            onChange={action((item) => {
              store.draftStore.setCity(item as ICity);
            })}
          />
        </div>
        <div className='form__group'>
          <Dropdown
            title='Марка автомобиля'
            value={store.draftStore.brandObj}
            list={store.dictionaryStore.brands}
            onChange={action((item) => {
              store.dictionaryStore.updateModels(item.name);
              store.draftStore.clearCar();
              store.draftStore.setBrand(item.name || '');
            })}
          />
          <Dropdown
            title='Модель'
            value={store.draftStore.car}
            list={store.dictionaryStore.models}
            onChange={action((item) => {
              store.draftStore.setCar(item as ICar);
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
            store.draftStore.save(draft?.id).then(() => {
              navigate('/');
            });
          }}
        >
          Сохранить
        </Button>
        <Button
          onClick={() => {
            store.draftStore.register(draft?.id).then(() => {
              navigate('/');
            });
          }}
        >
          Отправить на регистрацию
        </Button>
      </div>
      <LoaderOverlay show={store.uiStore.isLoading} />
    </div>
  );
});
