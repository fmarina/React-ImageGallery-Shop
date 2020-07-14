import React, {useState, useEffect} from 'react';

const Context = React.createContext();

function ContextProvider(props) {
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setAllPhotos(data));
    }, []);

    const toggleFavorite = (id) => {
        const photos = allPhotos.map(photo => (
            (photo.id === id)
            ? { ...photo, isFavorite : !photo.isFavorite}
            : photo
        ));
        setAllPhotos(photos);
    }

    const addImageToCart = (newItem) => {
        setCartItems(prevItems => [...prevItems, newItem]);
    }

    return (
        <Context.Provider value={{
            allPhotos, toggleFavorite, addImageToCart, cartItems
        }}>
            {props.children}
        </Context.Provider>
    );

}

export {ContextProvider, Context};