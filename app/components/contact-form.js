import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ContactFormComponent extends Component {
  @tracked name = '';
  @tracked address = '';
  @tracked message = '';

  whatsappNumber = '919786758203'; 

  @action
  updateName(event) {
    this.name = event.target.value;
  }

  @action
  updateAddress(event) {
    this.address = event.target.value;
  }

  @action
  updateMessage(event) {
    this.message = event.target.value;
  }

  @action
  sendMessage() {
    if (!this.name.trim() || !this.address.trim() || !this.message.trim()) {
      alert('Please fill in all fields: name, address, and message.');
      return;
    }

    const text = `Name: ${this.name}\nAddress: ${this.address}\n\n${this.message}`;
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${this.whatsappNumber}?text=${encodedText}`;

    alert('You’ll be redirected to WhatsApp. Please tap "Send" in the app.');
    window.open(url, '_blank');

    this.args.onClose?.();
  }
}
