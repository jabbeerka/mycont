import React from 'react';
import styles from './MyStatus.module.sass';

class ProfileStatus extends React.Component {
    state = {
      editMode: false
    }
    activeEditMode = () => {
      this.setState({
        editMode: true
      })
    }
    deactivateEditMode = () => {
      this.setState({
        editMode:false
      })
    }
    render() {
        return (
        <>
          {!this.state.editMode ?
          <div>
            <div onClick={this.activeEditMode} className={styles.status__text} ><span>Status:</span> {this.props.status}</div>
          </div> :
          <div>
            <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} type="text" className={styles.status__inputArea}/>
          </div>
          }
        </>
      )
    }
}
export default ProfileStatus;