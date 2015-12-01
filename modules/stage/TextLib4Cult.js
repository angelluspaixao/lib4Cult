var TextLib4Cult = function( _text, _positionX, _positionY, _fontSize, _hexColor, _fontType ){

  // Parse scope of Class 'TextLib4Cult'
  var self = this;

  // -- Attributes
  var alpha = 1
  ,   text = _text
  ,   fontSize = _fontSize || 14
  ,   fontType = _fontType || "Verdana"
  ,   pivot = { x: 0, y: 0 }
  ,   position = { x: _positionX, y: _positionY }
  ,   size = { width: fontSize *text.length, height: fontSize }
  ,   color = _hexColor || "#000000"
  ,   rotation = 0
  ,   layer = 0
  ;

  // -- Methods

  // [ SET ]
  self.setShow = function( _show ){ alpha = _show ? 1 : 0; }
  self.setOpacity = function( _alpha ){ alpha = _alpha;  }
  self.setText = function( _text ){ text = _text; }
  self.setFontSize = function( _fontSize ){ fontSize = _fontSize; }
  self.setFontType = function( _fontType ){ fontType = _fontType; }
  self.setPivot = function( _pivot ){ pivot = _pivot( size ); }
  self.setX = function( _x ){ position.x = _x; }
  self.setY = function( _y ){ position.y = _y; }
  self.setColor = function( _color ){ color = _color; }
  self.setRotation = function( _degrees ){ rotation = _degrees; }
  self.setLayer = function( _index ){ layer = _index; }

  // [ INC ]
  self.incX = function( _x ){ position.x += _x; }
  self.incY = function( _y ){ position.y += _y; }

  // [ GET ]
  self.getShow = function(){ return alpha > 0 ? true : false; }
  self.getOpacity = function(){ return alpha; }
  self.getText = function(){ return text; }
  self.getFontSize = function(){ return fontSize; }
  self.getFontType = function(){ return fontType; }
  self.getPivot = function(){ return pivot }
  self.getX = function(){ return position.x; }
  self.getY = function(){ return position.y; }
  self.getColor = function(){ return color; }
  self.getRotation = function(){ return rotation; }
  self.getLayer = function(){ return layer; }

  // -- Methods for life this Class 'TextLib4Cult'

  // Method for update attributes of Class 'TextLib4Cult'
  self.update = function(){}

  // Method for render attributes of Class 'TextLib4Cult'
  self.render = function( _context ){

    _context.save();
    _context.globalAlpha = alpha; // Settings alpha channel of 'TextLib4Cult'
    _context.fillStyle = color;
    _context.font = fontSize + "px " + fontType;
    _context.translate( position.x, position.y );
    _context.rotate( rotation );
    _context.fillText( text, pivot.x, pivot.y );
    _context.restore();

  }

}
