const FOLLOW = 'FOLLOW';    
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        // { id: 2, followed: true, fullName: 'Alyosha', status: 'lolololo', location: {city: 'Minsk', country: 'Belarus'} },
        // { id: 3, followed: true, fullName: 'Alyosha', status: 'lolololo', location: {city: 'Minsk', country: 'Belarus'} },
        // { id: 4, followed: true, fullName: 'Alyosha', status: 'lolololo', location: {city: 'Minsk', country: 'Belarus'} } 
    ]
} 

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
       
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map((u) => {
                    if(u.id === action.userId) {
                        return{ ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if(u.id === action.userId) {
                        return{ ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return{
                ...state, 
                users: [ ...state.users, ...action.users ]
            }
        default:
            return state;
    }

}

const followAC = (userId) => {
    return {type: FOLLOW, userId}
}
const unfollowAC = (userId) => {
    return {type: UNFOLLOW, userId}
}
const setUsersAC = (users) => {
    return {type: SET_USERS, users}
}


export  {usersReducer, followAC, unfollowAC, setUsersAC};