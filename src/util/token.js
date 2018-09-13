export function getToken() {
  return localStorage.getItem('turtle-admin-token');
}

export function setToken(token) {
  return localStorage.setItem('turtle-admin-token', token);
}