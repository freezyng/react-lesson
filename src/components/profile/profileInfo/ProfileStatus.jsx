import React, {useState, useEffect} from 'react';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] )

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className='profile-status'>
            { (!editMode)
                ? <h3 onClick={activateEditMode} className='profile-status__text'>{props.status}</h3>
                : <input autoFocus={true} onChange={onStatusChange}
                    value={status}
                    onBlur={deactivateEditMode} />
            }
        </div>
    )
}
export default ProfileStatus;