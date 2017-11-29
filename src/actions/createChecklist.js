require ('isomorphic-fetch');

export function receiveChecklists(lists) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    dispatch({
      type: 'RECEIVE_CHECKLISTS',
      payload: lists
    });
    dispatch({ type: 'NOTLOADING' });
  }
}

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
      dispatch({ type: 'RETURN_CHECKLISTS'});
      window.location.reload(true);
    });
  }
}