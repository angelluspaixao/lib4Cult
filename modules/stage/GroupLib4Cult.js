var GroupLib4Cult = function( _positionX, _positionY ){

  // Parse main scope
  var self = this;

  // Vector for elements inside group
  var elementsInGroup = [];

  // Position of group
  var position = {
    x: _positionX || 0,
    y: _positionY || 0,
    last: {
      x: 0,
      y: 0
    }
  }

  var layer = 0;

  var rotation = 0;

  self.setRotation = function( _degrees ){

    rotation = _degrees;

    for( var i = 0; i < elementsInGroup.length; i++ ){

      elementsInGroup[i].setRotation( _degrees );

    }

  }
  self.setLayer = function( _index ){ layer = _index; }

  self.getRotation = function(){ return rotation; }
  self.getLayer = function(){ return layer; }

  // Mehotd for add components in group
  self.add = function( _element ){

    if( typeof _element.push === 'function'  ){

      for( var i = 0; i < _element.length; i++ ){

        elementsInGroup.push( _element[i] );

      }

    }else{

      elementsInGroup.push( _element );

    }

  }

  // Method for drift out all components
  self.empty = function(){

    elementsInGroup = [];

  }

  // Setter for modify coord in X
  self.setX = function( _x ){

    position.x = _x;

    if( elementsInGroup.length > 0 )
      for( var i = 0; i < elementsInGroup.length; i++ ){

        elementsInGroup[i].setPivot(position.x, position.y);

      }
  }

  // Setter for modify coord in Y
  self.setY = function( _y ){

    position.y = _y;

    if( elementsInGroup.length > 0 )
      for( var i = 0; i < elementsInGroup.length; i++ ){

        elementsInGroup[i].setPivot(position.x, position.y);

      }

  }

  self.getX = function(){ return position.x; } // getter for info about coord X
  self.getY = function(){ return position.y; } // getter for info about coord Y

  // Method for logic from update
  self.update = function(){

    // Verify if exists components in this group
    if( elementsInGroup.length > 0 )
      for( var i = 0; i < elementsInGroup.length; i++ ){

        elementsInGroup[i].update();

      }

    // Verify if coord X was modified
    if( position.x != position.last.x )
      for( var i = 0; i < elementsInGroup.length; i++ ){

        elementsInGroup[i].incX(position.x);

      }
      position.last.x = position.x;

    // Verify if coord X was modified
    if( position.y != position.last.y )
      for( var i = 0; i < elementsInGroup.length; i++ ){

        elementsInGroup[i].incY(position.y);

      }
      position.last.y = position.y;

  }

  // Method render elements in canvas
  self.render = function( _context ){

    // Verify if exists elements in this group
    if( elementsInGroup.length > 0 )
      for( var i = 0; i < elementsInGroup.length; i++ ){

        elementsInGroup[i].render( _context );

      }

  }

}
