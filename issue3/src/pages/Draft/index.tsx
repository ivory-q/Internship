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
  const [regDisabled, setRegDisabled] = useState<boolean>(true);

  useEffect(() => {
    let intervalId: NodeJS.Timer;

    store.draftStore.clear();
    store.requestStore.checkProcessing().then(setRegDisabled);
    if (draftId) {
      store.uiStore.setLoading(true);
      store.requestStore
        .loadRequest(parseInt(draftId), { acceptCached: true })
        .then((draft) => {
          store.draftStore.setDraft(draft);
          return draft;
        })
        .then((draft) => {
          if (draft.status.code == EStatuses.PROCESSING) {
            store.uiStore.warning('Заявка обрабатывается');
            intervalId = setInterval(() => {
              console.log('tick');
              const status = store.requestStore.getStatus(draft.id);
              if (status != EStatuses.PROCESSING) {
                store.uiStore.setLoading(false);
                clearInterval(intervalId);
              }
            }, 3000);
          } else {
            store.uiStore.setLoading(false);
          }
          return draft;
        })
        .then(setDraft)
        .catch((error) => {
          store.uiStore.alert(
            `${error.response.status} ${error.response.data.errors}`
          );
        });
    }
    return () => {
      clearInterval(intervalId);
    };
  }, []);

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
          error={store.draftStore.validation_errors.lastName}
          onInput={action((e) => {
            store.draftStore.setLastName((e.target as HTMLInputElement).value);
          })}
        />
        <Input
          placeholder='Имя'
          value={store.draftStore.firstName}
          error={store.draftStore.validation_errors.firstName}
          onInput={action((e) => {
            store.draftStore.setFirstName((e.target as HTMLInputElement).value);
          })}
        />
        <Input
          placeholder='Отчество'
          value={store.draftStore.secondName}
          error={store.draftStore.validation_errors.secondName}
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
          error={store.draftStore.validation_errors.email}
          onInput={action((e) => {
            store.draftStore.setEmail((e.target as HTMLInputElement).value);
          })}
        />
        <div className='form__group'>
          <Input
            placeholder='Водительское удостоверение'
            value={store.draftStore.driverLicense}
            error={store.draftStore.validation_errors.driverLicense}
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
            error={store.draftStore.validation_errors.city}
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
            error={store.draftStore.validation_errors.brand}
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
            error={store.draftStore.validation_errors.car}
            onChange={action((item) => {
              store.draftStore.setCar(item as ICar);
            })}
          />
        </div>
        <Checkbox
          checked={store.draftStore.checkbox}
          error={store.draftStore.validation_errors.checkbox}
          onChange={(checked) => store.draftStore.setCheckbox(checked)}
        >
          Согласен на обработку персональных данных
        </Checkbox>
      </div>
      <div className='form__actions'>
        <Button
          onClick={() => {
            store.draftStore.validate &&
              store.draftStore.save(draft?.id).then(() => {
                navigate('/');
                store.uiStore.success('Успешно сохранено');
              });
          }}
        >
          Сохранить
        </Button>
        <Button
          disabled={regDisabled}
          onClick={() => {
            store.draftStore.validate &&
              store.draftStore.register(draft?.id).then(() => {
                navigate('/');
                store.uiStore.success('Успешно зарегистрировано');
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
