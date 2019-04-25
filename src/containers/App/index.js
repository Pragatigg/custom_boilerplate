import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
 render() {
   return (
     <h2>APP</h2>
   )
 }
}

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
