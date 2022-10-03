import React from 'react';
import ContentLoader from "react-content-loader";

const XrayPhotoLoader = () => {

    return (
        <ContentLoader
            speed={2}
            width={640}
            height={854}
            viewBox="0 0 640 854"
            backgroundColor="#ababab"
            foregroundColor="#6b6b6b"
        >
            <rect x="0" y="0" rx="0" ry="0" width="640" height="854" />
        </ContentLoader>
    )
};

export default XrayPhotoLoader;