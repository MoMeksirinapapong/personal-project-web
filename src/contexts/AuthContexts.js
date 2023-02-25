import { createContext, useState } from 'react';
import * as authApi from '../apis/auth-api';
import { getAccessToken, setAccessToken } from '../util/local-storage';

export const AuthContext = createContext();

export default function AuthContextProvider({children}){
    const [authenticatedUser, setAuthenticatedUser] = useState(
        // default page will be /
        getAccessToken()? true : null
    );

    const login = async (email, password) => {
        // this f. will send req to server
        const res = await authApi.login({email, password});
        // login complete
        setAccessToken(res.data.accessToken);
        setAuthenticatedUser(true);
    };

    return (
        <AuthContext.Provider value={{authenticatedUser,login}}>
            {children}
            </AuthContext.Provider>
            );
}