import { createElement } from 'react';

import styles from './Content.module.scss';

export const Spacer = (props) => {
  const spacing =
    typeof props.amount === `number` ? `spacer__${props.amount}` : `spacer`;

  return createElement(props.as || `div`, {
    className: styles[spacing],
    children: props.children
  });
};
