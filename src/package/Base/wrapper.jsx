"use strict";

import React, {Children, PureComponent} from "react"
import PropTypes from "prop-types"

import "./base.css"


export class Wrapper extends PureComponent {

  //noinspection JSUnusedGlobalSymbols
  static propTypes = {
    children: PropTypes.object,
    className: PropTypes.string,
    style: PropTypes.object
  };

  concatClassNames(classNames) {
    let className = `wrapper ${this.props.className} ${classNames}`;
    return className || undefined;
  }

  mergeStyles(...styles) {
    return Object.assign({}, this.props.style, ...styles);
  }

  render() {
    const {className, style, ...other} = this.props.children.props;

    return React.cloneElement(Children.only(this.props.children),
      {
        className: this.concatClassNames(className),
        style: this.mergeStyles(style),
        ...other
      }
    )
  }
}
