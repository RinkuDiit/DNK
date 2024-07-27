import React, { useEffect, useState } from 'react';

const ImageComponent = () => {
    const [image, setImage] = useState(null);
    const url = "https://api.escuelajs.co/api/v1/files/6bff.png";

    useEffect(() => {
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const imageUrl = URL.createObjectURL(blob);
                setImage(imageUrl);
            })
            .catch(error => console.error('Error fetching the image:', error));
    }, []);

    return (
        <div>
            {image ? <img src={image} alt="Fetched from API" /> : 'Loading...'}
        </div>
    );
};

export default ImageComponent;
