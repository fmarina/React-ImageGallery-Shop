import React, {useState} from 'react';

const Image = ({className, img}) => {
    const [hovered, setHovered] = useState(false);
    
    return (
        <div 
            className={`${className} image-container`}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid" alt="a pic" />
        </div>
    );
}

export default Image;