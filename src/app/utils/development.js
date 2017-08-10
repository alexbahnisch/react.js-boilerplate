"use strict"; // @flow


export function appendChild(element: Element): void {
  if (!!document) {
    if (!!document.body) {
      document.body.appendChild(element);
    }
  }
}


export function createElement(id: string, tagName: string = "div"): Element {
  let element = document.getElementById(id);

  if (!element) {
    element = document.createElement(tagName);
    element.setAttribute("id", id);
    appendChild(element)
  }

  return element;
}
