import { ReactComponent as ExternalIcon } from '../icons/external-link.svg';

export const External = (props) => (
  <ExternalIcon
    className={props.className}
    style={props.style}
    role={props.role}
  />
);

export default External;
