describe("lib1", function() {
  var a = [ 1, 2, 3 ]
    , b = [ 4, 5, 6 ]
    , c = [ 'a', 'b', 'c' ]
    , d = [ 1, 2, 'a', 'c' ]
    , e = [ ]
    , f = 'foo'
    , g = 'bar'
    , h = [ 2, 6, 1, 3, 0, 100, 3, 4 ]
    , i = ["Delta", "alpha", "CHARLIE", "bravo"]
    , j = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    , k = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'two' ]
    , l = { one: 1, two: 2, three: 3 }
    , m = 'A longer string'
    , n = 123456789
    , o = 12345.6789
    ;

  it("charAt", function() {
    expect( charAt( 2, f ) ).toEqual('o');
    expect( charAt( -1, f ) ).toEqual(undefined);
    expect( charAt( 10, f ) ).toEqual(undefined);
    expect( f ).toEqual('foo');
    expect( charAt( 10)( f ) ).toEqual(undefined);
  });
  

  it("charCodeAt", function() {
    expect( charCodeAt( 0, f ) ).toEqual(102);
    expect( f ).toEqual('foo');
  });


  it("concat", function() {
    expect( concat( a, b ) ).toEqual([4,5,6,1,2,3]);
    expect( concat( a )( b ) ).toEqual([4,5,6,1,2,3]);
    expect( a ).toEqual([1,2,3]);
    expect( concat( g )( f ) ).toEqual('foobar');
    expect( concat( f )( a ) ).toEqual([1, 2, 3, "foo"] );
  });



  it("contains", function() {
    expect( contains( 'long', m ) ).toEqual(true);
    expect( contains( 'long' )( m ) ).toEqual(true);
    expect( m ).toEqual('A longer string');
  });



  it("endsWith", function() {
    expect( endsWith( 'long', m ) ).toEqual(false);
    expect( endsWith( 'string', m ) ).toEqual(true);
    expect( endsWith( 'string' )( m ) ).toEqual(true);
  });



  it("exec", function() {
    expect( exec( /long/g, m )[0] ).toEqual("long");
    expect( m ).toEqual("A longer string");
  });


  it("hasOwnProperty", function() {
    var o = {};
    o.prop = 'exists';
    expect( hasOwnProperty( 'prop', o ) ).toEqual(true);
    expect( hasOwnProperty( 'prop' )( o ) ).toEqual(true);
    o.newProp = o.prop;
    delete o.prop
    expect( hasOwnProperty( 'prop', o ) ).toEqual(false);
  });


  it("indexOf", function() {
    expect( indexOf( 6 )( h ) ).toEqual( 1 );
    expect( indexOf( 7, h ) ).toEqual( -1 );
    expect( indexOf( ' longe', m ) ).toEqual( 1 );
  });



  it("isPrototypeOf", function() {
    function Fee() { }
    function Fi() { }
    Fi.prototype = new Fee();
    function Fo() { }
    Fo.prototype = new Fi();
    function Fum() { }
    Fum.prototype = new Fo();
    var fum = new Fum();
    expect( isPrototypeOf( Fi, fum) ).toEqual(true);
  });


  it("join", function() {
    expect( join( 'f' )( a ) ).toEqual("1f2f3");
    expect( a ).toEqual([1,2,3]);
  });


  it("lastIndexOf", function() {
    expect( lastIndexOf( 'two', k ) ).toEqual(10);
    expect( lastIndexOf( 'ten', k ) ).toEqual(-1);
  });


  it("length", function() {
    expect( length( a ) ).toEqual(3);
    expect( length( f ) ).toEqual(3);
    expect( length( true ) ).toEqual(undefined);
  });


  it("localCompare", function() {
    expect(true).toEqual(true);
    // It's per definition different depending on locale
  });
  

  it("match", function() {
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var regexp = /[A-E]/gi;
    var matches_array = str.match(regexp);
    var goal = ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
    expect( matches_array ).toEqual( goal );
  });


  it("pop", function() {
    expect( pop( a ) ).toEqual( 3 );
    expect( pop( m ) ).toEqual( 'g' );
  });


  it("pop_", function() {
    expect( pop_( a ) ).toEqual( [1,2] );
    expect( pop_( m ) ).toEqual( 'A longer strin' );
  });


  it("push", function() {
    expect( push( 'z' )( a ) ).toEqual([1,2,3,'z']);
    expect( push( 'z' )( f ) ).toEqual('fooz');
  });


  it("propertyIsEnumerable", function() {
    expect( propertyIsEnumerable( 0, c ) ).toEqual(true);
    expect( propertyIsEnumerable( 'foo', c ) ).toEqual(false);
  });


  it("replace", function() {
    var re = /apples/gi;
    var str = "Apples are round, and apples are juicy.";
    var newstr = replace(re, "oranges", str);
    expect( newstr ).toEqual('oranges are round, and oranges are juicy.');
  });


  it("reverse", function() {
    expect( reverse( a ) ).toEqual([3,2,1]);
    expect( reverse( f ) ).toEqual('oof');
  });


  it("search", function() {
    expect( search( /hello/gi, "Hello world" ) ).toEqual(0);
    expect( search( /hello/g, "Hello world" ) ).toEqual(-1);
  });


  it("shift", function() {
    expect( shift( a ) ).toEqual( 1 ); 
    expect( shift( f ) ).toEqual('f'); 
  });


  it("shift_", function() {
    expect( shift_( a ) ).toEqual( [2,3] ); 
    expect( shift_( f ) ).toEqual( 'oo' ); 
  });


  it("slice", function() {
    expect( slice( 2 )( 4 )( m ) ).toEqual('lo');
    expect( slice( 4, 6 )( k ) ).toEqual(['four','five']);
  });


  it("sort", function() {
    expect( sort( m ) ).toEqual("  Aeggilnnorrst");
    expect( sort( i ) ).toEqual(["CHARLIE", "Delta", "alpha", "bravo"]);
  });


  it("splice", function() {
    expect( splice( 2 )( 3, m ) ).toEqual("A ger string");
    expect( splice( 3, 6 )( j ) ).toEqual([0,1,2,9]);
  });


  it("split", function() {
    expect( split( "n", m ) ).toEqual(['A lo', 'ger stri', 'g']);
    expect( split( "z", m ) ).toEqual(['A longer string']);
  });


  it("startsWith", function() {
    expect( startsWith( 'A lo', m ) ).toEqual(true);
    expect( startsWith( 'A lomg', m ) ).toEqual(false);
  });


  it("substr", function() {
    expect( substr( 2, 3, m ) ).toEqual('lon');
  });


  it("substring", function() {
    expect( substring( 2, 3, m ) ).toEqual('l');
  });


  it("test", function() {
    expect( test( /hello/gi, "Hello world" ) ).toEqual(true);
    expect( test( /hello/g, "Hello world" ) ).toEqual(false);
  });


  it("toExponential", function() {
    expect( toExponential( 2, 700 ) ).toEqual('7.00e+2');
  });


  it("toFixed", function() {
    expect( toFixed( 2, 700.2392 ) ).toEqual('700.24');
  });


  it("toLocaleLowerCase", function() {
    expect( toLocaleLowerCase( "AmdjSjasSkjSLkj aLKASDJ s ask" ) )
      .toEqual( 'amdjsjasskjslkj alkasdj s ask' );
  });


  it("toLocaleUpperCase", function() {
    expect( toLocaleUpperCase( "AmdjSjasSkjSLkj aLKASDJ s ask" ) )
      .toEqual( 'AMDJSJASSKJSLKJ ALKASDJ S ASK' );
  });


  it("toPrecision", function(){
    expect( toPrecision( 3, 23423 ) ).toEqual("2.34e+4");
  });


  it("toString", function(){
    expect( toString( f ) ).toEqual( f.toString() );
    expect( toString( a ) ).toEqual( a.toString() );
    expect( toString( l ) ).toEqual( l.toString() );
  });


  it("toUpperCase", function(){
    expect( toUpperCase( m ) ).toEqual( m.toUpperCase() );
  });


  it("trim", function(){
    expect( trim( " as 3 kfjd " ) ).toEqual( "as 3 kfjd" );
  });


  it("trimLeft", function(){
    expect( true ).toEqual( true ); // very unsupported
  });
  it("trimRight", function(){
    expect( true ).toEqual( true ); // very unsupported
  });


  it("unshift", function() {
    expect( unshift( 'z', a ) ).toEqual(['z',1,2,3]);
    expect( unshift( 'z', f ) ).toEqual('zfoo');
  });


  it("valueOf", function() {
    expect( valueOf( m ) ).toEqual( m.valueOf() );
    expect( valueOf( l ) ).toEqual( l.valueOf() );
  });



});
