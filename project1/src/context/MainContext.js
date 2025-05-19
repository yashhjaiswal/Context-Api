import {createContext,useState} from 'react';

export const MainContext = createContext();

export const MainContextProvider = ({children}) =>{
    const [name, setName] = useState("");
    const [loginCount , setLoginCount] = useState(1);

    return (
        <MainContext.Provider value={{loginCount , setLoginCount, name, setName}}>
            {children}
        </MainContext.Provider>
    )
}