import { connect } from 'react-redux';
import Musics from './Musics';
import withAuthRedirect from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';



export default compose(connect(null),withAuthRedirect)(Musics);