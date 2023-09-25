// use local storage to manage cart data 

const addToDb = (id) =>{

    let shoppingCart = {};
    localStorage.setItem('Shopping-cart',JSON.stringify(shoppingCart));
    const quantity = localStorage.getItem(id);
    if(quantity){
        const newQuantity = parseInt(quantity) +1;
        // localStorage.setItem(id, newQuantity)

    }
    else{
        localStorage.setItem(id, 1);

    }



   

}
export {addToDb}