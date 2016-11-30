console.log(this); // points to global window object

this.robbie = 1; // setting prop on global window object

console.log(this.robbie); // 1
console.log(window.robbie); // 1
console.log(robbie); // 1

function checkThis() {
    console.log(this);
}
checkThis();

// so far, we might come to the conclusion that 'this' is always pointing to the global object, but that is not the case.

var robbie = {
    checkThis: function () {
        // "use strict"; // now you cannot set property 'moo' to undefined...or
        var self = this; // now we're assigning 'this' to always mean 'robbie'
        console.log(self);

        function checkOther() {
            this.moo = 1; // setting moo on the window object
            console.log(self);
        }
        checkOther();

        console.log(self.moo); // would expect 1, but it is actually undefined because line 21 actually set this to the window object
        console.log(window.moo); // 1
    }
};
robbie.checkThis();
console.log(robbie);

// In this context, 'this' is pointing to the closest object.

// 'this' is determined by the CALLING CONTEXT


var func = robbie.checkThis;
func();