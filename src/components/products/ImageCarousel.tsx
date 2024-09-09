import React from 'react';
import { Carousel } from 'antd';

function ImageCarousel(images: string[]) {
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
}
