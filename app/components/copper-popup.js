import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CopperPopupComponent extends Component {
  @tracked selectedItem = 'copper-wires';

  @action
  showImageFor(item) {
    console.log('Selected:', item);
    this.selectedItem = item;
  }

  getImagePath(item) {
    switch (item) {
      case 'copper-wires':
        return '/assets/copper-wires.jpg';
      case 'rods':
        return '/assets/rods.jpg';
      case 'cathodes':
        return '/assets/cathodes.jpg';
      case 'coils':
        return '/assets/coils.jpg';
      case 'copper-spare-parts':
        return '/assets/copper-spare-parts.jpg';
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
