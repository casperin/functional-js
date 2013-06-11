// For running quick and dirty tests

var log = function(x){ console.log( x ); return x; }
  , a = [ 1, 2, 3 ]
  , b = [ 4, 5, 6 ]
  , c = [ 'a', 'b', 'c' ]
  , d = [ 1, 2, 'a', 'c' ]
  , e = [ ]
  , f = 'foo'
  , g = 'bar'
  , h = [ 2, 6, 1, 3, 0, 100, 3, 4 ]
  , i = ["Delta", "alpha", "CHARLIE", "bravo"]
  , j = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
  , k = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'two' ]
  , l = { one: 1, two: 2, three: 3 }
  , m = 'A longer string'
  , n = 123456789
  , o = 12345.6789
  ;


var foo = function( a, b, c ) {
  console.log( 'a: ' + a );
  console.log( 'b: ' + b );
  console.log( 'c: ' + c );
}.autoCurry();

foo.flip()( 1, 2, 3 );
log('--');
foo(1).flip()( 2, 3 );
log('--');



// Here's an error
foo.flip()( 1 )( 2, 3 );
// What happens is that flip() returns a fn that flips the first two arguments
// passed to it. Since it is only passed one the first time around, it doesn't
// actually flip anything.

log('--');

// Better illustration of why it's a problem

sub = function( a, b ) { return a - b }.autoCurry();

subXFromFive = sub( 5 );    // partially applied
log( subXFromFive( 2 ) );   // -> 3

subFiveFromX = sub.flip()( 5 );
log( subFiveFromX( 2 ) );   // -> 3 (should be -3)
