import React, {useReducer, createContext} from 'react';

const InitialState = {
  showButton: false
}

const reducer = (state, action) => {
    switch(action.type) {
        case "SHOW":
            return state === !InitialState
        default:
            return InitialState
    }
}

export const CategoryContext = createContext()

const CategotyContextProvider = ({children}) => {

    const [show, dispatch] = useReducer(reducer, InitialState);

    return (
        <CategoryContext.Provider value={{show, dispatch}}>
            {children}
        </CategoryContext.Provider>
    );
};

export default CategotyContextProvider;