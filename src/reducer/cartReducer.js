

const cartReducer = (state, action) => {
    if(action.type === "ADD_TO_CART"){
        let { id, color, amount, product, state } = action.payload;

        let cartProduct ={
            id:id+color,
            name:product.name,
            color,
            amount,
            image: product.image[0].url,
            price: product.price,
            max: product.stock,
        }

        for(let i=0;i<state.cart.length;i++){
            if(state.cart[i].id===cartProduct.id){
                state.cart[i].amount+=cartProduct.amount;
                if(state.cart[i].amount>cartProduct.max){
                    state.cart[i].amount=cartProduct.max
                }
                let newCart = JSON.stringify(state.cart)
                localStorage.setItem("addCart",newCart)
                return {
                    ...state,cart: JSON.parse(localStorage.getItem("addCart"))
                }
            }
        }

        // adding in local storage 
        let addCart = JSON.parse(localStorage.getItem('addCart')) || [];
            addCart.push(cartProduct);
            localStorage.setItem("addCart",JSON.stringify(addCart));
    
    return {
        ...state,
        cart: JSON.parse(localStorage.getItem('addCart')),
    } 
}else if(action.type === "REMOVE_ITEM"){
        let id = action.payload;
        let updatedCart=[...state.cart];
        for(let i=0;i<updatedCart.length;i++){
            if(updatedCart[i].id === id){
                updatedCart.splice(i,1)
            }
        }

        // removing item from localstorage 
        localStorage.setItem("addCart",JSON.stringify(updatedCart))

        return {
            ...state,
            cart: JSON.parse(localStorage.getItem("addCart"))
        }
} else if(action.type==="CLEAR_CART"){
    localStorage.setItem("addCart",JSON.stringify([]))
    return {
        ...state,cart: JSON.parse(localStorage.getItem("addCart")) || []
    }
} else if(action.type==="DECREMENT"){
    let {id, cart} = action.payload;
    for(let i=0;i<cart.length;i++){
        if(id===cart[i].id){
            if(cart[i].amount===1){
                cart[i].amount=1;
            }else{
                cart[i].amount=cart[i].amount -1;
            }
        }
    }
    localStorage.setItem("addCart",JSON.stringify(cart))
    return {
        ...state,
        cart: JSON.parse(localStorage.getItem("addCart"))
    }

} else if(action.type==="INCREMENT"){
    let {id, cart} = action.payload;
    for(let i=0;i<cart.length;i++){
        if(id===cart[i].id){
            if(cart[i].amount===cart[i].max){
                cart[i].amount=cart[i].max;
            }else{
                cart[i].amount=cart[i].amount +1;
            }
        }
    }
    localStorage.setItem("addCart",JSON.stringify(cart))
    return {
        ...state,
        cart: JSON.parse(localStorage.getItem("addCart"))
    }
    
}else if(action.type==="TOTAL_ITEM"){
    let total = 0;
        for(let i=0;i<state.cart.length;i++){
            total+=state.cart[i].amount
        }
        return {
            ...state,
            total_item:total
        }
}else if(action.type === "TOTAL_PRICE"){
    let totalPrice=0;
    for(let i=0;i<state.cart.length;i++){
        totalPrice+=state.cart[i].amount*state.cart[i].price
    }
    return {
        ...state,
        total_price:totalPrice
    }
}
  return state
}

export default cartReducer
