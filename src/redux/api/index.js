export const apiCall = (method, url) => {
  return fetch(url, {
    method,
  }).then(response => response.json());
};
