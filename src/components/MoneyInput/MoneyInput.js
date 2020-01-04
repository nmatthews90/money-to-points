import React from 'react';
import tachyons from 'tachyons';

const MoneyInput = ( {changeHandler, userInput} ) => {
    return (
      <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <p> Enter in an amount</p>
        <input
          className='f4 pa w-30 center'
          type="number"
          onChange={changeHandler}
          value={userInput}
        />
      </div>
    );
}

export default MoneyInput;