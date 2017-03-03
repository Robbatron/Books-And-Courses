import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(event) {
    event.preventDefault(); // will stop page from refreshing
    console.log('You changed the URL')
    // first grab the text from the box
    const storeId = this.storeInput.value;
    // second we're going to transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`)
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        { /* binding "this" above will make "this.storeInput" available to the goToStore method */ }
        <h2>Please Enter A Store</h2>
        <input type="text"
               required placeholder="Store Name"
               defaultValue={getFunName()}
               ref={(input) => {this.storeInput = input}}
        />
        { /* Note on the input's "ref" attribute:
          when this input is rendered on the page, it's going to
          put a reference to the input on the class itself */
        }
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

{ /* What this does is tell React that the StorePicker component expects something called a "router" from a parent component */ }
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
