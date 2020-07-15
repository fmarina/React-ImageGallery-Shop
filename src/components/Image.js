import React, {useContext} from 'react';
import {Context} from '../Context';
import PropTypes from 'prop-types';
import useHover from '../hooks/useHover';

const Image = ({className, img}) => {
    const [hovered, ref] = useHover();

    const {toggleFavorite, addImageToCart, cartItems, removeImageFromCart} = useContext(Context);

    const heartIcon = () => {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" 
                      onClick={(e) => toggleFavorite(img.id)}>
                   </i>
        }
        else if (hovered) {
            return <i className="ri-heart-line favorite"
                      onClick={(e) => toggleFavorite(img.id)}>
                   </i>
        }
    }
    
    const cartIcon = () => {
        const image = cartItems.find(image => image.id === img.id);
        return (image)
        ? <i className="ri-shopping-cart-fill cart" onClick={() => removeImageFromCart(img.id)}></i>
        : (hovered) && <i className="ri-add-circle-line cart" onClick={() => addImageToCart(img)}></i>
    }

    return (
        <div 
            className={`${className} image-container`}
            ref={ref}
        >
            <img src={img.url} className="image-grid" alt="a pic" />
            {heartIcon()}
            {cartIcon()}
        </div>
    );
}

Image.propTypes = {
    className : PropTypes.string,
    img : PropTypes.shape({
        id : PropTypes.string.isRequired,
        url : PropTypes.string.isRequired,
        isFavorite : PropTypes.bool
    })
}

export default Image;