import React, {createContext,useReducer} from 'react';
import authInitialState from './initialsState/authInitialState';
import auth from './reducers/auth';
import contactInitialState from './initialsState/contactInitialState';
import contact from './reducers/contact';

export const GlobalContext = createContext({});

const GlobalProvider=({children})=>{

    const [authState,authDispatch] = useReducer(auth, authInitialState)
    const [contactState,contactDispatch] = useReducer(contact, contactInitialState)
    
    return (
        <GlobalContext.Provider value={{ 
            authState, contactState, authDispatch,contactDispatch 
         }}>{children}</GlobalContext.Provider>
    );
};

export default GlobalProvider;