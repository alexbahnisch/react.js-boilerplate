"use strict";
import React, {Component} from "react"
import PropTypes from "prop-types"

import {decorator} from "../utils/development";
import styles from "./app.css"


@decorator
export class App extends Component {

  // noinspection JSUnusedGlobalSymbols
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    const {children} = this.props;

    console.log(children);

    return [
      <div className={styles.app} key={0}>
        {children}
      </div>
    ]
  }
}
