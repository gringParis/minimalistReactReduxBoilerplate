export default function reducer (state = {toogle: false}, action) {
  switch (action.type) {
    case 'DUMMY_ACTION': {
      var newState = Object.assign({}, state)
      newState.toogle = !state.toogle
      return newState
    }
  }
  return state
}
