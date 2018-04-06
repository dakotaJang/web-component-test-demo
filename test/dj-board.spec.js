/**
 * @license
 * Copyright (c) 2018 Dakota Jang. All rights reserved.
 * This code may only be used under the MIT license found
 * at https://github.com/dakotaJang/web-component-test-demo/blob/master/LICENSE
 * Author: Dakota Jang @dakotaJang
 */
suite('dj-board', () => {
  var element;
  setup(function() {
    element = document.createElement("dj-board");
  });
  test('is defined in customElements',() => {
    assert.equal(!!customElements.get("dj-board"), true);
  });
  test('check if the element have shadow root', () => {
    assert.equal(!!element.shadowRoot, true);
  });
  test('add card', () => {
    let card = document.createElement("dj-card");
    element.appendChild(card);
    let slotElements = element.shadowRoot.querySelector('slot').assignedElements();
    assert.equal(slotElements.length,1);
  });
  test('add more cards', () => {
    let numberOfCards = Math.ceil(Math.random()*10);
    for (let i = 0; i < numberOfCards; i++) {
      let card = document.createElement("dj-card");
      element.appendChild(card);
    }
    let slotElements = element.shadowRoot.querySelector('slot').assignedElements();
    assert.equal(slotElements.length, numberOfCards);
  });
});
