import React from 'react';

const Install = ({installApp}) => {
    console.log(installApp)
    return (
        <div>
            <h1>{installApp.title}</h1>
        </div>
    );
};

export default Install;