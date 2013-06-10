
// Just going down this list
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_of_Array_instances
// and picking off methods
//
//


var root = this


  // Array.pop()
  // Returns last element of array and leaves array intact
  , pop = function( arr ){
      var a = arr.slice(0);
      return a.pop();
    }


  , pop_ = function( arr ){
      var a = arr.slice(0);
      a.pop();
      return a;
    }


  // Array.push()
  // ! optional args
  , push = function( el, arr ){
      // cloning the array
      var a = arr.slice(0);
      a.push( el ); 
      return a;
    }.autoCurry()


  // Array.reverse()  -> reverse()
  // ! Will colide with _.reverse()
  , reverse = function( arr ){
      var a = arr.slice(0);
      return a.reverse();
    }


  // Array.shift()
  // Returns first element of array and leaves array intact
  , shift = function( arr ){
      var a = arr.slice(0);
      return a.shift();
    }


  , shift_ = function( arr ){
      var a = arr.slice(0);
      a.shift();
      return a;
    }


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
  // Implicitly forced separator
  , join = function( separator, arr ){
      return arr.join( separator );
    }.autoCurry()


  // Array.toSource() -> Skipping this


  ;
