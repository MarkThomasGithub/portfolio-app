import React from 'react';
import ProgressiveImage from 'react-progressive-image';

const ImageElement = (props) => (
    <ProgressiveImage src={props.img} placeholder="/images/loader.gif">
        {(src, loading) => (
            <img style={{ opacity: loading ? 0.2 : 1}} src={src} alt="an image" />
        )}
    </ProgressiveImage>
);

export default ImageElement;