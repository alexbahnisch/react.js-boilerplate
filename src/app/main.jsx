"use strict";
import React from "react";
import ReactDom from "react-dom";

import {App} from "./views/app"
import {createElement} from "./utils/development"
import "./main.css";


ReactDom.render(
  <App>
    Hello World!!
  </App>,
  createElement("react.js-boilerplate")
);
