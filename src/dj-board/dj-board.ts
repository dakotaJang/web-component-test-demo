/**
 * @license
 * Copyright (c) 2018 Dakota Jang. All rights reserved.
 * This code may only be used under the MIT license found
 * at https://github.com/dakotaJang/web-component-test-demo/blob/master/LICENSE
 * Author: Dakota Jang @dakotaJang
 */

/**
 * 1. board can hold card elements
 * 2. can add new cards to the board
 * 3. can remove existing cards on the board
 */

class DjBoard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.shadowRoot.innerHTML = `
    <style>
      :host{
        display:block;
        position: absolute;
        background-color: #795548;
        height: 60%;
        width: 80%;
        left: calc(50% - 40%);
        top: calc(50% - 30%);
        border: 5px solid black;
        border-radius: 15px;
      }
    </style>
    <slot></slot>
    `;
  }
}
customElements.define("dj-board", DjBoard);
