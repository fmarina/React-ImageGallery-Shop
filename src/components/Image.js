import React, {useState, useContext} from 'react';
import {Context} from '../Context';
import PropTypes from 'prop-types';

const Image = ({className, img}) => {
    const [hovered, setHovered] = useState(false);

    const {toggleFavorite} = useContext(Context);    

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
    
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

    return (
        <div 
            className={`${className} image-container`}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}            
        >
            <img src={img.url} className="image-grid" alt="a pic" />
            {heartIcon()}
            {cartIcon}
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