
// Just going down this list
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_of_Array_instances
// and picking off methods I like :)
//
//


var root = this


  // Array.pop()  -> Use initial() and last() instead


  // Array.push()
  // ! optional args
  , push = function( el, arr ){
      // cloning the array
      var a = arr.slice(0);
      a.push( el ); 
      return a;
    }.autoCurry()


  // Array.reverse()  -> reverse()


  // Array.shift()  -> head() and tail()


  // Array.sort()
  // ! optional args
  // Ignoring optional args because of `sortBy()`
  , sort = function( arr ){
      return arr.slice(0).sort();
    }


  // Array.splice()
  // ! optional args
  // Just assuming two args and ignoring args that can be added for now. Maybe
  // having optional args as a list would make sense?
  , splice = function( index, count, arr ){
      var a = arr.slice(0);
      a.splice( index, count ); 
      return a;
    }.autoCurry()

  
  // Array.unshift()
  // ! optional args
  , unshift = function( el, arr ){
      var a = arr.slice(0);
      a.unshift( el ); 
      return a;
    }.autoCurry()


  // Array.join()
  // Implicitly forced separator even though it'd be easy to make it optional
  // via type checking
  , join = function( separator, arr ){
      return arr.join( separator );
    }.autoCurry()


  // Array.toSource() -> Skipping this


  ;
