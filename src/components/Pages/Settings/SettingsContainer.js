import { connect } from 'react-redux';
import Settings from './Settings';


let mapStateToProps = (state) => {
    return {
        img: state.headers.imgs[4].bgimage
    }
}
const SettingsContainer = connect(mapStateToProps)(Settings)
export default SettingsContainer;