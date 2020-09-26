const { Observable } = require('rxjs');

let observable = new Observable((observer) => {
    observer.next("a")
    observer.next("b")
})

observable.subscribe(value => {
    console.log(value)
})

/* Difference Between Observables and Promises */

// Promises and Observables both handle async activity in JavaScript

// Single vs Multiple Values

// Eager vs Lazy Execution:
// A Promise executes the moment it is defined
// An Observable executes only when subscribe() is called:


// Cancellable
// A Promise can't be canceled. That's it. No example needed.
// An Observable can be canceled via unsubscribe()
