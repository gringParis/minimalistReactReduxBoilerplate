import { connect } from 'react-redux'
import {dummy_action} from './actions'
import Main from './main'
  /**
  * mapping from redux state to react props for connected component
  */
const mapStateToProps = (state, ownProps) => {
  return state
}

  /**
  * mapping of dispatched redux actions to react connected component
  */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dummy_action: (payload) => {
      dispatch(dummy_action(payload))
    }
  }
}

  /**
  * Connection GameContainer to Grid
  */
const Container = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)

export default Container
