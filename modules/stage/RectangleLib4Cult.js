var RectangleLib4Cult = function( _positionX, _positionY, _sizeWidth, _sizeHeight, _color ){

  // Parse scope of Class 'RectangleLib4Cult'
  var self = this;

  // -- Attributes
  var alpha = 1
  ,   pivot = { x: 0, y: 0 }
  ,   position = { x: _positionX, y: _positionY }
  ,   size = { width: _sizeWidth, height: _sizeHeight }
  ,   scale = { x: 1, y: 1 }
  ,   color = _color || "#000000"
  ,   rotation = 0
  ,   layer = 0
  ;

  // -- Methods

  // [ SET ]
  self.setShow = function( _show ){ alpha = _show ? 1 : 0; }
  self.setOpacity = function( _alpha ){ alpha = _alpha;  }
  self.setPivot = function( _pivot ){ pivot = _pivot( size ); }
  self.setX = function( _x ){ position.x = _x; }
  self.setY = function( _y ){ position.y = _y; }
  self.setScale = function( _x, _y ){

    if( arguments.length > 1 ){

      scale = { x: arguments[0], y: arguments[1] }

    }else{

      scale = { x: arguments[0], y: arguments[0] }

    }

  }
  self.setColor = function( _color ){ color = _color; }
  self.setRotation = function( _degrees ){ rotation = _degrees; }
  self.setLayer = function( _index ){ layer = _index; }

  // [ INC ]
  self.incX = function( _x ){ position.x += _x; }
  self.incY = function( _y ){ position.y += _y; }

  // [ GET ]
  self.getShow = function(){ return alpha > 0 ? true : false; }
  self.getOpacity = function(){ return alpha; }
  self.getPivot = function(){ return pivot; }
  self.getX = function(){ return position.x; }
  self.getY = function(){ return position.y; }
  self.getWidth = function(){ return size.width; }
  self.getHeight = function(){ return size.height; }
  self.getScaleX = function(){ return scale.x; }
  self.getScaleY = function(){ return scale.y; }
  self.getColor = function(){ return color; }
  self.getRotation = function(){ return rotation; }
  self.getLayer = function(){ return layer; }

  // -- Methods for life this Class 'RectangleLib4Cult'

  // Method for update attributes of Class 'RectangleLib4Cult'
  self.update = function(){}

  // Method for render attributes of Class 'RectangleLib4Cult'
  self.render = function( _context ){

    _context.save(); // Save config 'context'
    _context.fillStyle = color; // Settings color of 'RectangleLib4Cult'
    _context.globalAlpha = alpha; // Settings alpha channel of 'RectangleLib4Cult'
    _context.translate( position.x, position.y ); // Settings translate of 'RectangleLib4Cult'
    _context.rotate( rotation ); // Settings rotation of 'RectangleLib4Cult'
    _context.fillRect( pivot.x, pivot.y, size.width *scale.x, size.height *scale.y ); // Settings render of 'RectangleLib4Cult'
    _context.restore(); // Back config saved

  }

}
