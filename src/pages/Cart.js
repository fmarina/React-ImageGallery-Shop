import React, {useContext, useState} from 'react';
import {Context} from '../Context';
import CartItem from '../components/CartItem';

const Cart = () => {
    const [buttonText, setButtonText] = useState("Place Order");    
    const {cartItems, emptyCart} = useContext(Context); 

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item}/>
    ));

    const totalCost = 5.99 * cartItems.length;
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

    const placeOrder = () => {
        setButtonText("Ordering...");
        setTimeout(() => {
            setButtonText("Place Order");
            console.log("Order Placed!"); 
            emptyCart();           
        }, 2000);
    }

    return (
        <main className="cart-page">
            <h1>Check Out</h1>
            <div className="container-cart">
                {cartItemElements}
                <p className="total-cost">Total: {totalCostDisplay}</p>
                <div className="order-button">
                    <button onClick={placeOrder}>{buttonText}</button>
                </div>
            </div>
        </main>
    );
}

export default Cart;