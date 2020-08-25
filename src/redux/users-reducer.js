const FOLLOW = 'FOLLOW';    
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize: 8,
    totalUsersCount: 20,
    currentPage: 1
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
                users: action.users 
            }
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.numPage
            }
        case TOTAL_USERS_COUNT:
            return{
                ...state,
                totalUsersCount: action.totalCount
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
const setCurrentPageAC = (numPage) => {
    return {type: SET_CURRENT_PAGE, numPage}
}
const setTotalUsersCountAC = (totalCount) => {
    return {type: TOTAL_USERS_COUNT, totalCount}
}



export  {usersReducer, followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC};