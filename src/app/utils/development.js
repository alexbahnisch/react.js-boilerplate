"use strict";

export function addLiveReloadSource() {
  if (process.env.NODE_ENV !== "production") {
    let liveReload = document.createElement("script");
    liveReload.setAttribute("src", "http://localhost:35729/livereload.js");
    document.body.appendChild(liveReload);
  }
}


export function createElement(id, tagName = "div") {
  let element = document.getElementById(id);

  if (!element) {
    element = document.createElement(tagName);
    element.setAttribute("id", id);
    document.body.appendChild(element);
  }

  return element;
}
