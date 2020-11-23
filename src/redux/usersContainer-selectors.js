

const getUsersSelector = (state) => {
    return state.usersPage.users
}

const pageSizeSelector = (state) => {
    return state.usersPage.pageSize
}

const totalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount
}

const currentPageSelector = (state) => {
    return state.usersPage.currentPage
}

const usersLoaderSelector = (state) => {
    return state.usersPage.usersLoader
}

const followInProgressSelector = (state) => {
    return state.usersPage.followInProgress
}

const isAuthSelector = (state) => {
    return state.authUser.isAuth
}

export {isAuthSelector, followInProgressSelector, usersLoaderSelector, currentPageSelector, totalUsersCountSelector, pageSizeSelector, getUsersSelector};