import React, {useContext, useState} from 'react';
import {Context} from '../Context';
import PropTypes from 'prop-types';

const CartItem = ({item}) => {
    const [hovered, setHovered] = useState(false);
    const {removeImageFromCart} = useContext(Context);

    const iClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

    return (
        <div className="cart-item">           
            <i className={iClassName} 
               onClick={() => removeImageFromCart(item.id)}
               onMouseEnter={() => setHovered(true)}
               onMouseLeave={() => setHovered(false)}>
            </i>
            <img src={item.url} alt="a pic" width="130px" />
            <p>$5.99</p>
        </div>
    );
}

CartItem.propTypes = {
    item : PropTypes.shape({
        url : PropTypes.string.isRequired
    })
}

export default CartItem;