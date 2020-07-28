import { connect } from 'react-redux';
import Settings from './Settings';
import header from '../../../images/settings-header.png';
import withAuthRedirect from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        header: header
    }
}
export default compose(connect(mapStateToProps),withAuthRedirect)(Settings);