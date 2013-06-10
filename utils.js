
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
    f.flip = function() {
      return function(){
        var args = toArray(arguments, 0);
        args = args.slice(1,2).concat(args.slice(0,1)).concat(args.slice(2));
        return f.apply(this, args);
      }
    };
    return f;
  }


Function.prototype.autoCurry = function(n) {
  return autoCurry(this, n);
};


