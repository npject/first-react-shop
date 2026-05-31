import { createContext,useReducer } from "react";

export const ProductsContext = createContext();
const productsReducer = (state,action)=>{
    switch (action.type) {
        case 'CHANGE_COUNT':
            return {...state,count:action.payload}
            break;
        
        default:
            break;
    }
}
export function ProductsProvider({children}){
    const [state,dispach] = useReducer(productsReducer,{
        count: 0
    })
    const changeProduct = (count)=>{
        dispach({type:'CHANGE_COUNT',payload:count});
    }
    return (
        <ProductsContext.Provider value={{...state,changeProduct}}>
            {children}
        </ProductsContext.Provider>
    )
}
