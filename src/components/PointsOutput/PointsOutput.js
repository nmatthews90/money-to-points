import React from "react";

const PointsOutput = props => {
  let purchaseAmount = props.purchaseAmount;
  let overallPoints = 0;

  if (purchaseAmount >= 50 && purchaseAmount <= 100) {
    overallPoints = purchaseAmount - 50;
  } else if (purchaseAmount > 100) {
    overallPoints = 2 * (purchaseAmount - 100) + 50;
  }

  return (
    <div>
      <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        <div className="tc">
          <p className="f3 mb2">Total Points</p>
          <p className="f4 fw4 gray mt0">{overallPoints}</p>
        </div>
      </article>
    </div>
  );
};

export default PointsOutput;
