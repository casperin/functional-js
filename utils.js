
var root = this

//+ slice :: a -> [b]
  , slice = Array.prototype.slice

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
  , autoCurry = function(fn, numArgs) {
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


