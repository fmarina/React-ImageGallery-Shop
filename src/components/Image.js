import React, {useState, useContext} from 'react';
import {Context} from '../Context';

const Image = ({className, img}) => {
    const [hovered, setHovered] = useState(false);

    const {toggleFavorite} = useContext(Context);    

    const heartIcon = hovered && 
        <i className="ri-heart-line favorite" 
           onClick={(e) => toggleFavorite(img.id)}>
        </i>
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>
    

    return (
        <div 
            className={`${className} image-container`}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}            
        >
            <img src={img.url} className="image-grid" alt="a pic" />
            {heartIcon}
            {cartIcon}
        </div>
    );
}

export default Image;