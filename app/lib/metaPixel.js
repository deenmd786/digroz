export const FB_PIXEL_ID = "1340134777404430";

export const pageView = () => {
  window.fbq("track", "PageView");
};

export const event = (name, options = {}) => {
  window.fbq("track", name, options);
};
