import Dialogs from './Dialogs.jsx';
import { upDateNewMessageTextCreator, sendNewMessageCreator } from '../../redux/dialogs-reducer.js';
import { connect } from 'react-redux';
import withAuthRedirect from '../hoc/withAuthRedirect.jsx';
import { compose } from 'redux';


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


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);