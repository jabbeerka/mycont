import { connect } from 'react-redux';

import Profile from './Profile';
import { compose } from 'redux';
import withAuthRedirect from '../../Hoc/withAuthRedirect';



let mapStateToProps = (state) => {
  return {
    state: state.profilePage
  }
}

export default compose(connect(mapStateToProps), withAuthRedirect )(Profile);