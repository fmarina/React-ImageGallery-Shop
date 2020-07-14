import React, {useContext} from 'react';
import {Context} from '../Context';

const CartItem = ({item}) => {
    const {removeImageFromCart} = useContext(Context);
    
    return (
        <div className="cart-item">           
            <i className="ri-delete-bin-line" 
               onClick={() => removeImageFromCart(item.id)}>
            </i>
            <img src={item.url} alt="a pic" width="130px" />
            <p>$5.99</p>
        </div>
    );
}

export default CartItem;