/**
 * @license
 * Copyright (c) 2018 Dakota Jang. All rights reserved.
 * This code may only be used under the MIT license found
 * at https://github.com/dakotaJang/web-component-test-demo/blob/master/LICENSE
 * Author: Dakota Jang @dakotaJang
 */
suite('polymer-test', () => {
  test('test Array.prototype.map', () => {
    assert.equal(!![].map, true);
  });
  test('test Array.prototype.includes', () => {
    assert.equal(!![].includes, true);
  });
  test('test Array.prototype.every', () => {
    assert.equal(!![].every, true);
  });
  test('test document', () => {
    assert.equal(!!document, true);
  });
  test('test window', () => {
    assert.equal(!!window, true);
  });
  test('test body', () => {
    assert.equal(!!document.getElementsByTagName('body')[0], true);
  });
});
