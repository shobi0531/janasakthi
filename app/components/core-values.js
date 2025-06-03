import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CoreValuesComponent extends Component {
  @tracked showCopperModal = false;

  @action
  toggleCopperModal() {
    console.log('Parent: toggleCopperModal called');
    this.showCopperModal = !this.showCopperModal;
    console.log(this.showCopperModal);
  }
}
