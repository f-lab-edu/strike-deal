import React from 'react';
import { Carousel } from 'antd';

const ImageCarousel = ({ images }: { images: string[] }) => {
    return (
        <Carousel arrows>
            {images.map((url) => {
                return (
                    <div>
                        <img src={url} />
                    </div>
                );
            })}
        </Carousel>
    );
};

export default ImageCarousel;
