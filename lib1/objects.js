// 
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods_of_Object_instances

var root = this


  , hasOwnProperty = function( prop, o ){
      return o.hasOwnProperty( prop );
    }.autoCurry()


  // May want to check if this is correct implementation.
  , isPrototypeOf = function( a, b ){
      return b.isPrototypeOf( a );
    }.autoCurry()


  , propertyIsEnumerable = function( prop, o ){
      return o.propertyIsEnumerable( prop );
    }.autoCurry()


  ;
