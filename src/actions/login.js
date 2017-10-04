export function jwt(data, token) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    return fetch('http://localhost:3001/user_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: data
    })
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('jwt', data.jwt),
      dispatch({ type: 'RETURN_JWT'});
      dispatch({ type: 'LOADING' });
      return fetch('http://localhost:3001/api/v1/users/:id', {
        method: 'GET',
        headers: {
          Authorization: token
        }
      }).then(response => response.json())
      .then(data => {
        dispatch({ type: 'LOGGED_IN'});
      });
  });
}
}