import { connect } from 'react-redux';
import Profile from './Profile';

let mapStateToProps = (state) => {
  return {
    img: state.headers.imgs[0].bgimage
  }
}
const ProfileContainer = connect(mapStateToProps)(Profile)

export default ProfileContainer;