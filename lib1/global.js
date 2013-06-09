// These "methods" are shared by different types

var root = this

  // Array.concat()
  // String.concat()
  , concat = function( a, b ){
      return b.concat( a );
    }.autoCurry()


  // Array.indexOf()
  // String.indexOf()
  // ! optional args
  , indexOf = function( value, a ){
      return a.indexOf( value );
    }.autoCurry()


  // Array.lastIndexOf()
  // Array.lastIndexOf()
  // ! optional args
  , lastIndexOf = function( value, a ){
      return a.lastIndexOf( value );
    }.autoCurry()

  
  // Array.slice()
  // String.slice()
  // Forced the end argument
  , slice = function( begin, end, a ){
      return a.slice( begin, end );
    }.autoCurry()


  // Array.toString()
  // String.toString()
  , toString = function( a ){
      return a.toString();
    }

  
