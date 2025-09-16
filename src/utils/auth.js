// Authentication utilities
export const AUTH_CREDENTIALS = {
  username: 'admin',
  password: 'password123'
};

export const AUTH_STORAGE_KEY = 'isAuthenticated';

// Check if user is authenticated
export const isAuthenticated = () => {
  return localStorage.getItem(AUTH_STORAGE_KEY) === 'true';
};

// Set authentication status
export const setAuthenticated = (status) => {
  if (status) {
    localStorage.setItem(AUTH_STORAGE_KEY, 'true');
  } else {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }
};

// Validate credentials
export const validateCredentials = (username, password) => {
  return username === AUTH_CREDENTIALS.username && 
         password === AUTH_CREDENTIALS.password;
};
