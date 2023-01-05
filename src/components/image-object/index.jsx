import { makeClassName } from "$/helpers";

export const ImageObject = (props) => (
  <object
    alt=""
    role="presentation"
    className={makeClassName(props.className, ["no-click", !props.onClick])}
    data={props.icon}
    type="image/svg+xml"
    onLoad={(event) => {
      if (props.svgStyle && event.target.contentDocument) {
        const svg = event.target.contentDocument.firstElementChild;
        svg.style = props.svgStyle;
        svg.onclick = props.onClick;
      }

      props.onload?.(event);
    }}
  >
    <img
      onClick={props.onClick}
      className={props.className}
      src={props.icon}
      role="presentation"
      alt=""
    />
  </object>
);
