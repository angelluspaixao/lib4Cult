var SceneLib4Cult = function( _flag ){

  var self = this;

  self.flag = _flag;

  var elementsInScene = [];

  self.add = function( _element ){

    elementsInScene.push( _element );

  }

  self.update = function(){

    if( elementsInScene.length > 0 )
      for( var i = 0; i < elementsInScene.length; i++ ){

        elementsInScene[i].update();

      }

  }

  self.render = function( _context ){
    if( elementsInScene.length > 0 )
      for( var i = 0; i < elementsInScene.length; i++ ){

        elementsInScene[i].render( _context );

      }

  }

}
