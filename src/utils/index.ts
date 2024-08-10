import { loginState } from "../features/Sign-In/store/types";

export const replaceUrlPart = (originalUrl: string) => {
  const oldUrl = "111.222.333.44/";
  const newUrl = "167.172.74.113/";
  return originalUrl.replace(oldUrl, newUrl);
};

export const getUserLS = () => {
  const user = localStorage.getItem("quadrat_admin");
  return user ? JSON.parse(user) : null;
};

export const setUserLS = (user: loginState) => {
  localStorage.setItem("quadrat_admin", JSON.stringify(user));
};

export const deleteUserLS = () => {
  localStorage.removeItem("quadrat_admin");
};
