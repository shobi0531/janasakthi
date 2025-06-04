import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BrassPopupComponent extends Component {
  @tracked selectedItem = 'brass-coils';
  @tracked isContactPopupOpen = false;
  @tracked selectedNumber = null;
  @tracked selectedTitle = null;

  @action
  showImageFor(item) {
    console.log('Selected:', item);
    this.selectedItem = item;
  }

  getImagePath(item) {
    switch (item) {
      case 'brass-coils':
        return '/assets/brass-coils.jpg';
      case 'brass-ingots':
        return '/assets/brass-ingots.jpg';
      case 'brass-spare':
        return '/assets/brass-spare.jpg';
      default:
        return null;
    }
  }

  @action
  closePopup() {
    this.selectedItem = null;
    this.isContactPopupOpen = false;
    this.selectedNumber = null;
    this.selectedTitle = null;
    this.args.onClose?.();
  }

  @action
  handleBackdropClick(event) {
    if (event.target.classList.contains('modal-backdrop')) {
      this.closePopup();
    }
  }

  @action
  stopPropagation(event) {
    event.stopPropagation();
  }

  @action
  contactUs() {
    this.selectedItem = null;
    this.selectedNumber = '919566521289'; // Put your brass WhatsApp number here
    this.selectedTitle = 'Contact for Brass Products';
    this.isContactPopupOpen = true;
  }
}
