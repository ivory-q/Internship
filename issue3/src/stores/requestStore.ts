import { action, computed, makeObservable, observable } from 'mobx';
import { Requests } from '../services/http.service';
import { IRequestBody } from '../types/IRequest';
import uiStore from './uiStore';

class requestStore {
  @observable isLoading = false;
  @observable requestsRegistry = observable.map();

  @computed get requests() {
    return [...this.requestsRegistry.values()];
  }

  constructor() {
    makeObservable(this);
  }

  clear() {
    this.requestsRegistry.clear();
  }

  getRequest(id: number) {
    return this.requestsRegistry.get(id);
  }

  @action loadRequests() {
    this.isLoading = true;
    return Requests.getAll()
      .then(
        action((requests) => {
          this.clear();
          requests.forEach((request) =>
            this.requestsRegistry.set(request.id, request)
          );
        })
      )
      .catch((error) => {
        uiStore.alert(`${error.response.status} ${error.response.data.errors}`);
      })
      .finally(
        action(() => {
          this.isLoading = false;
        })
      );
  }

  @action loadRequest(id: number, { acceptCached = false } = {}) {
    if (acceptCached) {
      const request = this.getRequest(id);
      if (request) return Promise.resolve(request);
    }
    this.isLoading = true;
    return Requests.getOne(id)
      .then(
        action((request) => {
          this.requestsRegistry.set(request.id, request);
          return request;
        })
      )
      .catch((error) => {
        uiStore.alert(`${error.response.status} Ошибка получения заявки`);
      })
      .finally(
        action(() => {
          this.isLoading = false;
        })
      );
  }

  @action async createRequest(request: IRequestBody) {
    const newRequest = await Requests.create(request);
    this.requestsRegistry.set(newRequest.id, newRequest);
    return newRequest;
  }

  @action async registerRequest(request: IRequestBody) {
    const newRequest = await Requests.register(request);
    this.requestsRegistry.set(newRequest.id, newRequest);
    return newRequest;
  }

  @action async updateRequest(id: number, request: IRequestBody) {
    const newRequest = await Requests.update(id, request);
    this.requestsRegistry.set(newRequest.id, newRequest);
    return newRequest;
  }

  @action async checkProcessing() {
    const isProcessing = await Requests.checkProcessing();
    return isProcessing;
  }

  @action getStatus(id: number) {
    const request = this.requestsRegistry.get(id);
    return request.status.code;
  }
}

export default new requestStore();
