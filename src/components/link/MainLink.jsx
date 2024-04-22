import React, { createElement } from "react";
import { Link } from "react-router-dom";
import loadable from "@loadable/component";

import { makeClassName } from "$/helpers";

const icons = {
  external: "External",
  download: "Download",
  mail: "Mail",
  link: "Link",
};

export const MainLink = (props) => {
  const isRouter = typeof props.href === `object`;

  const Icon = loadable(() =>
    import(`../../svg/components/${icons[props.type] || icons.link}.jsx`)
  );

  const element = !(props.href || props.href?.to)
    ? "span"
    : isRouter
    ? Link
    : `a`;

  return createElement(element, {
    [isRouter ? "to" : "href"]: props.href,
    target: isRouter ? props.target : "ExternalFrame",
    className: makeClassName(props.className, [
      `icon-visible`,
      props.iconVisible,
    ]),
    children: [
      props.children,
      props.hideIcon ? undefined : (
        <span key="link-icon" className="link-icon__wrap no-select">
          {element !== "span" && (
            <Icon role="presentation" className="link-icon" />
          )}
        </span>
      ),
    ],
  });
};
