import { ReactComponent as LinkIcon } from '../icons/link.svg';

export const Link = (props) => (
  <LinkIcon className={props.className} style={props.style} role={props.role} />
);

export default Link;
