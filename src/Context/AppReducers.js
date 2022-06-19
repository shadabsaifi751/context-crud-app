export default (state,action) => {
    switch(action.type){
        case 'REMOVE_USERS':
            return {
                users:state.users.filter(users => {
                    return users.id !== action.payload
                })
            }
        case 'ADD_USERS':
            return{
                users: [action.payload, ...state.users]
            }
        case 'EDIT_USERS':
            const updateUser = action.payload;

            const updateUsers = state.users.map((user) => {
                if(user.id === updateUser.id){
                    return updateUser;
                }
                return user;
            })

            return {
                users: updateUsers
            }
            
        default:
            return state
    }
}