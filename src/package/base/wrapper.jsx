"use strict";
import React, {Children, PureComponent} from "react"
import PropTypes from "prop-types"

import "./styles.css"


export class Wrapper extends PureComponent {

  // noinspection JSUnusedGlobalSymbols
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object
  };

  // noinspection JSUnusedGlobalSymbols
  static defaultProps = {
    className: "wrapper"
  };

  concatClassNames(classNames) {
    return [this.props.className, classNames].filter((className) => (className !== undefined)).join(" ") || undefined
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
