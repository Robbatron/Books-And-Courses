var Greeter = React.createClass({
  getDefaultProps: function() {
    return { // props get defined, either the default (below) or the ones passed into React
      name: 'React',
      message: 'me too, thanks.'
    };
  },
  getInitialState: function() {
    return { // sets the state's name to the name property value
      name: this.props.name
    };
  },
  onButtonClick: function(e) {
    e.preventDefault();

    var nameRef = this.refs.name;
    var name = nameRef.value;

    nameRef.value = '';

    // get that dirty data out of my face!
    if (typeof name === 'string' && name.length > 0) {
      this.setState({
        name: name // will re-render the parts of the component that matter, called from button click
      });
    }

  },
  render: function () {
    var name = this.state.name; // fetches the name value
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>

      <form onSubmit={this.onButtonClick}>
        <input type="text" ref="name" />
        <button>Set Name</button>
      </form>
      </div>
    );
  }
});

var firstName = 'Robbie';
var msg = 'Angular? That\'s so 2012.';
ReactDOM.render(
  <Greeter name={firstName} message={msg}/>,
  document.getElementById('app')
);
