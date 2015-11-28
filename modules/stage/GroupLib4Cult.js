var GroupLib4Cult = function( _positionX, _positionY ){

  var self = this;

  var elementsInGroup = [];

  var position = {
    x: _positionX || 0,
    y: _positionY || 0
  }

  self.add = function( _element ){

    elementsInGroup.push( _element );

  }

  self.empty = function(){

    elementsInGroup = [];

  }

  self.setX = function( _x ){

    position.x = _x;

    if( elementsInGroup.length > 0 )
      for( var i = 0; i < elementsInGroup.length; i++ ){

        elementsInGroup[i].incX(position.x);

      }
  }

  self.setY = function( _y ){

    position.y = _y;

    if( elementsInGroup.length > 0 )
      for( var i = 0; i < elementsInGroup.length; i++ ){

        elementsInGroup[i].incY(position.y);

      }

  }

  self.getX = function(){ return position.x; }
  self.getY = function(){ return position.y; }

  self.update = function(){

    if( elementsInGroup.length > 0 )
      for( var i = 0; i < elementsInGroup.length; i++ ){

        elementsInGroup[i].update();

      }

  }

  self.render = function( _context ){

    if( elementsInGroup.length > 0 )
      for( var i = 0; i < elementsInGroup.length; i++ ){

        elementsInGroup[i].render( _context );

      }

  }

}
