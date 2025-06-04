import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ContactFormComponent extends Component {
  @tracked name = '';
  @tracked message = '';

  whatsappNumber = '918610606873';

  @action
  updateName(event) {
    this.name = event.target.value;
  }

  @action
  updateMessage(event) {
    this.message = event.target.value;
  }

  @action
  sendMessage() {
    if (!this.name.trim() || !this.message.trim()) {
      alert('Please fill in both name and message.');
      return;
    }

    let text = `Name: ${this.name}\n\n${this.message}`;
    let encodedText = encodeURIComponent(text);
    let url = `https://wa.me/${this.whatsappNumber}?text=${encodedText}`;

    window.open(url, '_blank');

    this.args.onClose?.();
  }
}
