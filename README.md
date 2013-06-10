
# Some functional stuff

Collection of methods as curried functions.

Example:

```javascript
var a = [ 1, 2, 3 ];

// To push something onto the array, we'd normally do a.push( 'z' )
// but then we altered our array. Instead we do...

var b = push( 'x', a );

console.log( b ); // =>  [ 1, 2, 3, 'x' ]

// a is unaltered
console.log( a ); // =>  [ 1, 2, 3 ]

// Functions that take multiple arguments can be curried

var addZ = push( 'y' );

// addZ is now a function that takes an array and returns and array with 'y'
// pushed onto it

var c = addZ( a );

console.log( c ); // =>  [ 1, 2, 3, 'y' ]
```

## TODO
* Make functions that work for arrays work with strings too
* Add `partial()` to utils.js
* Figure out how to make a `flip()`
* Tests
