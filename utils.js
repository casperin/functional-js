
var root = this

  , toArray = function(arr, from) {
      return Array.prototype.slice.call(arr, from || 0);
    }

  , curry = function(fn) {
      var args = toArray(arguments, 1);
      return function() {
        return fn.apply(this, args.concat(toArray(arguments)));
      };
    }

 , autoCurry = function (fn, numArgs) {
    numArgs = numArgs || fn.length || fn.length_;
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
    f.length_ = numArgs;
    return f;
  }


Function.prototype.autoCurry = function(n) {
  return autoCurry(this, n);
};


var compose = function() {
      var funcs = arguments;
      return function() {
        var args = arguments,
            length = funcs.length;
        while (length--) {
          args = [funcs[length].apply(this, args)];
        }
        return args[0];
      };
    }


  , dot = function( param, obj ){
      return obj[param];
    }.autoCurry()


  , flip = function( fn ){
      var numArgs = fn.length || fn.length_ || 0;
      if( numArgs < 2 ) return fn;
      var exe = function(){
        var args = toArray(arguments, 0).reverse();
        fn.apply( null, args );
      };
      return exe;
    }


  ;



// partial still missing
