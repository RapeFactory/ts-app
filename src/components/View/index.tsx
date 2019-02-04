import React, { FunctionComponent, MouseEventHandler } from 'react';
import PropTypes from 'prop-types';
import { RenderProps } from '../Counter';

const View: FunctionComponent<RenderProps> = ({ increment, decrement, reset, count }) => (
  <div className="Counter">
    <div>
      <h3>Render Props Counter</h3>
    </div>
    <div>
      <div className="counter"><p>{count}</p></div>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  </div>
);

View.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default View;
