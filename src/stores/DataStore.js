import { observable, action } from "mobx";

class DataStore {
  @observable name = "Peto";
}

var singleton = new DataStore();
export default singleton;
