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

## Full list of functions in lib1
At the moment there's no real documentation. I suggest looking in the source to see exactly how they behave.
```javascript
charAt
charCodeAt
concat
contains
endsWith
exec
hasOwnProperty
indexOf
isPrototypeOf
join
lastIndexOf
length
localCompare
match
pop
pop_
push
propertyIsEnumerable
replace
reverse
search
shift
shift_
slice
sort
splice
splice_
split
startsWith
substr
substring
test
toExponential
toFixed
toLocaleLowerCase
toLocaleUpperCase
toPrecision
toString
toUpperCase
trim
trimLeft
trimRight
unshift
valueOf
```
