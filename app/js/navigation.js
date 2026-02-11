let navigateFunction = null;

export const setNavigate = (nav) => {
  navigateFunction = nav;
};

export const navigateTo = (path) => {
  if (navigateFunction) navigateFunction(path);
};
