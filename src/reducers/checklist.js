export default function createChecklist(state = [], action) {
  switch(action.type) {
    case 'RETURN_CHECKLISTS':
      let checklist = Object.assign({}, state, action.payload)
      return state.concat(checklist)
    default:
      return state;
  }
}