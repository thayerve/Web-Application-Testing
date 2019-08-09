import React from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      strikes: 0,
      balls: 0
    };
  }
  /// need to move handler functions to Dashboard but keep state updating here, separate them out like Levi said

    handleStrike() {
      if (this.state.strikes >= 3){
          this.setState({strikes: 0});
          console.log(this.state.strikes, " strikes");
      } else {
        let newStrikes = this.state.strikes + 1;
        this.setState({strikes: newStrikes});
        console.log(this.state.strikes, " strikes");
      };
    }

    handleBall() {
      if (this.state.balls >= 4){
        this.setState({balls: 0});
        console.log(this.state.balls, " balls");
      } else {
        let newBalls = this.state.balls + 1;
        this.setState({balls: newBalls});
        console.log(this.state.balls, " balls");
      };
    }

    handleFoul() {
      console.log('foul button');
    }

    handleHit() {
      console.log('hit button');
    }
    
  
  render(){
    console.log(`Starting strikes: ${this.state.strikes}, Starting balls: ${this.state.balls}`);
    return (
      <div className="App">
        <h1>Display: </h1>
        <Display strikes={this.state.strikes} balls={this.state.balls} />
        <br />
        <h1>Dashboard:</h1>
        <Dashboard handleStrike = {this.handleStrike} handleBall = {this.handleBall} />
      </div>
    );
  };
}

export default App;
