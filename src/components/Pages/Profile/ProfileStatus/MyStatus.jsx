import React from 'react';
import styles from './MyStatus.module.sass';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }
  activeEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status)
  }
  onChangeStatus = (e) => {
    this.setState({ status: e.currentTarget.value })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        state: this.props.status
      })
    }

  }
  render() {
    return (
      <>
        {!this.state.editMode ?
          <div>
            <div onClick={this.activeEditMode} className={styles.status__text} ><span>Status:</span> {this.props.status || "________"}</div>
          </div> :
          <div>
            <input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} type="text" className={styles.status__inputArea} />
          </div>
        }
      </>
    )
  }
}
export default ProfileStatus;