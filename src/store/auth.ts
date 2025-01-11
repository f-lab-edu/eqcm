import { atom } from 'jotai';

const ACCESS_TOKEN_KEY = 'eqcm-access-token';
const REFRESH_TOKEN_KEY = 'eqcm-refresh-token';

export const isLoggedInAtom = atom(false);

function isTokenExpired(token: string) {
  const { exp } = JSON.parse(atob(token.split('.')[1]));
  return Date.now() >= exp * 1000;
}

export const checkLoginStatus = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (!accessToken) return false;

  if (isTokenExpired(accessToken)) {
    // Refresh Token API 요청
  }
  return true;
};

export const authTokenManager = {
  setTokens: (accessToken: string, refreshToken: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  },
  getAccessToken: () => localStorage.getItem(ACCESS_TOKEN_KEY),
  getRefreshToken: () => localStorage.getItem(REFRESH_TOKEN_KEY),
  clearTokens: () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  },
};
