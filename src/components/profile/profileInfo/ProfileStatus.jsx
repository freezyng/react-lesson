import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status:  e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return <div className='profile-status'>
            { (!this.state.editMode)
            ?<h3 onClick={this.activateEditMode} className='profile-status__text'>{this.props.status}</h3>
            :<input ref={this.statusInputRef} autoFocus={true} onChange={this.onStatusChange}
                value={this.state.status} 
                onBlur={this.deactivateEditMode}/>
            }
        </div>
    }
}

export default ProfileStatus;