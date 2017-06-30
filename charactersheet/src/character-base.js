import { noView } from 'aurelia-framework';

@noView()
class CharacterBase {
  constructor() {
    if (this.getClassData === undefined) {
      throw new TypeError('Must override getClassData method!');
    }
  }
}

class DruidMoon extends CharacterBase {
  getClassData() {
    return {

    };
  }
}

class DruidLand extends CharacterBase {
  getClassData() {
    return {

    };
  }
}
