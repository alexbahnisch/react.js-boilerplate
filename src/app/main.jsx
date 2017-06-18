"use strict";

import React from "react";
import ReactDom from "react-dom";

import {App} from "./views/app"

ReactDom.render(
  <App>
    "Hello World!"
  </App>,
  document.getElementById("reactjs-boilerplate")
);
