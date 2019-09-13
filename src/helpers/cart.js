export default (data) => {
    // Check if cart exists in localstorage
    let cart = localStorage.getItem("cart") && localStorage.getItem("cart") !== "undefined";

    if (cart) {
        // Parse the array from string to json
        const currentCart = JSON.parse(cart);

        // Define update cart array
        let updatedCart = [...currentCart]

        // Check if current product exists in the cart
        currentCart.map($product => {
            if (data._id === $product._id) {
                // Update the products quantity
                product.quantity + 1

            }
        })
    }
}
