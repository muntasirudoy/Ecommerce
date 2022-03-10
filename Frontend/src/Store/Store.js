
import { createContext, useReducer } from "react";

const Store = createContext()

 const initvalue ={
     cartItems: []
 }



const reducer =(state,action)=>{
   
    switch (action.type){
        case 'ADD_CART' :
        let newitems= action.payload
        let exproduct = state.cartItems.find((item)=> item._pid ==newitems._pid )
        let cartItems = exproduct ? state.cartItems.map((item)=> item._pid == exproduct._pid ? newitems : item) : [...state.cartItems,newitems]
        return {...state,cartItems} 

        case 'REMOVE_CART' :
        {let cartItems = state.cartItems.filter(items=> items._pid !== action.payload)
        return {...state,cartItems} }

        default :
           return state
    }
     


}


const StoreProvide = (props)=>{
const [ state, dispatch] = useReducer(reducer, initvalue)

const value = { state, dispatch }

return  <Store.Provider value={value}> {props.children} </Store.Provider>

}


export {Store, StoreProvide }