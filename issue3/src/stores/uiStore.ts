import { action, makeObservable, observable } from 'mobx';

class uiStore {
  @observable isLoading = true;

  constructor() {
    makeObservable(this);
  }

  @action setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }
}

export default new uiStore();
