"use strict";
import React, {Component} from "react"
import PropTypes from "prop-types"

import {Wrapper} from "../../package"


export class App extends Component {

  // noinspection JSUnusedGlobalSymbols
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    const {children} = this.props;

    return (
      <Wrapper className="app">
        <div>
          {children}
          <style>
            {`.app {color: rgb(100, 100, 100);}`}
          </style>
        </div>
      </Wrapper>
    )
  }
}
