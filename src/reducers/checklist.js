export default function createChecklist(state = [], action) {
  switch(action.type) {
    case 'RECEIVE_CHECKLISTS':
      return Object.assign({}, state, {
        checklists: action.payload
      })
    case 'RETURN_CHECKLISTS':
      return Object.assign({}, state, {
        checklists: action.payload
      })
    default:
      return state;
  }
}