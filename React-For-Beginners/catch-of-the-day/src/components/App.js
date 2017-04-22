import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import AddFishForm from './AddFishForm';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  constructor() {
    super();

    this.addFish = this.addFish.bind(this); // bind add fish to the app itself
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);

    // getInitialState
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {
    // update our state
    const fishes = {...this.state.fishes}; // what is this? this is our existing fishes state
    // the above will take every item from the object and spread it into an object (takes a copy of the state and puts it in a new one)

    // add in our new fish
    const timestamp = Date.now(); //always gonna be unique
    fishes[`fish-${timestamp}`] = fish;

    // set state
    this.setState({ fishes });
  }

  loadSamples() {
      this.setState({
        fishes: sampleFishes
      })
  }

  addToOrder(key) {
    // take a copy of our state
    const order = {...this.state.order};
    // update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1;
    // update our state
    this.setState({ order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="list-of-fishes">
            {
              Object
                .keys(this.state.fishes)
                .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)
            }
          </ul>
        </div>
        <Order/>
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} /> { /* Pass function down to Inventory */}
      </div>
    )
  }
}

export default App;
