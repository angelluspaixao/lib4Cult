var TextLib4Cult = function( _text, _positionX, _positionY, _fontSize, _hexColor, _fontType ){

  var self = this;

  var alpha = 1;

  var text = _text;

  var fontSize = _fontSize || _hexColor || 14;

  var fontType = _fontType;

  var pivot = { x: 0, y: 0 };

  var position = {
    x: _positionX,
    y: _positionY
  }

  var size = {
    width: fontSize *text.length,
    height: fontSize
  }

  var color = _hexColor || "#000000";

  var rotation = 0;

  var layer = 0;

  self.setOpacity = function( _alpha ){ alpha = _alpha;  }

  self.setPivot = function( _pivot ){ pivot = _pivot( size ); }

  self.setRotation = function( _degrees ){ rotation = _degrees; }

  self.setLayer = function( _index ){ layer = _index; }

  self.setX = function( _x ){ position.x = _x; }
  self.setY = function( _y ){ position.y = _y; }

  self.incX = function( _x ){ position.x += _x; }
  self.incY = function( _y ){ position.y += _y; }

  self.getOpacity = function(){ return alpha; }

  self.getPivot = function(){ return pivot }

  self.getRotation = function(){ return rotation; }

  self.getLayer = function(){ return layer; }

  self.getY = function(){ return position.y; }
  self.getX = function(){ return position.x; }

  self.update = function(){

  }

  self.render = function( _context ){

    _context.save();
    _context.fillStyle = color;
    _context.font = fontSize + fontType;
    _context.translate( position.x, position.y );
    _context.rotate( rotation );
    _context.fillText( text, pivot.x, pivot.y );
    _context.restore();

  }

}
