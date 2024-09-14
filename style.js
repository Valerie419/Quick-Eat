const openEl = document.getElementById("openEl");
const closeEl = document.getElementById("closeEl");
const navEl = document.querySelector("navEl");

openEl.addEventListener("click", () =>{
    navEl.style.display = "flex";
    openEl.style.display = "none";
    closeEl.style.display = "block";
});


closeEl.addEventListener("click", () =>{
    navEls.style.display = "none";
    openEls.style.display = "block";
    closeEls.style.display = "none";
});

// getting items
const orderBtnEls = document.querySelectorAll("#order-btn");

orderBtnEls.forEach((orderBtn) =>{
    orderBtn.addEventListener("click",() => {
        const parentEl = orderBtn.parentElement;
        const item = {
            image: parentEl.querySelector("img").src,
            price: parentEl.querySelector("#price").innerHTML.replace(/[]/g, ""),
            name: parentEl.querySelector("#name").innerHTML,
            quantity: 1,
            id: Math.floor(Date.now() + Math.random()),
        };

        // carItems.unshift(item);
        // console.log(carItems);
        

    });
});

function addItemTocart(item) {
    const carItems =JSON.parse(localStorage.getItem("cart-items")) || [];
    carItems.unshift(item);
    localStorage.setItem("cart-items" , JSON.stringify(carItems));
}