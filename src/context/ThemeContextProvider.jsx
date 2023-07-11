import React,{createContext, useReducer} from 'react';

const InitialState = {
    dark: false
} 

const reducer = (state,action) => {
    switch(action.type) {
        case "DARK":
            return state === !InitialState
        default:
            return InitialState
    }
}

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {

    const[dark, darkDispatch] = useReducer(reducer, InitialState)

    return (
        <ThemeContext.Provider value={{dark, darkDispatch}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;