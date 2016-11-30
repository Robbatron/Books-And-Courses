function Field(value) {
    this.value = value;
}

Field.prototype.validate = function () {
    return this.value.length > 0;
};

var username = new Field("2cool");
var password = new Field("my_password");
var birthdate = new Field("10/10/2010");

// we could not do this...
username.validate() && password.validate() && birthdate.validate();
// BUT this would get very tedious over time as new values are added.


// So, how can we refactor this?

var fields = [username, password, birthdate];

var formIsValid = fields.every(field => field.validate());

if (formIsValid) {
    /* allow user to submit */
} else {
    /* show an error message */
}