
# Some functional js

Collection of methods as curried functions.
* Arrays
* Numbers
* Objects
* Regexp
* Strings
as autoCurried functions of the same name.

Plus some tools in util.js:
* curry()
* autoCurry()
* dot()
* compose()
* flip()


Example:

```javascript
var a = [ 1, 2, 3 ];

// To push something onto the array, we'd normally do a.push( 'x' )
// but then we altered our array. Instead we do...

var b = push( 'x', a );

console.log( b ); // =>  [ 1, 2, 3, 'x' ]

// a is unaltered
console.log( a ); // =>  [ 1, 2, 3 ]

// Functions that take multiple arguments can be curried

var addY = push( 'y' );

// addY is now a function that takes an array and returns and array with 'y'
// pushed onto it

var c = addY( a );

console.log( c ); // =>  [ 1, 2, 3, 'y' ]


// Flipping the arguments
var sub = function( a , b ){ 
  return a - b;
}.autoCurry();

var flippedSub = flip( sub );

console.log( sub( 1, 2 ) ); // -> -1
console.log( flippedSub( 1, 2 ) ); // -> 1
```

## TODO
* [x] Make functions that work for arrays work with strings too
* [ ] Add `partial()` to utils.js
* [ ] Figure out how to make a `flip()`
  * Current implementation is suboptimal since it doesn't work properly with currying
* [x] Tests
