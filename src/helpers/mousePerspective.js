import throttle from "lodash/throttle";
const updateThrottled = throttle(update, 112, { leading: true });

export const mouse = {
  _x: 0,
  _y: 0,
  x: 0,
  y: 0,
  target: null,
  updatePosition(e) {
    this.x = e.clientX - this._x;
    this.y = (e.clientY - this._y) * -1;
  },
  setOrigin(origin) {
    this._x = origin.offsetLeft + Math.floor(origin.offsetWidth / 2);
    this._y = origin.offsetTop + Math.floor(origin.offsetHeight / 2);
  },
};

export function onMouseEnterHandler(e) {
  updateThrottled(e, mouse.target);
}

export function onMouseLeaveHandler() {
  mouse.target.style = "";
}

export function onMouseMoveHandler(e) {
  updateThrottled(e, mouse.target);
}

function update(e, target) {
  mouse.updatePosition(e);
  updateTransformStyle(
    mouse.target,
    (mouse.y / target.height.animVal.value / 2).toFixed(2),
    -(mouse.x / target.width.animVal.value / 2).toFixed(2)
  );
}

function updateTransformStyle(target, x, y) {
  var style = `rotateX(${x}deg) rotateY(${y}deg)`;
  target.style.transform = style;
  target.style.webkitTransform = style;
  target.style.mozTransform = style;
  target.style.msTransform = style;
  target.style.oTransform = style;
}
