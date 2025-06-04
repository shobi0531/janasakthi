import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AlluminiumPopupComponent extends Component {
  @tracked selectedItem = null;

  @action
  showImageFor(item) {
    console.log('Selected:', item);
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
  closePopup() {
    this.selectedItem = null;
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
