import React from 'react';

const Header = () => {
    return (
      <div className="bb b--white-60 pv2">
        <p className="f3">
          A customer receives 2 points for every dollar spent over $100 in each
          transaction,
          <br />
          plus 1 point for every dollar spent over $50 in each transaction.
        </p>
        <p>(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).</p>
      </div>
    );
}
export default Header; 