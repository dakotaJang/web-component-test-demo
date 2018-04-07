/**
 * @license
 * Copyright (c) 2018 Dakota Jang. All rights reserved.
 * This code may only be used under the MIT license found
 * at https://github.com/dakotaJang/web-component-test-demo/blob/master/LICENSE
 * Author: Dakota Jang @dakotaJang
 */
suite('dj-app', () => {
  var element;
  setup(function() {
    element = document.createElement("dj-app");
  });
  test('is defined in customElements',() => {
    flush(()=>{
      expect(!!customElements.get("dj-app")).to.be.eql(true);
    });
  });
  test('check if the element have shadow root', () => {
    flush(()=>{
      expect(!!element.shadowRoot).to.be.eql(true);
    });
  });
  test('check if the component fills the browser screen', () => {
    flush(()=>{
      expect(element.offsetHeight).to.be.eql(window.innerHeight);
      expect(element.offsetWidth).to.be.eql(window.innerWidth);
      expect(element.clientLeft).to.be.eql(0);
      expect(element.offsetTop).to.be.eql(0);
    });
  });
});
