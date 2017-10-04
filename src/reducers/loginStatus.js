export default function loginStatus(state = { isLoggedIn: false, loading: false }, action) {
  switch(action.type) {
    case 'LOADING':
      return { loading: true }
    case 'RETURN_JWT':
      return { loading: false }
    case 'LOGGED_IN':
      return { loading: false, isLoggedIn: true }
    case 'LOGGED_OUT':
      return { loading: false, isLoggedIn: false }
    default:
      return state;
  }
}