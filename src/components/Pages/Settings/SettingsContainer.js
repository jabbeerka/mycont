import { connect } from 'react-redux';
import Settings from './Settings';
import withAuthRedirect from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {}
}
export default compose(connect(mapStateToProps),withAuthRedirect)(Settings);