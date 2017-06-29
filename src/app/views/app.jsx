"use strict";
import React, {Component} from "react"
import PropTypes from "prop-types"

import {Wrapper} from "../../package"

import "./views.css";


export class App extends Component {

  static propTypes = {
    children: PropTypes.node
  };

  render() {
    const {children} = this.props;

    return (
      <Wrapper className="app">
        <div>
          {children}
        </div>
      </Wrapper>
    )
  }
}
