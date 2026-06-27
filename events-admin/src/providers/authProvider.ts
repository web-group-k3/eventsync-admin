import { AuthProvider } from "react-admin";

const apiUrl = "http://localhost:8080/api";

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) throw new Error("Identifiants incorrects");

    const data = await response.json();
    localStorage.setItem("token", data.token);
  },
  logout: () => {
    localStorage.removeItem("token");
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem("token")
      ? Promise.resolve()
      : Promise.reject();
  },
  checkError: (error) => {
    if (error.status === 401 || error.status === 403) {
      localStorage.removeItem("token");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  getIdentity: async () => {
    const token = localStorage.getItem("token");
    if (!token) return Promise.reject();

    const response = await fetch(`${apiUrl}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) return Promise.reject();

    const data = await response.json();
    return {
      id: data.username,
      fullName: data.username,
    };
  },

  getPermissions: () => Promise.resolve(),
};