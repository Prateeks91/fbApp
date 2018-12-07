export function handlePost(data){
    return{
        type:"POST_COMMENT",
        payload:data
    }
}

export function handleAuth(isAuthenticated=false){
    return{
        type:"HANDLE_AUTH",
        payload:isAuthenticated
    }
}