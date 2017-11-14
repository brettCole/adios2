require ('isomorphic-fetch');

export function createItem(itemData) {
  return (dispatch) => {
    dispatch({ type: 'LOADING'});
    return fetch('http://localhost:3001/api/v1/create_item', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      },
      body: itemData
    })
    .then(response => response.json())
    .then(data => {
      dispatch({ type: 'RETURN_ITEMS'});
      window.location.reload(true);
    });
  }
}