import { connect } from 'react-redux';

import Profile from './Profile';
import { compose } from 'redux';



let mapStateToProps = (state) => {
  return {
    state: state.profilePage
  }
}
export default compose(connect(mapStateToProps))(Profile);