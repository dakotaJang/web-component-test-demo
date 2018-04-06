/**
 * @license
 * Copyright (c) 2018 Dakota Jang. All rights reserved.
 * This code may only be used under the MIT license found
 * at https://github.com/dakotaJang/web-component-test-demo/blob/master/LICENSE
 * Author: Dakota Jang @dakotaJang
 */
/**
 * 1. card can hold a value
 * 2. card takes the user interactions:
 *    a. mouse events
 *    b. key events
 */
import { djRender as render, djTemplate as html } from "../../helper/dj-template";
const template = (value) => html`
<style>
  :host{
    --card-height: 82px;
    --card-width: 64px;
    display: block;
    font-family: Arial;
    font-size: 32px;
    background-color: white;
    border: 5px solid black;
    border-radius: 15px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    line-height: 50px;
    padding: 12px;
    position: absolute;
    text-align: center;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
    height: var(--card-height);
    width: var(--card-width);
    left: calc(50% - var(--card-width)/2);
    top: calc(50% - var(--card-height)/2);
  }
  :host(:hover){
    cursor: move;
  }
  :host([selected]){
    background-color: #4dc71f;
  }
</style>
<span>${value ? value : ""}</span>
`;

class DjCard extends HTMLElement {
  private position: any;
  get value() {
    return this.getAttribute("value");
  }
  set value(val: string) {
    if (this.value === val) {return; }
    this.setAttribute("value", val);
  }

  get selected() {
    return this.hasAttribute("selected");
  }
  set selected(val: boolean) {
    if (this.selected === val) {return; }
    if (val) {
      this.setAttribute("selected", "");
    } else {
      this.removeAttribute("selected");
    }
  }

  get moved() {
    return this.hasAttribute("moved");
  }
  set moved(val: boolean) {
    if (this.moved === val) {return; }
    if (val) {
      this.setAttribute("moved", "");
    } else {
      this.removeAttribute("moved");
    }
  }

  static get observedAttributes(): string[] {return ["value"]; }

  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this._addEventListeners();
    this._render();
  }

  public attributeChangedCallback(name, oldValue, newValue) {
    let needRender = false;
    switch (name) {
      case "value":
        this.value = newValue;
        needRender = true;
        break;
      default:
        break;
    }
    if (needRender) {
      this._render();
    }
  }

  private _addEventListeners() {
    this.addEventListener("mousedown", this._mouseDownHandler);
    this.addEventListener("mousemove", this._mouseMoveHandler);
    this.addEventListener("mouseup", this._mouseUpHandler);
  }

  private _mouseDownHandler(e: MouseEvent) {
    this.selected = !this.selected;
    if (!this.moved) {
      this.position = {
        initMouseX: e.x,
        initMouseY: e.y,
        left: this.offsetLeft,
        top: this.offsetTop,
      };
    }
  }
  private _mouseMoveHandler(e: MouseEvent) {
    if (this.selected) {
      const dx: number = e.x - this.position.initMouseX;
      const dy: number = e.y - this.position.initMouseY;
      this.moved = true;
      this.style.transform = `translate(${dx}px, ${dy}px)`;
    }
  }
  private _mouseUpHandler(e: MouseEvent) {
    if (this.moved) {
      this.selected = false;
      const dx: number = e.x - this.position.initMouseX;
      const dy: number = e.y - this.position.initMouseY;
      this.style.left = `${this.offsetLeft + dx}px`;
      this.style.top = `${this.offsetTop + dy}px`;
      this.style.transform = "none";
    } else {
      this.selected = true;
    }
    this.moved = false;
  }

  private _render() {
    render(template(this.value), this.shadowRoot);
  }
}
customElements.define("dj-card", DjCard);
