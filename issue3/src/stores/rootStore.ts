import dictionaryStore from './dictionaryStore';
import draftStore from './draftStore';
import requestStore from './requestStore';
import uiStore from './uiStore';

class rootStore {
  dictionaryStore: typeof dictionaryStore;
  requestStore: typeof requestStore;
  draftStore: typeof draftStore;
  uiStore: typeof uiStore;
  constructor() {
    this.dictionaryStore = dictionaryStore;
    this.requestStore = requestStore;
    this.draftStore = draftStore;
    this.uiStore = uiStore;
  }
}
export default new rootStore();
