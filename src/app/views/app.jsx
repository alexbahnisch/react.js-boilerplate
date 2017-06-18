"use strict";
import React, {Component} from "react"
import PropTypes from "prop-types"

// import {Wrapper} from "../../package"
// const Package = window.Package;

const Wrapper = Package.Wrapper;

import "./views.css";


export class App extends Component {

  //noinspection JSUnusedGlobalSymbols
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
