// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype#Methods

var root = this

  
  , charAt = function( i, s ){
      return s.charAt( i );
    }.autoCurry()


  , charCodeAt = function( i, s ){
      return s.charCodeAt( i );
    }.autoCurry()


  , contains = function( value, s ){
      // while we wait for a .contains() method
      return -1 !== s.indexOf( value );
    }.autoCurry()


  // ! optional args
  , endsWith = function( value, s){
      // I am not sure this implementation is right as
      // contains( 'cde', 'abcdef' );   => true
      return s.lastIndexOf( value ) === s.length - value.length;
    }.autoCurry()


  // ! optional args
  // Most browsers don't support the optional args, so ignoring them for now
  , localeCompare = function( compareStr, s ){
      return s.localeCompare( compareStr );
    }.autoCurry()


  , match = function( regexp, s ){
      return s.match( regexp );
    }.autoCurry()


  // Ignoring the nonstard flags
  , replace = function( a, b, s ){
      return s.replace( a, b );
    }.autoCurry()


  // I imagine this name to be highly conflicting
  , search = function( regexp, s ){
      return s.search( regexp );
    }.autoCurry()


  // ! optional args
  // ignoring limit because I feel like it
  , split = function( separator, s ){
      return s.split( separator );
    }.autoCurry()


  , startsWith = function( value, s ){
      // polyfill
      return s.indexOf( value ) === 0; 
    }.autoCurry()
  

  , substr = function( start, length, s ){
      return s.substr( start, length );
    }.autoCurry()


  , substring = function( start, end, s ){
      return s.substring( start, end );
    }.autoCurry()


  , toLocaleLowerCase = function( s ){
      return s.toLocaleLowerCase();
    }


  , toLocaleUpperCase = function( s ){
      return s.toLocaleUpperCase();
    }

  
  // String.toSource()  -> not implemented here


  , toUpperCase = function( s ){
      return s.toUpperCase();
    }

  
  , trim = function( s ){
      return s.replace(/^\s+|\s+$/g,'');
    }


  // No polyfills for these
  , trimLeft = function( s ){
      return s.trimLeft();
    }
  , trimRight = function( s ){
      return s.trimRight();
    }


  // String.valueOf() -> Skipping. Use String.toString() instead
