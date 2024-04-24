import { Component } from "react";
import throttle from "lodash/throttle";

export class Angulator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      target: this.props.children,
    };
  }

  mousemoveHandler = throttle(
    (e) => {
      const { clientX, clientY, target } = e;
      this.setState(
        { x: clientX - this.state._x, y: clientY - this.state._y },
        () => {
          this.updateTransformStyle(
            target.firstElementChild,
            (
              this.state.y /
              target.firstElementChild.height.animVal.value /
              2
            ).toFixed(2),
            -(
              this.state.x /
              target.firstElementChild.width.animVal.value /
              2
            ).toFixed(2)
          );
        }
      );
      // this.update(clientHeight);
    },
    222,
    { trailing: false }
  );
  mouseleaveHandler = throttle(
    (e) => {
      const { firstElementChild } = e.target;
      firstElementChild.style.transform = "rotateX(0) rotateY(0)";
    },
    222,
    { trailing: false }
  );

  // update() {
  // console.log(target);
  // const target = e.target.firstElementChild;
  // this.updateTransformStyle(target, (this.state.y / target.height.animVal.value / 1.5).toFixed(2), -(this.state.x / target.width.animVal.value / 1.25).toFixed(2));
  // };
  // update = throttle(e => {
  //   const target = e.target.firstElementChild;
  //   this.setState({ x: e.clientX - this.state._x, y: (e.clientY - this.state._y) });
  //   this.updateTransformStyle(target, (this.state.y / target.height.animVal.value / 1.5).toFixed(2), -(this.state.x / target.width.animVal.value / 1.25).toFixed(2));
  // }, 111);

  updateTransformStyle(target, x, y) {
    target.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
  }

  render() {
    return (
      <div
        role="presentation"
        className="angulator overlay no-select"
        onMouseMove={this.mousemoveHandler}
        onMouseLeave={this.mouseleaveHandler}
      >
        {this.props.children}
      </div>
    );
  }
}
