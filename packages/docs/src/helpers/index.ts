export const isUrl = (str: string) => {
  try {
    return Boolean(new URL(str));
  } catch (e) {
    return false;
  }
};

export const removeSlashes = (str: string) => str.replace(/^\/|\/$/g, '');
