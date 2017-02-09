import React, { Component } from 'react'

class SearchBar extends Component {

  constructor(props) {
    super(props)
    // initialize state by creating a new object and assigning to this.state
    // the object we pass will also contain properties that we want to record on the state
    this.state = {term: ''}
  }

  render() {
    // setState : an object that contains the new state that we want to give our component
    // controlled field : a form element whose value is set by the state
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar
