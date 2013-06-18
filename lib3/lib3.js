

var slice = Array.prototype.slice
  
//+ toArray :: a -> [b]
  , toArray = function(x) {
      return slice.call(x);
    }


//- altered from from wu.js
//+ curry :: f
  , curry = function (fn /* variadic number of args */) {
      var args = Array.prototype.slice.call(arguments, 1);
      var f = function () {
        return fn.apply(this, args.concat(toArray(arguments)));
      };
      return f;
    }

//+ autoCurry :: f -> Int -> f
  , autoCurry = function (fn, numArgs) {
      numArgs = numArgs || fn.length;
      var f = function () {
        if (arguments.length < numArgs) {
          return numArgs - arguments.length > 0 ?
            autoCurry(curry.apply(this, [fn].concat(toArray(arguments))),
            numArgs - arguments.length) :
            curry.apply(this, [fn].concat(toArray(arguments)));
        } else {
          return fn.apply(this, arguments);
        }
      };
      f.toString = function(){ return fn.toString(); };
      f.curried = true;
      return f;
    };

Function.prototype.autoCurry = function(n) {
  return autoCurry(this, n);
};



var root


  , indexOf = function(value, array) {
      var index = -1,
          length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }.autoCurry(2)



  , map = function( fn, x ) {
      var results = [];
      if (x.map) return x.map(fn);
      if (x.length === +x.length) {
        for( var i = 0, l = x.length; i < l; i++ ){
          results.push( fn( x[i] ) );
        }
      } else {
        for (var key in x) {
          if(x.hasOwnProperty(key)){
            results.push( fn( x[key] ) );
          }
        }
      }
      return results;
    }.autoCurry(2)



  , compose = function( f ) {
      var fns = Array.prototype.slice.call(arguments).reverse();
      return function( x ){
        for( var i = 0, l = fns.length; i < l; i++ ){
          x = fns[i]( x );
        }
        return x;
      }
    }



  , filter = function( fn, x ) {
      var results = [];
      if ( x.filter ) return x.filter( fn );
      if (x.length === +x.length) {
        for( var i = 0, l = x.length; i < l; i++ ){
          if ( fn(x[i]) ) results.push( x[i] );
        }
      } else {
        for (var key in x) {
          if(x.hasOwnProperty(key)){
          if ( fn(x[key]) ) results.push( x[key] );
          }
        }
      }
      return results;
    }.autoCurry(2)


  
  , pluck = function( prop, obj ) {
      return obj[prop];
    }.autoCurry(2)



  , sortBy = function( value, array ) {
      return array.slice(0).sort(function(a,b) {
        if (a[value] < b[value]) return -1;
        if (a[value] > b[value]) return 1;
        return 0;
      });
    }.autoCurry(2)


  /////////



  , first = function( array ) {
      if (array.length === 0) return [];
      return array[0];
    }


  , take = function( count, array ){
      if (array.length === 0) return [];
      var results = [];
      for( var i = 0; i < count; i++ ) {
        results.push(array[i]);
      }
      return results;
    }.autoCurry(2)
      


  , last = function( array ) {
      if (array.length === 0) return [];
      return array[array.length-1]
    }


  , initial = function( array ) {
      if (array.length === 0) return [];
      var results = [];
      for( var i = 0, l = array.length-1; i < l; i++ ){
        results.push( array[i] );
      }
      return results;
    }


  , rest = function( array ) {
      return array.slice(1);
    }


  , drop = function( count, array ) {
      if (array.length === 0) return [];
      return array.slice(count);
    }.autoCurry(2)


  , max = function( array ) {
      result = array[0]
      for (var i = 1, len = array.length; i < len; i++) {
        if (array[i] > result) result = array[i];
      }
      return result;
    }


  , min = function( array ) {
      result = array[0]
      for (var i = 1, len = array.length; i < len; i++) {
        if (array[i] < result) result = array[i];
      }
      return result;
    }






