export default function createChecklist(state = [], action) {
  switch(action.type) {
    case 'RECEIVE_CHECKLISTS':
      return {
        checklists: action.payload,
        completed: action.payload.map((element) => {
          return element.items.map((each) => {
            if (each.completed !== true) {
              return each.completed = false
            } else { return each.completed = true}
          })
        })
      }
    case 'CHECKED_OFF_ITEM':
      // checklists: action.childItem.completed = true
      // action.childItem.completed = true
      for (let i = 0; i < action.state.length; i++) {
        if (action.state[i].id === action.parent.id) {
          for (let e = 0; e < action.state[i].items.length; e++) {
            if (action.state[i].items[e].id === action.childItem.id) {
              action.state[i].items[e] = Object.assign({}, action.state[i].items[e], action.state[i].items[e].completed = true)
            }
          }
        }
      }
      return state
    default:
      return state;
  }
}