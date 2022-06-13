import ToastNotification from '../../types/ToastNotification';
import { getToastType } from '../../utils/getToastType';
import './index.scss';

interface IToasterProps {
  toasts: ToastNotification[];
  onClick: (id: string | number) => void;
}

export const Toaster = ({ toasts, onClick }: IToasterProps) => {
  return (
    <>
      <div className='toaster__container'>
        {toasts.map((toast) => {
          console.log(toast);
          return (
            <div
              onClick={() => {
                onClick(toast.id);
              }}
              key={toast.id}
              className={`toaster__body ${getToastType(
                'toaster__body',
                toast.type
              )}`}
            >
              {toast.message}
            </div>
          );
        })}
      </div>
    </>
  );
};
