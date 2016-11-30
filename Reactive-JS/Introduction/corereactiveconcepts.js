// Vocab
//    Observable: a thing that can be observed (duh)
//    Subscriber: a thing that latches on to observables and gets notified whenever the observable produces a new value

/*****

Core Concept #1: Push vs Pull

***See pushvspull.png***

Pull model:
  - All about having data available for different events
  - Collection, iterator, array, object, or any data that's sitting there that you ask for at some point
  - On an event such as a button push or an interval timeout, we pull data from a collection by iterating over it

Push model (reactive model):
  - Data source contains all the concepts and behaviors that it needs in order to determine when it has new data, when an error happens, or when it completes

  - Observable: reactive data source
  - Reactive data source: a data source that produces items over a period of time and at some point will error or complete

***See pull and push code examples***

Pull mode code:
  - Longer and not as clean
Push mode code:
  - Much more descriptive and readable

*****/

/*****

Core Concept #2: Everything is a database!!!

- Every object produces a value, completes, or errors
- Every single event is a stream of items that are being produced over time which either 1) completes and finishes or 2) errors and terminates!
  - Mouse movements
  - Current User
  - Web Requests
  - Input Boxes
  - ...and more!

*****/


// RX is a group of frameworks that brings Reactive Programming to MANY languages!
//    C#, Java, JavaScript, C++, Ruby, Python, ...
