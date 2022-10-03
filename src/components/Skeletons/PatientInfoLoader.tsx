import React from 'react';
import ContentLoader from 'react-content-loader';

const PatientInfoLoader = () => {

    return (
        <ContentLoader
            speed={2}
            width={1080}
            height={96}
            viewBox="0 0 1080 96"
            backgroundColor="#1A1C27"
            foregroundColor="#6b6b6b"
        >
            <rect x="0" y="0" rx="0" ry="0" width="1080" height="96" />
        </ContentLoader>
    )
};

export default PatientInfoLoader;