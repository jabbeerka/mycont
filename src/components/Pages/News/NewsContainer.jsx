import { connect } from 'react-redux';
import News from './News';
import withAuthRedirect from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        state: state
    }
}
export default compose(connect(mapStateToProps), withAuthRedirect)(News);