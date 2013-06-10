// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#Methods_of_number_instance

var root = this


  // ! optional args
  , toExponential = function( fractionDigits, n ){
      return n.toExponential( fractionDigits );
    }.autoCurry()


  // ! optional args
  , toFixed = function( digits, n ){
      return n.toFixed( digits );
    }.autoCurry()


  // ! optional args
  , toPrecision = function( precision, n ){
      return n.toPrecision( precision );
    }.autoCurry()

  
  ;
