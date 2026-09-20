export const Utils = {
  objectToQueryString: (obj) => {
    if (!obj || typeof obj !== "object" || Array.isArray(obj)) {
      return "";
    }

    return Object.entries(obj)
      .filter(([_, value]) => Array.isArray(value) && value.length > 0)
      .map(([key, value]) => `${key}=${value.join(',')}`)
      .join("&");
  },
};
