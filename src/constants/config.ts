export const API_HOST = import.meta.env.API_HOST || 'localhost';
export const API_PORT = import.meta.env.API_PORT || '3000';

export const HOST = import.meta.env.APP_HOST || 'http://localhost';
export const PORT = import.meta.env.APP_PORT || '3000';

export const APP_HOST = PORT === '80' ? HOST : `${HOST}:${PORT}`;
export const SERVER_HOST =
  API_PORT === '80' ? API_HOST : `${API_HOST}:${API_PORT}`;

export const NODE_ENV = import.meta.env.NODE_ENV;
