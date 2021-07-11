import Dialogs from './Dialogs.jsx';
import { sendNewMessageCreator } from '../../redux/dialogs-reducer';
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
        sendMessage: (newMessageText) => {
            dispatch(sendNewMessageCreator(newMessageText))
        }
    };
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);