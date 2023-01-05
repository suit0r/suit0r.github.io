export const filterAndJoin = (array, joiner = ' ', filterFn = Boolean) =>
  array.filter(filterFn).join(joiner);
