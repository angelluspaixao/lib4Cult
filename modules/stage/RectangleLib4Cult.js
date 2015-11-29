var RectangleLib4Cult = function( _positionX, _positionY, _sizeWidth, _sizeHeight, _hexColor ){

  var self = this;

  var pivot = { x: 0, y: 0 };

  var position = {
    x: _positionX,
    y: _positionY
  }

  var size = {
    width: _sizeWidth,
    height: _sizeHeight
  }

  var color = _hexColor;

  var rotation = 0;

  var layer = 0;

  self.setRotation = function( _degrees ){ rotation = _degrees; }

  self.setLayer = function( _index ){ layer = _index; }

  self.setX = function( _x ){ position.x = _x; }
  self.setY = function( _y ){ position.y = _y; }

  self.incX = function( _x ){ position.x += _x; }
  self.incY = function( _y ){ position.y += _y; }

  self.getY = function(){ return position.y; }
  self.getX = function(){ return position.x; }

  self.getLayer = function(){ return layer; }

  self.getRotation = function(){ return rotation; }

  self.setPivot = function( _pivot ){ pivot = _pivot( size ); }

  self.update = function(){
    
  }

  self.render = function( _context ){

    _context.save();
    _context.fillStyle = color;
    _context.translate( position.x, position.y );
    _context.rotate( rotation );
    _context.fillRect( pivot.x, pivot.y, size.width, size.height );
    _context.fillRect( 0, 0, 5, 5 );
    _context.restore();

  }

}
