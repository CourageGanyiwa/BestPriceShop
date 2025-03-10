export let cart = [
    {
    product_id: 1,
    product_name: 'Black Addidas Jacket',
    price: 19999,
    img: '/frontend/images/blacket-jacket.jpeg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,libcero mari yacho.',
    quantity: 1
},
{
    product_id: 1,
    product_name: 'Black Addidas Jacket',
    price: 19999,
    img: '/frontend/images/blacket-jacket.jpeg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,libcero mari yacho.',
    quantity: 7
}
]

cartQuantity()

export function cartQuantity() {
    if (!cart) return 'There is nothing in the cart';

    return cart.reduce((cartItem, index) => cartItem.quantity + index.quantity);
    
    // console.log(cart)
}