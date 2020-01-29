import React from 'react';

const MoneyInput = ( {changeHandler, userInput} ) => {
    return (
      <div>
        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div className="tc">
            <p className="f3 mb2">Dollar Amount</p>
            <p className="f4 fw4 gray mt0">
              <input
                className="f4 w-50 dib"
                type="number"
                onChange={changeHandler}
                value={userInput}
                placeholder="$"
              />
            </p>
          </div>
        </article>
      </div>
    );
}

export default MoneyInput;