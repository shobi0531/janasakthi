import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AluminiumPopupComponent extends Component {
  @tracked selectedItem = 'alluminium-coils';
  @tracked isContactPopupOpen = false;
  @tracked selectedNumber = null;
  @tracked selectedTitle = null;

  @action
  showImageFor(item) {
    this.selectedItem = item;
  }

  getImagePath(item) {
    switch (item) {
      case 'alluminium-coils':
        return '/assets/alluminium-coils.jpg';
      case 'alluminium-ingots':
        return '/assets/alluminium-ingots.jpg';
      case 'alluminium-scrap':
        return '/assets/alluminium-scrap.jpg';
      default:
        return null;
    }
  }

  @action
  openContactPopup() {
    this.selectedItem = null;
    this.selectedNumber = '919003921870';
    this.selectedTitle = 'Contact for Aluminium Products';
    this.isContactPopupOpen = true;
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
}
