import { connect } from 'react-redux';
import header from '../../../images/profile-header.png';
import withAuthRedirect from '../../Hoc/withAuthRedirect';
import Profile from './Profile';
import { compose } from 'redux';



let mapStateToProps = (state) => {
  return {
    header: header
  }
}
export default compose(connect(mapStateToProps),withAuthRedirect)(Profile);