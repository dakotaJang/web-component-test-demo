/**
 * @license
 * Copyright (c) 2018 Dakota Jang. All rights reserved.
 * This code may only be used under the MIT license found
 * at https://github.com/dakotaJang/web-component-test-demo/blob/master/LICENSE
 * Author: Dakota Jang @dakotaJang
 */
suite('dj-card', () => {
  var element;
  setup(function() {
    element = document.createElement("dj-card");
  });
  test('is defined in customElements',() => {
    assert.equal(!!customElements.get("dj-card"), true);
  });
  test('check if the element have shadow root', () => {
    assert.equal(!!element.shadowRoot, true);
  });
  test('test attribute change', () => {
    element.setAttribute('value','7');
    assert.equal(element.getAttribute('value'), '7');

    let span = element.shadowRoot.querySelector('span');
    assert.equal(span.innerHTML, '7');
  });
  test('test select attribute and color change on click', () => {
    MockInteractions.tap(element);
    flush(()=>{
      let backgroundColor = window.getComputedStyle(element, null).getPropertyValue('background-color');
      assert.equal(backgroundColor,"rgb(77, 199, 31)");
      assert.equal(element.hasAttribute('selected'),true);
    });
  });

  test('test unselected attribute and color change on click ', () => {
    MockInteractions.tap(element);
    flush(()=>{
      let backgroundColor = window.getComputedStyle(element, null).getPropertyValue('background-color');
      assert.equal(backgroundColor,"rgb(77, 199, 31)");
      assert.equal(element.hasAttribute('selected'),true);
    });

    MockInteractions.tap(element);
    flush(()=>{
      let backgroundColor = window.getComputedStyle(element, null).getPropertyValue('background-color');
      assert.equal(backgroundColor,"rgb(255, 255, 255)");
      assert.equal(element.hasAttribute('selected'),false);
    });
  });
});
