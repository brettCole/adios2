export default function loginStatus(state = {
  id: null,
  username: null,
  name: null,
  email: null,
  isLoggedIn: false,
  loading: false}, action) {
  switch(action.type) {
    case 'LOADING':
      return { loading: true }
    case 'RETURN_JWT':
      return { loading: false }
    case 'CURRENT_USER':
      let user = Object.assign({}, state, action.payload)
      return {
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        isLoggedIn: true,
        loading: false }
    case 'LOGGED_OUT':
      return { loading: false, isLoggedIn: false }
    default:
      return state;
  }
}