import ExternalIcon from "../icons/external-link.svg?react";

export const External = (props) => (
  <ExternalIcon
    className={props.className}
    style={props.style}
    role={props.role}
  />
);

export default External;
