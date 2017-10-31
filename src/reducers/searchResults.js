export default function searchResults(state = [], action) {
  switch(action.type) {
    case 'SEARCH_RESULTS':
      return Object.assign({}, state, {
        listings: action.listings
      })
    default:
      return state;
  }
} 