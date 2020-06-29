import { connect } from 'react-redux';
import Musics from './Musics';


let mapStateToProps = (state) => {
    return {
        img: state.headers.imgs[2].bgimage
    }
}
const MusicsContainer = connect(mapStateToProps)(Musics)
export default MusicsContainer;