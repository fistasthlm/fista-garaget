export function saveAuthToken(encoded) {
   sessionStorage.setItem('authToken', encoded);
}

export function saveAuthTokenFromQueryString(token) {
   sessionStorage.setItem('authToken', token);
}

export function updateAuthToken(password) {
   let token = atob(getAuthToken()).split(':');
   saveAuthToken(token[0], password);
}

export function isAuthenticated() {
   return getAuthToken() !== null;
}

export function getAuthToken() {
   return sessionStorage.getItem('authToken');
}

export function removeAuthToken() {
   sessionStorage.removeItem('authToken');
}
