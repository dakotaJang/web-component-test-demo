/**
 * @license
 * Copyright (c) 2018 Dakota Jang. All rights reserved.
 * This code may only be used under the MIT license found
 * at https://github.com/dakotaJang/web-component-test-demo/blob/master/LICENSE
 * Author: Dakota Jang @dakotaJang
 */
export function djTemplate(templateStrings: TemplateStringsArray, ...args: any[]) {
  const template: HTMLTemplateElement = document.createElement("template");
  for (let i = 0; i < templateStrings.length - 1; i++) {
    const arg: any = args[i];
    let argString: string;
    switch (typeof(arg)) {
      case "string":
        argString = arg;
        break;
      case "object":
        if (Array.isArray(arg)) {
          argString = arg.join("");
        } else {
          argString = arg ? arg.toString() : "";
        }
        break;
      default:
        argString = arg ? arg.toString() : "";
        break;
    }
    template.innerHTML += templateStrings[i] + argString;
  }
  template.innerHTML += templateStrings[templateStrings.length - 1];
  return template;
}

export function djRender(template: HTMLTemplateElement, target: ShadowRoot) {
  if (!target.childNodes.length) {
    target.appendChild(template.content.cloneNode(true));
  } else {
    while (target.childNodes.length) {
      target.removeChild(target.firstChild);
    }
    target.appendChild(template.content.cloneNode(true));
  }
}
