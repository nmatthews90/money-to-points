import React from 'react';

const PointsOutput = (props) => {

    let purchaseAmount = props.purchaseAmount;
    let overallPoints = 0

    if (purchaseAmount >= 50 && purchaseAmount < 100) {
         overallPoints = purchaseAmount - 50;
    } else if (purchaseAmount > 100) {
       overallPoints = 2 * (purchaseAmount - 100) + 50;
    }
    

      return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
          <p>{overallPoints} Points</p>
        </div>
      );

    
}

export default PointsOutput;

