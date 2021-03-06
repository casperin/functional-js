# Some functional js

Collection of 44 methods as curried functions.
* Arrays
* Numbers
* Objects
* Regexp
* Strings

Plus some tools in util.js:
* curry()
* autoCurry()
* dot()
* compose()
* flip()

## Documentation
* [Documentation here](http://casperin.github.io/functional-js/)


## Example

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
```

## TODO
* [x] Make functions that work for arrays work with strings too
* [ ] Add `partial()` to utils.js
* [ ] Figure out how to make a `flip()`
  * Current implementation is suboptimal since it doesn't work properly with currying
* [x] Tests
* [x] Documentation (in progress I guess)
