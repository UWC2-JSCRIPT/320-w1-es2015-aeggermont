import HTMLElement from './HTMLElement';

class DivElement extends HTMLElement {
  constructor(content) {
    super(content);
    this.tag = 'div';
    this.content = content;
  }

  render() {
    const element = `<${this.tag}>${this.content}</${this.tag}>`;

    return element;
  }
}

export default DivElement;
