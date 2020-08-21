import Dialogs from './Dialogs.jsx';
import { upDateNewMessageTextCreator, sendNewMessageCreator } from '../../redux/dialogs-reducer.js';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendNewMessageCreator())
        },
        upDateNewMessageText: (text) => {
            dispatch(upDateNewMessageTextCreator(text))
        }
    };
}


let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;