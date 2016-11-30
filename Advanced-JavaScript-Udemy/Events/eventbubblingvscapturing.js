// Q. What is the difference between "event bubbling" and "event capturing" in js?
// A. see screenshot

// When adding an "addEventListener", we can specify whether to listen at the event capturing or bubbling phase with a simple boolean after the callback function.
// true = capturing phase, false = bubbling phase

// When you click on something, there are two phases.
// Capturing phase: Events go from root down to to target ( true )
// Bubbling phase: Events go from target back up to root ( false )
//  - default is listening to the bubbling phase