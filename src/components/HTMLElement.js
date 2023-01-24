// import React from 'react';
// import ReactDOM from 'react-dom';

class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    const element = `<${this.tag}>${this.content}</${this.tag}>`;

    return element;
  }
}

export default HTMLElement;
