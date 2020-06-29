import { connect } from 'react-redux';
import News from './News';


let mapStateToProps = (state) => {
    return {
        img: state.headers.imgs[3].bgimage
    }
}
const NewsContainer = connect(mapStateToProps)(News)
export default NewsContainer;