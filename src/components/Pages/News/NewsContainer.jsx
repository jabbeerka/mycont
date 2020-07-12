import { connect } from 'react-redux';
import News from './News';
import header from '../../../images/news-header.png'

let mapStateToProps = (state) => {
    return {
        header: header
    }
}
const NewsContainer = connect(mapStateToProps)(News)
export default NewsContainer;