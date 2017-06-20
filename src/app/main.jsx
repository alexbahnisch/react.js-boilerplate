"use strict";

import React from "react";
import ReactDom from "react-dom";

import {App} from "./views/app"
import {addLiveReloadSource} from "./utils/development"


addLiveReloadSource();
ReactDom.render(
  <App>
    Hello World!!
  </App>,
  document.getElementById("reactjs-boilerplate")
);
