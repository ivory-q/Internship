import { action, makeObservable, observable } from 'mobx';
import { Dictionaries } from '../services/http.service';
import EDictionaries from '../types/enums/EDictionaries';

class dictionaryStore {
  @observable brands: { name: string }[] = [];
  @observable models = [];

  @observable cities = [];
  auto = [];

  constructor() {
    makeObservable(this);
  }

  @action updateModels(brand: any) {
    this.models = this.auto[brand];
  }

  @action loadBrands() {
    this.brands = Object.keys(this.auto).map((key) => {
      return { name: key };
    });
  }

  @action async loadDictionaries() {
    await Dictionaries.getDict(EDictionaries.DICT_AUTO).then(
      action((autoDict) => {
        this.auto = autoDict;
      })
    );

    await Dictionaries.getDict(EDictionaries.DICT_CITIES).then(
      action((citiesDict) => {
        this.cities = citiesDict.items;
      })
    );
  }
}

export default new dictionaryStore();
