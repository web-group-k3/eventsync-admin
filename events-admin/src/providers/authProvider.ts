import { AuthProvider } from 'react-admin';

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

export const authProvider: AuthProvider = {
  // 1. Appelé quand l'utilisateur soumet le formulaire de Login
  login: async ({ username, password }) => {
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Identifiants incorrects');
    }

    const data = await response.json();
    localStorage.setItem('token', data.token); // ✅ Sauvegarde le jeton JWT
    return Promise.resolve(); // 🟢 Indique explicitement à React-Admin que c'est un succès !
  },

  // 2. Appelé quand l'utilisateur clique sur "Déconnexion"
  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  },

  // 3. Appelé à chaque changement de page pour vérifier si on est connecté
  checkAuth: () => {
    const token = localStorage.getItem('token');
    return token ? Promise.resolve() : Promise.reject({ redirectTo: '/login' });
  },

  // 4. Appelé quand l'API renvoie une erreur (ex: jeton expiré)
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  },

  getPermissions: () => Promise.resolve(),
};