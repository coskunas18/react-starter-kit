import { createContext, useContext, useReducer } from "react";
import {SiteReducer} from '../reducer';

const Context = createContext();

const Provider = ({children}) => {


  const [state,dispatch] = useReducer(SiteReducer,{
    theme: localStorage.getItem('theme') || "light",
    language:"tr"
  })


  const data={
    ...state,
    dispatch
  }
    return (
        <Context.Provider value={data}> 
        {children}
        </Context.Provider>
    )
}

export const useSite = () => useContext(Context)


export default Provider

