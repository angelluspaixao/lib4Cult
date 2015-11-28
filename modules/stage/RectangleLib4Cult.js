var RectangleLib4Cult = function( _positionX, _positionY, _sizeWidth, _sizeHeight, _hexColor ){

  var self = this;

  var position = {
    x: _positionX,
    y: _positionY
  }

  var size = {
    width: _sizeWidth,
    height: _sizeHeight
  }

  var color = _hexColor;

  self.setX = function( _x ){ position.x = _x; }
  self.setY = function( _y ){ position.y = _y; }

  self.incX = function( _x ){ position.x += _x; }
  self.incY = function( _y ){ position.y += _y; }

  self.getY = function(){ return position.y; }
  self.getX = function(){ return position.x; }

  self.update = function( ){

  }

  self.render = function( _context ){

    _context.fillStyle = "#" + color;
    _context.fillRect( position.x, position.y, size.width, size.height );

  }

}
