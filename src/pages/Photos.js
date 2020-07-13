import React, {useContext} from 'react';
import Image from '../components/Image';
import {Context} from '../Context';
import {getClass} from '../utils/getClass';

const Photos = () => {
    const {allPhotos} = useContext(Context);

    const photos = allPhotos.map((photo, index) => (
        <Image key={photo.id} img={photo} className={getClass(index)}/>
    ));

    return (
        <main className="photos">
            {photos}
        </main>
    );
}

export default Photos;