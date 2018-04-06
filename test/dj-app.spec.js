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
    assert.equal(!!customElements.get("dj-app"), true);
  });
  test('check if the element have shadow root', () => {
    assert.equal(!!element.shadowRoot, true);
  });
  test('check if the component fills the browser screen', () => {
    flush(()=>{
      assert.equal(element.offsetHeight,window.innerHeight);
      assert.equal(element.offsetWidth,window.innerWidth);
      assert.equal(element.clientLeft,0);
      assert.equal(element.offsetTop,0);
    });
  });
});
