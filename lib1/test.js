
var log = function(x){ console.log( x ); }
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
  ;



log( m );
log( split( 'n', m ) );
log( m );

var str = "abcdefghij";
log("(1,2): "    + str.substr(1,2));

var str = "   foo  ";
 
alert(str.length); // 8

str = str.trimLeft();
alert(str.length); // 5
document.write( str );
