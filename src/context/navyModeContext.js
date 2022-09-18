import { createContext, useReducer } from "react"
import NavyModeReducer from "./navyModeReducer"

const INITIAL_STATE = {
    navyMode: false
}

export const NavyModeContext = createContext(INITIAL_STATE)

export const NavyModeContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(NavyModeReducer, INITIAL_STATE);

    return(
        <NavyModeContext.Provider value={{navyMode:state.navyMode, dispatch}}>
            {children}
        </NavyModeContext.Provider>
    )
}