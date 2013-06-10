// From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#RegExp_instances-Methods

var root = this


  , exec = function( str, r ){
      return r.exec( str );
    }.autoCurry()


  // Overly conflicting name?
  , test = function( str, r ){
      return r.test( str );
    }.autoCurry()


  ;
