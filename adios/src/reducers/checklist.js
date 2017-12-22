export default function createChecklist(state = [], action) {
  switch(action.type) {
    case 'RECEIVE_CHECKLISTS':
      return {
        checklists: action.payload
      }
    case 'CREATE_CHECKLISTS_SUCCESS':
      return {...state,
        checklists: state.checklists.concat(Object.assign({}, action.payload, {items: []}))
      }
    case 'CHECKED_OFF_ITEM':
      return {
        checklists: action.state.map((element) => {
          return {...element,
          ...element.items.map((each) => {
            if (each.id === action.childItem.id) {
              each.completed = !each.completed
            }
          })
          }
        })
      }
    default:
      return state;
  }
}