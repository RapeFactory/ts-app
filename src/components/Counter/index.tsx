import { Component, MouseEventHandler, ReactNode } from 'react';
import PropTypes from 'prop-types';

interface IState {
  count: number;
}

export interface RenderProps {
  increment: MouseEventHandler<HTMLButtonElement>;
  decrement: MouseEventHandler<HTMLButtonElement>;
  reset: MouseEventHandler<HTMLButtonElement>;
  count: number;
}

interface IProps {
  children: (props: RenderProps) => ReactNode;
}

class Counter extends Component<IProps, IState> {
  state = {
    count: Math.floor(Math.random() * 20) - 10,
  };

  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  // Increase count
  increment = () => {
    const { count } = this.state;
    return this.setState({ count: count + 1 });
  };

  // Decrease count
  decrement = () => {
    const { count } = this.state;
    return this.setState({ count: count - 1 });
  };

  // Reset count
  reset = () => {
    return this.setState({ count: 0 });
  };

  render() {
    const {
      increment,
      decrement,
      reset,
      state: { count },
      props: { children },
    } = this;

    return children({
      increment,
      decrement,
      reset,
      count,
    });
  }
}

Counter.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Counter;
