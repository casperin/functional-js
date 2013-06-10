// 
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods_of_Object_instances

var root = this


  , hasOwnProperty( prop, o ){
      return o.hasOwnProperty( prop );
    }.autoCurry()


  // May want to check if this is correct implementation.
  , isPrototypeOf( a, b ){
      return b.isPrototypeOf( a );
    }.autoCurry()


  , propertyIsEnumerable( prop, o ){
      return o.propertyIsEnumerable( prop );
    }.autoCurry()


  , toLocaleString( o ){
      return toLocaleString( o );
    }


  ;
