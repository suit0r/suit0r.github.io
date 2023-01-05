import { isObject } from './isObject';

// simple functionality for now. no nested/recursive array/object checking
export const makeClassName = (...classes) =>
  classes
    .map((className) => {
      if (isObject(className)) {
        return Object.keys(className)
          .filter((key) => {
            if (typeof className[key] === `boolean`) {
              return className[key];
            }

            if (Array.isArray(className[key])) {
              return className[key].length && className[key].every(Boolean);
            }

            // not bothering with "infinite" object recursion checking

            return Boolean(className[key]);
          })
          .join(' ');
      }

      if (Array.isArray(className)) {
        return Array.isArray(className[1])
          ? Boolean(className[1].length) && className[0]
          : Boolean(className[1]) && className[0];
      }

      return className;
    })
    .filter(Boolean)
    .join(' ');
