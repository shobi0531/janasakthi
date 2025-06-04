import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CoreValuesComponent extends Component {
  @tracked showAlluminiumModal = false;
  @tracked showCopperModal = false;
  @tracked showBrassModal = false;
  @tracked showContactForm = false;

  @action
  openContactForm() {
    this.showContactForm = true;
  }

  @action
  toggleContactForm() {
    this.showContactForm = !this.showContactForm;
  }

  @action
  stopPropagation(event) {
    event.stopPropagation();
  }



  @action
  toggleAlluminiumModal() {
    console.log('Parent: toggleAlluminiumModal called');
    this.showAlluminiumModal = !this.showAlluminiumModal;
    console.log(this.showAlluminiumModal);
  }
  @action
  toggleCopperModal() {
    console.log('Parent: toggleCopperModal called');
    this.showCopperModal = !this.showCopperModal;
    console.log(this.showCopperModal);
  }

  @action
  toggleBrassModal() {
    console.log('Parent: toggleBrassModal called');
    this.showBrassModal = !this.showBrassModal;
    console.log(this.showBrassModal);
  }
}
