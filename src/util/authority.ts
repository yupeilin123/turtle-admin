export function getAuthority(): any {
  return localStorage.getItem('turtle-admin-authoriry');
}

export function setAuthority(authoriry: string): void {
  localStorage.setItem('turtle-admin-authoriry', authoriry);
}