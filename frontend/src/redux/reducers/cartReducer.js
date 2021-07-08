import * as actionTypes from "../constants/cartConstants";


 const cartReducer= (state ={cartItem:[]}, action) => {
    switch (action.type) {

        case "ADD":
            console.log('dang them vao ')
            const item=action.payload
            console.log(item)
            const existItem=state.cartItem.find((x)=>x.product===item.product)
            if (existItem){
                return {
                    ...state,
                    cartItem:state.cartItem.map((x)=>x.product===existItem.product? item : x)
                }
            }
        
            else{
                return{
                    ...state,
                    cartItem:[...state.cartItem,item]
                }
            }
        
        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,
                cartItem:state.cartItem.filter((x)=>x.product!==action.payload)
            }
                
        


        default:
            return state
        }
}
export default cartReducer
