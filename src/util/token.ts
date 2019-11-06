export function getToken() {
  return localStorage.getItem('turtle-admin-token');
}

export function setToken(token: string) {
  return localStorage.setItem('turtle-admin-token', token);
}
