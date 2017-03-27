import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import User from '../components/User';
import { addNumber, minusNumber, setName, setAge } from '../actions/actions';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Redux Playground</h2>
        </div>
        <Counter number={this.props.math.result} />
        <button onClick={() => this.props.addNumber(1)}>+</button>
        <button onClick={() => this.props.minusNumber(1)}>-</button>
        <User name={this.props.user.name} age={this.props.user.age} />
        <button onClick={() => this.props.setName('Egeszege')}>Change name</button>
        <button onClick={() => this.props.setAge(35)}>Change age</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    math: state.math,
    user: state.user
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNumber: (number) => {
      dispatch(addNumber(number));
    },
    minusNumber: (number) => {
      dispatch(minusNumber(number));
    },
    setName: (name) => {
      dispatch(setName(name));
    },
    setAge: (number) => {
      dispatch(setAge(number));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
