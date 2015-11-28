var Bound2D = function( _x, _y, _width, _height ){

  if( typeof _x !== 'number' || typeof _y !== 'number' || typeof _width !== 'number' || typeof _height !== 'number' )
    return null;

  this.x = _x;
  this.y = _y;
  this.width = _width;
  this.height = _height;

}
