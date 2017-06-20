"use strict";

export function addLiveReloadSource() {
  if (process.env.NODE_ENV !== "production") {
    let liveReload = document.createElement("script");
    liveReload.src = "http://localhost:35729/livereload.js";
    document.body.appendChild(liveReload);
  }
}
