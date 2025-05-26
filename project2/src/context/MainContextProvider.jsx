import React,{useState} from 'react'
import {MainContext} from './MainContext'

export const MainContextProvider = ({children}) => {
const [name, setName] = useState("");
  return (
    <MainContext.Provider value={{name, setName}}>
        {children}
    </MainContext.Provider>
  )                     
}