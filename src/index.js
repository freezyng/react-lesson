import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
    { id: 1, name: 'вася пятухов' },
    { id: 2, name: 'пятухов' },
    { id: 3, name: 'вася' },
    { id: 4, name: 'втухов' },
    { id: 5, name: 'васов' },
    { id: 6, name: 'ас тух' },
    { id: 7, name: 'ся тухов' },
    { id: 8, name: 'лоо лотухов' }
];
let dialogsMessage = [
    { id: 1, message: 'asdasdsa' },
    { id: 2, message: 'asdsd asd ww e qwe' },
    { id: 3, message: 'ся тухов' },
    { id: 4, message: ' qweeqwe wqe qwe ' },
    { id: 5, message: 'втухов' },
    { id: 6, message: 'ся тухов' },
    { id: 7, message: 'васов' },
    { id: 8, message: 'ся тухов' },
    { id: 9, message: 'ас тух' },
    { id: 10, message: 'ся тухов' },
    { id: 11, message: 'ся тухов' },
    { id: 12, message: 'лоо лотухов' }
];
let myPostsMessage = [
    { id: 1, likes: 22, message: 'asdasdsa' },
    { id: 2, likes: 2, message: 'asdsd asd ww e qwe' },
    { id: 3, likes: 12, message: 'fffffkkkkkkk' },
    { id: 4, likes: 32, message: ' qweeqwe wqe qwe ' },
    { id: 5, likes: 2, message: 'втухов' },
    { id: 6, likes: 1, message: 'ся тухов' },
    { id: 7, likes: 0, message: 'васов' },
    { id: 8, likes: 3, message: 'fffffkkkkkkk' },
    { id: 9, likes: 2, message: 'ас тух' },
    { id: 10, likes: 22, message: 'ся тухов' },
    { id: 11, likes: 22, message: 'jdffffffffkkkkkk' },
    { id: 12, likes: 0, message: `hello!! jdffffffffkkkkkkkkkkkkkkkkkjdffff 
                    ffkkkkkkkkjdffffffffkkkkkkkkkkkkkkkkkjdffffffffk 
                    kkkkkkkkkkkkkkkkjdffffkkkkkkkkkdffffffffkkkkkkk
                    kkkkkkkkkkjdffffffffkkkkkkkkkkkkkkkkkksdddddddddddd
                    ddddddddddddddddddddfhsjdfhasjcs sh fsaf  asfsaf as` }
];

ReactDOM.render(<App dialogsData={dialogsData}
    dialogsMessage={dialogsMessage}
    myPostsMessage={myPostsMessage}
/>, document.getElementById('root'));

serviceWorker.unregister();