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
    flush(()=>{
      expect(!!customElements.get("dj-card")).to.be.eql(true);
    });
  });
  test('check if the element have shadow root', () => {
    flush(()=>{
      expect(!!element.shadowRoot).to.be.eql(true);
    });
  });
  test('test attribute change', () => {
    flush(()=>{
      element.setAttribute('value','7');
      expect(element.getAttribute('value')).to.be.eql('7');
    });
    flush(()=>{
      let span = element.shadowRoot.querySelector('span');
      expect(span.innerHTML).to.be.eql('7');
    });
  });
  test('test select attribute and color change on click', () => {
    MockInteractions.tap(element);
    flush(()=>{
      let backgroundColor = window.getComputedStyle(element, null).getPropertyValue('background-color');
      expect(backgroundColor).to.be.eql("rgb(77, 199, 31)");
      expect(element.hasAttribute('selected')).to.be.eql(true);
    });
  });

  test('test unselected attribute and color change on click ', () => {
    MockInteractions.tap(element);
    flush(()=>{
      let backgroundColor = window.getComputedStyle(element, null).getPropertyValue('background-color');
      expect(backgroundColor).to.be.eql("rgb(77, 199, 31)");
      expect(element.hasAttribute('selected')).to.be.eql(true);
    });

    MockInteractions.tap(element);
    flush(()=>{
      let backgroundColor = window.getComputedStyle(element, null).getPropertyValue('background-color');
      expect(backgroundColor).to.be.eql("rgb(255, 255, 255)");
      expect(element.hasAttribute('selected')).to.be.eql(false);
    });
  });
});
