import React from 'react';
import ProgressiveImage from 'react-progressive-image';

const ImageElement = (props) => (
    <ProgressiveImage src={props.img} placeholder="/images/loader.gif">
        {(src, loading) => {
            if(loading) 
                return <img style={{ opacity: 0.2, height:200, width: 200}} src={src} alt="an image" />
            else{
                if(props.newStyle)
                    return <img src={src} style={props.newStyle}></img>
                else
                    return <img src={src} style={{ maxWidth: '100%' }}></img>
            }
        }}
    </ProgressiveImage>
);

export default ImageElement;