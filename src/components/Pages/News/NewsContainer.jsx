import { connect } from 'react-redux';
import News from './News';
import header from '../../../images/news-header.png';
import withAuthRedirect from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        header: header
    }
}
export default compose(connect(mapStateToProps), withAuthRedirect)(News);