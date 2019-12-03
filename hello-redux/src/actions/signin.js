export const signIn = isLogin =>{
    return {
        type : 'SIGN_IN',
        payload : isLogin
    }
}
