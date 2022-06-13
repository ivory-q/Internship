import EToastTypes from './enums/EToastTypes';

type ToastNotification = {
  id: string | number;
  type: EToastTypes;
  message?: string;
};
export default ToastNotification;
