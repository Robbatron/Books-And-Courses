var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'me too, thanks.'
    };
  },
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
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
