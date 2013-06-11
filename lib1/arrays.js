
// Just going down this list
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_of_Array_instances
// and picking off methods
//
//


var root = this


  // Array.pop()
  // Returns last element of array and leaves array intact
  // Works for strings too
  , pop = function( a){
      return a[a.length-1];
    }


  // Works for strings too
  , pop_ = function( a ){
      if( typeof a === 'string') {
        var b = a.split('').slice(0);
        b.pop();
        return b.join('');
      }
      var b = a.slice(0);
      b.pop();
      return b;
    }


  // Array.push()
  // ! optional args
  // Works for strings too
  , push = function( value, a ){
      if( typeof a === 'string' ) return a + value;
      // cloning the array
      var b = a.slice(0);
      b.push( value ); 
      return b;
    }.autoCurry()


  // Array.reverse()  -> reverse()
  // ! Will colide with _.reverse()
  // Works for strings too
  , reverse = function( a ){
      if( typeof a === 'string' ) {
        var b = a.split('').slice(0);
        return b.reverse().join('');
      }
      var b = a.slice(0);
      return b.reverse();
    }


  // Array.shift()
  // Returns first element of array and leaves array intact
  // Works for strings too
  , shift = function( arr ){
      return arr[0];
    }


  // Works for strings too
  , shift_ = function( a ){
      if( typeof a === 'string' ) {
        var b = a.split('').slice(0);
        b.shift();
        return b.join('');
      }
      var b = a.slice(0);
      b.shift();
      return a;
    }


  // Array.sort()
  // ! optional args
  // Ignoring optional args because of `sortBy()`
  // Works for strings too... but... why?
  , sort = function( a ){
      if( typeof a === 'string' ) {
        return a.split('').slice(0).sort().join('');
      }
      return a.slice(0).sort();
    }


  // Array.splice()
  // ! optional args
  // Just assuming two args and ignoring args that can be added for now. Maybe
  // having optional args as a list would make sense?
  // Works for strings too
  , splice = function( index, count, a ){
      if( typeof a === 'string' ) {
        return a.substring( 0, index ) + a.substring( index + count );
      }
      var b = a.slice(0);
      b.splice( index, count ); 
      return b;
    }.autoCurry()

  
  // Array.unshift()
  // ! optional args
  // Works for strings too
  , unshift = function( value, a ){
      if( typeof a === 'string' ) return value + a;
      var b = a.slice(0);
      b.unshift( value ); 
      return b;
    }.autoCurry()


  // Array.join()
  // Implicitly forced separator
  // Not sure what this would do to strings. Add a separator between each char?
  , join = function( separator, arr ){
      return arr.join( separator );
    }.autoCurry()


  ;
