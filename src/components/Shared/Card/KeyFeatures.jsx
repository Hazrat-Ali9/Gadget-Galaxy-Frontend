import React from 'react';

const KeyFeatures = ({ item }) => {
    return (
        <div>
            {!item.key ? `${item.feature}` : `${item.key} : ${item.feature}`}
        </div>
    );
};

export default KeyFeatures;
