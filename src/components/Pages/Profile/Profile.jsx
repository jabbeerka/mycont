import React from 'react';
import styles from './Profile.module.sass';
import MyInfo from './MyInfo';
import SendPostContainer from './Post/SendPost/SendPostContainer';
import MyPostContainer from './Post/MyPost/MyPostContainer'
import storeContext from '../../../Redux/store-context';



const Profile = (props) => {
    
    return (
      <storeContext.Consumer>
        {(store) => {
          return (
                <div className={styles.content}>
                <img src={store.getState().headers.imgs[0].bgimage} alt="bgimage" className={styles.img}/>
                <MyInfo/>
                <SendPostContainer />
                <MyPostContainer />
                </div>
            )
          }
        }
      </storeContext.Consumer>
    )
}

export default Profile;