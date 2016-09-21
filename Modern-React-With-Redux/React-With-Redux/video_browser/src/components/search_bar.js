import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // only in the constructor function do we manipulate state like this.
    // everywhere else, we will use a method called this.setState();
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} 
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
