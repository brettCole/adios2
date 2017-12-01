export default function createChecklist(state = [], action) {
  switch(action.type) {
    case 'RECEIVE_CHECKLISTS':
      return {
        checklists: action.payload.map((element) => {
          return {...element}
          })
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