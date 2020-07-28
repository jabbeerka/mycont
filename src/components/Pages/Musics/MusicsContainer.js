import { connect } from 'react-redux';
import Musics from './Musics';
import header from '../../../images/musics-header.png';
import withAuthRedirect from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = () => {
    return {
        header: header
    }
}
export default compose(connect(mapStateToProps),withAuthRedirect)(Musics);