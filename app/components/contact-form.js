import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ContactFormComponent extends Component {
  @tracked name = '';
  @tracked address = '';
  @tracked phone = '';      // new tracked property
  @tracked message = '';

  get whatsappNumber() {
    return this.args.whatsappNumber; // fallback if not passed
  }

  @action
  updateName(event) {
    this.name = event.target.value;
  }

  @action
  updateAddress(event) {
    this.address = event.target.value;
  }
  
  @action
  updatePhone(event) {
    this.phone = event.target.value;
  }

  @action
  updateMessage(event) {
    this.message = event.target.value;
  }

  @action
  sendMessage() {
    if (!this.name.trim() || !this.address.trim() || !this.phone.trim() || !this.message.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    let text = `Name: ${this.name}\nAddress: ${this.address}\nPhone: ${this.phone}\n\n${this.message}`;
    let encodedText = encodeURIComponent(text);
    let url = `https://wa.me/${this.whatsappNumber}?text=${encodedText}`;

    window.open(url, '_blank');
    this.args.onClose?.();
  }
}
