// Q. What is a paradigm?
// A. A mindset. In programming, we use the word as a way to classify programming languages based on their features and style.


//// Evolution of programming paradigms...
/*

Procedural:

- The idea that our programs are collections of functions and that those functions execute top-to-bottom.
- Line by line giving instructions to the computer.

Overview:
  - Primitive: procedure
  - "Imperative" execution
  - Relies heavily on global state

Pros:
  - Simple to write
  - Easy to understand
Cons:
  - Difficult to maintain
  - Prone to difficult bugs

*/

/*

Object Oriented Programming:

- An object is a collection of state and behavior
- OOP fixes the pitfall of Procedural programming by localizing state and behavior to individual objects

Overview:
  - Primitive: object
  - Objects have well defined interfaces

Pros:
  - Behavior is localized
  - Objects control state
  - Composition
  - Code is still imperative
Cons:
  - Can be more verbose
  - Code is still imperative

*/

/*

Declarative Programming:

  - Declarative is about you describing what you want the computer to do, but not telling the computer how to do it.
    - Think of SQL commands and Regex, where you type a fairly simple command and the computer does a lot of work to translate it.

  Overview:
    - More like data than code

  Pros:
    - Data is self-describing
    - As powerful as the interpreter allows
  Cons:
    - As limiting as the interpreter allows

*/

/*

Functional Programming:

  - A paradigm that has seen a renaissance in the past decade.
  - Like declarative, we tell the computer what we want to have happen, not exactly how to accomplish it.

  Overview:
    - Primitive: function
    - Little state
    - Few side effects

  Pros:
    - Easy to reason about
    - Composition
    - Very expressive
    - Works great with OO
    - Basis in higher math
  Cons:
    - Thinking differently (also a pro, but it takes time to learn)
    - Not always the best choice
    - Basis in higher math (if you haven't seen these concepts before, it could look foreign)

*/

/*

Reactive Programming:

  - Very similar to declarative and functional paradigms BUT there is a distinction...
    - We describe our data in terms of streams of events/changes/timers
    - We create a pipeline so that when data changes, the pipeline then gets processed and manipulated before returning

  Overview:
    - Primitive: observable

  Pros:
    - Composition
    - Expressive
    - Data flows unidirectionally
  Cons:
    - Thinking differently (harder to pickup)

*/


















