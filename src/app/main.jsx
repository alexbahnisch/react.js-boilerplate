"use strict";
import React from "react";
import ReactDom from "react-dom";

import {App} from "./views/app"
import {addLiveReloadSource, createElement} from "./utils/development"


addLiveReloadSource();
ReactDom.render(
  <App>
    Hello World!!
  </App>,
  createElement("react.js-boilerplate")
);
