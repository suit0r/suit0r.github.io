export const isObject = (item) => {
  // falsy values cannot be objects
  if (!item) {
    return false;
  }

  // the extra check for constructor covers Object.create(null)
  // where a plain object without a prototype chain is created
  return (
    typeof item === `object` &&
    (item.constructor === Object || !item.constructor)
  );
};
