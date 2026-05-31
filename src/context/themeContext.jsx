import { createContext,useReducer } from "react";

export const themeContext = createContext();
const themeReducer = (state,action)=>{
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {...state,color:action.payload}
            break;
        
        default:
            break;
    }
}
export function ThemeProvider({children}){
    const [state,dispach] = useReducer(themeReducer,{
        color: 'light'
    })
    const changeColor = (color)=>{
        dispach({type:'CHANGE_COLOR',payload:color});
    }
    return (
        <themeContext.Provider value={{...state,changeColor}}>
            {children}
        </themeContext.Provider>
    )
}
