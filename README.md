
# Some functional stuff

Collection of methods as curried functions.

```javascript
var a = [ 1, 2, 3 ];

push( 'x', a ); // => [ 1, 2, 3, 'x' ]

var addZ = push( 'y' );

addZ( a ); // =>  [ 1, 2, 3, 'y' ]
```
