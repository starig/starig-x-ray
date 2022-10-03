import React from 'react';
import ContentLoader from "react-content-loader";

const XrayResultsLoader = () => {

    return (
        <ContentLoader
            speed={2}
            width={336}
            height={1018}
            viewBox="0 0 336 1018"
            backgroundColor="#1A1C27"
            foregroundColor="#6b6b6b"
        >
            <rect x="0" y="0" rx="0" ry="0" width="336" height="1018" />
        </ContentLoader>
    )
};

export default XrayResultsLoader;