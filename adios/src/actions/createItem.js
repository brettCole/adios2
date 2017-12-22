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

export function completedItem(itemId, parentId) {
  return (dispatch, getState) => {
    const state = getState()
    const parent = state.createChecklist.checklists.find(obj => obj.id === parentId)
    const childItem = parent.items.find(obj => obj.id === itemId)
    dispatch({
      type: 'CHECKED_OFF_ITEM',
      parent,
      state: state.createChecklist.checklists,
      childItem
    });
  }
}