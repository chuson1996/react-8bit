import React, { Component, PropTypes } from 'react';
import eightBit from '8bit';

export default class Image8Bit extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    scaleFactor: PropTypes.number.isRequired,
    onLoad: PropTypes.func,
  };

  componentDidMount() {
    this._img = new Image();
    this._img.onload = () => {
      eightBit(this.canvas, this._img, this.props.scaleFactor);
      if (this.props.onLoad) this.props.onLoad(this._img);
    };
    this._img.src = this.props.src;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.src !== nextProps.src) {
      this._img = new Image();
      this._img.onload = () => {
        eightBit(this.canvas, this._img, this.props.scaleFactor);
        if (this.props.onLoad) this.props.onLoad(this._img);
      };
      this._img.src = nextProps.src;
      return;
    }
    if (this.props.scaleFactor !== nextProps.scaleFactor) {
      eightBit(this.canvas, this._img, nextProps.scaleFactor);
    }
  }

  render() {
    const { src, scaleFactor, ...others } = this.props;
    return (
      <canvas {...others} ref={(elem) => this.canvas = elem}></canvas>
    );
  }
}
