import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BrassPopupComponent extends Component {
  @tracked selectedItem = 'brass-coils';

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
