
const createHighOrderFunction = (callback, args) => {
  return () => {
    callback(...args);
  };
};

export {
  createHighOrderFunction
};