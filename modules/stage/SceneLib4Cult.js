var SceneLib4Cult = function( _flag ){

  var self = this;

  self.flag = _flag;

  var elementsInScene = [];

  var currentLayer = 0;
  var storageLayer = [];

  self.add = function( _element ){

    elementsInScene.push( _element );

  }

  self.update = function(){

    if( elementsInScene.length > 0 )
      for( var i = 0; i < elementsInScene.length; i++ ){

        elementsInScene[i].update();

      }

      for( var i = 0; i < elementsInScene.length; i++ ){

        storageLayer.push(elementsInScene[i].getLayer());

      }

      // Order list of layers
      storageLayer.sort(function(a, b){return a-b});

  }

  self.render = function( _context ){

    if( elementsInScene.length > 0 )
      for( var j = 0; j < storageLayer.length; j++ ){

        for( var i = 0; i < elementsInScene.length; i++){

          if( elementsInScene[i].getLayer() === storageLayer[j] ){

            elementsInScene[i].render( _context );

          }

        }

      }

      storageLayer = [];

  }

}
