"use strict";
import React, {Component} from "react"
import PropTypes from "prop-types"

import {Wrapper} from "../../package"

import "./views.css";


export class App extends Component {

  static propTypes = {
    children: PropTypes.any
  };

  render() {
    const {children, className, ...other} = this.props;

    return (
      <Wrapper>
        <div className={!!className ? "app " + className : "app"} {...other}>
          {children}
        </div>
      </Wrapper>
    )
  }
}
