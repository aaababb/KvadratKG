export const getTokenLS = () => {
  const token = localStorage.getItem("quadrat_token");
  return token ? JSON.parse(token) : null;
};

export const setTokenLS = (token) => {
  localStorage.setItem("quadrat_token", JSON.stringify(token));
};

export const deleteTokenLS = () => {
  localStorage.removeItem("quadrat_token");
};
