require ('isomorphic-fetch');

function receiveListings(list) {
  return {
    type: 'SEARCH_RESULTS',
    listings: list.entries
  }
}

export function homeawaySearch(data, routerHistory) {
  return dispatch => {
    dispatch({ type: 'LOADING' });
    return fetch('http://localhost:3001/homeaway_connect', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: data
    })
    .then(response => response.json())
    .then(list => {
      dispatch({ type: 'NOTLOADING' });
      dispatch(receiveListings(list));
      routerHistory.replace('/search_results');
    });
  }
}