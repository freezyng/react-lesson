import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {  
        return <div className='profile-status'>
            { (!this.state.editMode)
            ?<h3 onClick={this.activateEditMode.bind(this)} className='profile-status__text'>{this.props.status}</h3>
            :<input autoFocus={true} type="text" value={this.props.status} onBlur={this.deactivateEditMode.bind(this)}/>
            }
        </div>
    }
}

export default ProfileStatus;