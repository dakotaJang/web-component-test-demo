/**
* @license
* Copyright (c) 2018 Dakota Jang. All rights reserved.
* This code may only be used under the MIT license found
* at https://github.com/dakotaJang/web-component-test-demo/blob/master/LICENSE
* Author: Dakota Jang @dakotaJang
*/

/**
 * 1. app takes the entire screen of the browser
 * 2. app takes the user interactions:
 *    a. click
 *    b. keystrokes
 *    c. events from children
 * 3. app contains basic ui elements:
 *    a. main screen (dj-board)
 *    b. menu
 */

import "../dj-board/dj-board"
import "../dj-card/dj-card";

class DjApp extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode: "open"})
    this.shadowRoot.innerHTML = `
      <style>
        :host{
          display:block;
          position: absolute;
          background-color: rgba(0,0,0,.1);
          height: 100%;
          width: 100%;
          text-align: center;
        }
      </style>
      <slot name="main"></slot>
      <slot name="menu"></slot>
      <dj-board></dj-board>
    `
  }
}
customElements.define("dj-app",DjApp);
