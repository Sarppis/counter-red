import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from './store/actions';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>This is my counter: {this.props.count}</h1>
        <button onClick={this.props.onIncCounter}>Add one</button>
        <button onClick={this.props.onDecCounter}>Remove one</button>
        <button onClick={this.props.AddCounter}>Add five</button>
        <button onClick={this.props.removeCounter}>Delete five</button>
        <button onClick={() => this.props.onStoreResult(this.props.count)}>Store value</button>

        <ul>
          {this.props.storedResult.map(item => (
            <li key={item.id} onClick={() => this.props.onDeleteResult(item.id)}>{item.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.ctr.counter,
    storedResult: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncCounter: () => dispatch({ type: actionTypes.INCREASE }),
    onDecCounter: () => dispatch({ type: actionTypes.DECREASE }),
    AddCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
    removeCounter: () => dispatch({ type: actionTypes.REMOVE, value: 5 }),
    onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result}),
    onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElementId: id})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

