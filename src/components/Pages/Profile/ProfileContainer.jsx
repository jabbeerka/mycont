import { connect } from 'react-redux';
import Profile from './Profile';
import header from '../../../images/profile-header.png'

let mapStateToProps = () => {
  return {
    header: header
  }
}
const ProfileContainer = connect(mapStateToProps)(Profile)

export default ProfileContainer;