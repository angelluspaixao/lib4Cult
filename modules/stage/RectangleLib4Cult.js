var RectangleLib4Cult = function( _positionX, _positionY, _sizeWidth, _sizeHeight, _color ){

  var self = this;

  var alpha = 1;

  var pivot = { x: 0, y: 0 };

  var position = {
    x: _positionX,
    y: _positionY
  }

  var size = {
    width: _sizeWidth,
    height: _sizeHeight
  }

  var scale = { x: 1, y: 1 }

  var color = _color || "#000000";

  var rotation = 0;

  var layer = 0;

  self.setScale = function( _x, _y ){

    if( arguments.length > 1 ){

      scale = { x: arguments[0], y: arguments[1] }
      
    }else{

      scale = { x: arguments[0], y: arguments[0] }

    }

  }

  self.setOpacity = function( _alpha ){ alpha = _alpha;  }

  self.setColor = function( _color ){ color = _color; }

  self.setPivot = function( _pivot ){ pivot = _pivot( size ); }

  self.setRotation = function( _degrees ){ rotation = _degrees; }

  self.setLayer = function( _index ){ layer = _index; }

  self.setX = function( _x ){ position.x = _x; }
  self.setY = function( _y ){ position.y = _y; }

  self.incX = function( _x ){ position.x += _x; }
  self.incY = function( _y ){ position.y += _y; }

  self.getOpacity = function(){ return alpha; }

  self.getColor = function(){ return color; }

  self.getPivot = function(){ return pivot; }

  self.getRotation = function(){ return rotation; }

  self.getLayer = function(){ return layer; }

  self.getY = function(){ return position.y; }
  self.getX = function(){ return position.x; }

  self.getScaleX = function(){ return scale.x; }
  self.getScaleY = function(){ return scale.y; }

  self.update = function(){

  }

  self.render = function( _context ){

    _context.save();
    _context.fillStyle = color;
    _context.globalAlpha = alpha;
    _context.translate( position.x, position.y );
    _context.rotate( rotation );
    _context.fillRect( pivot.x, pivot.y, size.width *scale.x, size.height *scale.y );
    _context.restore();

  }

}
