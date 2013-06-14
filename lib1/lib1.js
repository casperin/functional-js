// All methods from
//  * Arrays
//  * Numbers
//  * Objects
//  * Regexp
//  * Strings
// as autoCurried functions of the same name.


var root   // Not used




  // String.charAt()
  // charAt :: int -> string -> char
  , charAt = function( i, s ){
      return s[i];
    }.autoCurry()




  // String.charCodeAt()
  // charCodeAt :: int -> string -> int
  , charCodeAt = function( i, s ){
      return s.charCodeAt( i );
    }.autoCurry()




  // Array.concat()
  // String.concat()
  , concat = function( a, b ){
      return b.concat( a );
    }.autoCurry()




  // String.contains()
  , contains = function( value, s ){
      return s.indexOf( value ) !== -1;
    }.autoCurry()


  

  // String.endsWith()
  // ! optional args
  , endsWith = function( value, s){
      return s.lastIndexOf( value ) === s.length - value.length;
    }.autoCurry()




  // Regexp.exec()
  , exec = function( r, str ){
      return r.exec( str );
    }.autoCurry()




  // Object.hasOwnProperty()
  , hasOwnProperty = function( prop, o ){
      return o.hasOwnProperty( prop );
    }.autoCurry()




  // Array.indexOf()
  // String.indexOf()
  // ! optional args
  , indexOf = function( value, a ){
      return a.indexOf( value );
    }.autoCurry()




  // Object.isPrototypeOf()
  // May want to check if this is correct implementation.
  , isPrototypeOf = function( a, b ){
      return a.prototype.isPrototypeOf( b );
    }.autoCurry()




  // Array.join()
  // Implicitly forced separator
  // Not sure what this would do to strings. Add a separator between each char?
  , join = function( separator, arr ){
      return arr.join( separator );
    }.autoCurry()




  // Array.lastIndexOf()
  // Array.lastIndexOf()
  // ! optional args
  , lastIndexOf = function( value, a ){
      return a.lastIndexOf( value );
    }.autoCurry()




  // Not a technically a method, but useful still
  , length = function( a ){
      return a.length;
    }




  // String.localeCompare()
  // ! optional args
  // Most browsers don't support the optional args, so ignoring them for now
  , localeCompare = function( compareStr, s ){
      return s.localeCompare( compareStr );
    }.autoCurry()




  // String.match()
  , match = function( regexp, s ){
      return s.match( regexp );
    }.autoCurry()



  
  // Object.propertyIsEnumerable()
  , propertyIsEnumerable = function( prop, o ){
      return o.propertyIsEnumerable( prop );
    }.autoCurry()




  // String.replace()
  // Ignoring the nonstard flags
  , replace = function( a, b, s ){
      return s.replace( a, b );
    }.autoCurry()




  // String.search()
  // ! Probably conflicting name
  , search = function( regexp, s ){
      return s.search( regexp );
    }.autoCurry()




  // Array.slice()
  // String.slice()
  // Forced the end argument
  , slice = function( begin, end, a ){
      return a.slice( begin, end );
    }.autoCurry()




  // String.split()
  // ! optional args
  // ignoring limit because I feel like it
  , split = function( separator, s ){
      return s.split( separator );
    }.autoCurry()




  // String.startsWith()
  , startsWith = function( value, s ){
      return s.indexOf( value ) === 0; 
    }.autoCurry()
  



  // String.substr()
  , substr = function( start, length, s ){
      return s.substr( start, length );
    }.autoCurry()




  // String.substring()
  , substring = function( start, end, s ){
      return s.substring( start, end );
    }.autoCurry()




  // Regexp.test()
  // Overly conflicting name?
  , test = function( r, str ){
      return r.test( str );
    }.autoCurry()




  // Number.toExponential()
  // ! optional args
  // Enforced optional arg
  , toExponential = function( fractionDigits, n ){
      return n.toExponential( fractionDigits );
    }.autoCurry()




  // Number.toFixed()
  // ! optional args
  // Enforced optional arg
  , toFixed = function( digits, n ){
      return n.toFixed( digits );
    }.autoCurry()




  // String.toLocaleLowerCase()
  , toLocaleLowerCase = function( s ){
      return s.toLocaleLowerCase();
    }




  // String.toLocaleUpperCase()
  , toLocaleUpperCase = function( s ){
      return s.toLocaleUpperCase();
    }




  // Number.toPrecision()
  // ! optional args
  // Enforced optional arg
  , toPrecision = function( precision, n ){
      return n.toPrecision( precision );
    }.autoCurry()




  // Array.toString()
  // String.toString()
  // Object.toString()
  , toString = function( a ){
      return a.toString();
    }




  // String.toUpperCase()
  , toUpperCase = function( s ){
      return s.toUpperCase();
    }




  // String.trim()
  , trim = function( s ){
      // polyfill
      return s.replace(/^\s+|\s+$/g,'');
    }




  // String.trimLeft()
  // No polyfills for these
  , trimLeft = function( s ){
      return s.trimLeft();
    }




  // String.trimRight()
  , trimRight = function( s ){
      return s.trimRight();
    }




  // String.valueOf()
  // Object.valueOf()
  , valueOf = function( a ){
      return a.valueOf();
    }




  ; 
