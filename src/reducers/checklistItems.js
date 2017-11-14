export default function createItems(state = [], action) {
  switch(action.type) {
    case 'RETURN_ITEMS':
      return Object.assign({}, state, {
        checklistItems: action.payload
      })
    default:
      return state;
  }
}