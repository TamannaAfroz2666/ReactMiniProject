// use local storage to manage cart data 

const addToDb = (id) =>{

    let shoppingCart;

    // get the shopping cart 
    const storedCart = localStorage.getItem('Shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
        console.log('shoppingCart',shoppingCart);
    }
    else{
        shoppingCart = {};
    }



    // add quantity 
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity +1;
        shoppingCart[id] = newQuantity;

        // localStorage.setItem(id, newQuantity)

    }
    else{
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1);

    }
    // nichey cz jkono item add korte hobe new or old 
    localStorage.setItem('Shopping-cart',JSON.stringify(shoppingCart));


   

}
// for remove funtion 

const removeFromDb = (id) =>{
    const storedCart = localStorage.getItem('Shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart)
        if(id in shoppingCart){
            // console.log('card delete');
            delete shoppingCart[id];
            localStorage.setItem('Shopping-cart',JSON.stringify(shoppingCart));


        }
    }

}
export {addToDb, removeFromDb}