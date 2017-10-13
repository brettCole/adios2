require ('isomorphic-fetch');

export function createChecklist(data) {
  return (dispatch) => {
    dispatch({ type: 'LOADING'});
    return fetch('http://localhost:3001/api/v1/create_checklist', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      },
      body: data
    })
    .then(response => response.json()) 
    .then(data => {
      localStorage.setItem('checklists', JSON.stringify(data))
      dispatch({ type: 'RETURN_CHECKLISTS'});
    });
  }
}