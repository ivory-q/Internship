import dictionaryStore from './dictionaryStore';
import draftStore from './draftStore';
import requestStore from './requestStore';

class rootStore {
  dictionaryStore: typeof dictionaryStore;
  requestStore: typeof requestStore;
  formStore: typeof draftStore;
  constructor() {
    this.dictionaryStore = dictionaryStore;
    this.requestStore = requestStore;
    this.formStore = draftStore;
  }
}
export default new rootStore();
