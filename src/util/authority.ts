export function getAuthority() {
  return localStorage.getItem('turtle-admin-authoriry');
}

export function setAuthority(authoriry: string): void {
  return localStorage.setItem('turtle-admin-authoriry', authoriry);
}