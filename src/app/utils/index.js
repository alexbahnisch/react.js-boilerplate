"use strict";


export function appendChild(element) {
  if (!!document) {
    if (!!document.body) {
      document.body.appendChild(element);
    }
  }
}


export function createElement(id, tagName = "div") {
  let element = document.getElementById(id);

  if (!element) {
    element = document.createElement(tagName);
    element.setAttribute("id", id);
    appendChild(element)
  }

  return element;
}


export function decorator(cls) {
  return cls
}
