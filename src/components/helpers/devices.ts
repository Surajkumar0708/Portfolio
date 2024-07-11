export const isMobile = (width: number) => {
  return width < 768;
};

export const isIOS = () => {
  const userAgent = navigator.userAgent || navigator.vendor;
  return /iPad|iPhone|iPod/.test(userAgent);
};
