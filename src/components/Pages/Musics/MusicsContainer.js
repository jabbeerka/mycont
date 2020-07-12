import { connect } from 'react-redux';
import Musics from './Musics';
import header from '../../../images/musics-header.png'


let mapStateToProps = () => {
    return {
        header: header
    }
}
const MusicsContainer = connect(mapStateToProps)(Musics)
export default MusicsContainer;