import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CopperPopupComponent extends Component {
  @tracked selectedItem = 'copper-wires';
  @tracked isContactPopupOpen = false;
  @tracked selectedNumber = null;  // To store WhatsApp number
  @tracked selectedTitle = null;   // To store title for contact form

  @action
  showImageFor(item) {
    this.selectedItem = item;
  }

  getImagePath(item) {
    switch (item) {
      case 'copper-wires': return '/assets/copper-wires.jpg';
      case 'rods': return '/assets/rods.jpg';
      case 'cathodes': return '/assets/cathodes.jpg';
      case 'coils': return '/assets/coils.jpg';
      case 'copper-spare-parts': return '/assets/copper-spare-parts.jpg';
      default: return null;
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
  openContactPopup() {
    this.selectedItem = null;
    this.selectedNumber = '919786758203'; // <-- Put the copper WhatsApp number here
    this.selectedTitle = 'Contact for Copper Products'; // <-- Put the copper product title here
    this.isContactPopupOpen = true;
  }
}
