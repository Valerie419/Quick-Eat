document.addEventListener("DOMContentLoaded", () => {
    renderitems();
});

function renderitems(){ 
    const cart_Items = getItems();
    const cartItems_el = document.querySelector(".cart-items");

    // Clear DOM
    cartItems_el.innerHTML = "";
    
    cart_Items.forEach((item) => { 
    const divEl = document.createElement("div");
    divEl.classList.add("cart-item");
    
    
    const innerHTML = `
    <div class="food-1">
    <div class="image">
    <img src="./images/food-1.png" alt="image">
    </div>
            <div class="text">
                <h2>Cusiine-Pizza</h2>
                </div>
                <div class="amount">
                <h2>7,000</h2>
                </div>
                <div class="amount-plus">
                <i class="fas fa-minus"></i>
                <h3>1</h3>
                <i class="fas fa-plus"></i>
                </div>
                <i class="fas fa-xmark"></i>
                </div> `
                
        div.innerHTML = innerHTML;
        const incrementBtn = divEl.querySelector('.add');
        const decrementBtn = divEl.querySelector("subtract");
        const deleteBtn = divEl.querySelector('#deleteBtn');

        incrementBtn.addEventListener("click", () => handleIncrement(item));
        decrementBtn.addEventListener("click", () => handleDecrement(item));
        deleteBtn.addEventListener("click", () => handleDelete(item));
        carItemsEl.innerHTML =carItemsEl;
        carItemsEl.append(divEl);
    });

};

function handleIncrement(item) {
    const cart_items = getItems();
    const newCartItems = cart_items.map((cart_items) =>{
        if(cart_item.id == item.id && cart_item.quantity + 1) {
            return ( ...cart_item, quantity: );
        } else {
            return cart_item;
        }
    });
    localStorage.setItem("cart-items", JSON.stringify(newCartItems));
    renderitems();
}

// Delete item
function handleDelete(item) {
    const cart_Items = getItems();
    const newCartitems = cart_Items.filter(
        (cart_Item) => cart_Item.id !== item.id
    );
}

function renderitems() {
    const cart_Items = getItems();
    const cartItems_el = document.querySelector('.cart-items')
}
