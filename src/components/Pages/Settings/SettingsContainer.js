import { connect } from 'react-redux';
import Settings from './Settings';
import header from '../../../images/settings-header.png';


let mapStateToProps = (state) => {
    return {
        header: header
    }
}
const SettingsContainer = connect(mapStateToProps)(Settings)
export default SettingsContainer;