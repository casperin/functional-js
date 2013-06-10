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


  // Object.toLocaleString()
  // Number.toLocaleString()
  // ! optional args
  , toLocaleString = function( a ){
      return toLocaleString( a );
    }


  // Array.toString()
  // String.toString()
  // Object.toString()
  , toString = function( a ){
      return a.toString();
    }

  // String.valueOf()
  // Object.value()
  , valueOf = function( a ){
      return a.valueOf();
    }

  ; 
