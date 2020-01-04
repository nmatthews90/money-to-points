import React from 'react';

const PointsOutput = (props) => {

    let purchaseAmount = props.purchaseAmount;

    if (purchaseAmount >= 50 && purchaseAmount < 100) {
        return purchaseAmount - 50;
    } else if (purchaseAmount > 100) {
        return (2 * (purchaseAmount - 100) + 50);
    }
    return 0;

    
}

export default PointsOutput;

