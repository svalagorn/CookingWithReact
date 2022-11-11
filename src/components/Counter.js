import React, { Component } from 'react';
import { ThemeContext } from '../App';

//this is verbose and outdated
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(style) => (
          <div>
            <button style={style} onClick={() => this.changeCount(-1)}>
              -
            </button>
            <span>{this.state.count}</span>
            <button style={style} onClick={() => this.changeCount(+1)}>
              +
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }

  changeCount(amount) {
    this.setState((prevState) => {
      return { count: prevState.count + amount };
    });
    //subsequent calls would not have worked without prevState since setState is async an asynchronous operation
    this.setState((prevState) => {
      return { count: prevState.count + amount };
    });
  }
}
