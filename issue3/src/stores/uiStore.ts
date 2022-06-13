import { action, computed, makeObservable, observable } from 'mobx';
import { nanoid } from 'nanoid';
import EToastTypes from '../types/enums/EToastTypes';
import ToastNotification from '../types/ToastNotification';

class uiStore {
  @observable isLoading = false;

  @observable notifications = observable.map();

  @computed get toasts() {
    return [...this.notifications.values()];
  }

  constructor() {
    makeObservable(this);
  }

  addNotification(notification: ToastNotification) {
    this.notifications.set(notification.id, notification);
  }

  removeNotification(id: string | number) {
    this.notifications.delete(id);
  }

  @action setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  @action alert(message: string) {
    this.addNotification({
      id: nanoid(),
      type: EToastTypes.ALERT,
      message: message,
    });
  }

  @action warning(message: string) {
    this.addNotification({
      id: nanoid(),
      type: EToastTypes.WARNING,
      message: message,
    });
  }

  @action success(message: string) {
    this.addNotification({
      id: nanoid(),
      type: EToastTypes.SUCCESS,
      message: message,
    });
  }

  @action close(id: string | number) {
    this.removeNotification(id);
  }
}

export default new uiStore();
