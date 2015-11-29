var StageLib4Cult = function( _context, _canvasX, _canvasY, _canvasWidth, _canvasHeight ){

  var self = this;

  var scenesForManager = {};

  var currentScene = null;

  self.getCurrent = function(){

    return currentScene.flag;

  }

  self.add = function( _scene ){

    if( typeof _scene.push === 'function' ){

      for( var i = 0; i < _scene.length; i++ ){

        if( typeof _scene[i].flag === 'string' ){

          scenesForManager[ _scene[i].flag ] = _scene[i];
          currentScene = _scene[i];

        }else{

          console.error("Sorry but only possible add Scene");

        }

      }

    }else{

      if( typeof _scene.flag === 'string' ){

        scenesForManager[ _scene.flag ] = _scene;
        currentScene = _scene;

      }else{

        console.error("Sorry but only possible add Scene");

      }

    }

  }

  self.setScene = function( _flag ){

    currentScene =  scenesForManager[ _flag ];

  }

  var update = function(){

    if( currentScene )
      currentScene.update();

  }

  var render = function(){

    _context.clearRect( _canvasX, _canvasY, _canvasWidth, _canvasHeight );
    if( currentScene )
      currentScene.render( _context );

  }

  var loop = function(){

    update();
    render();
    // console.log("Eu aqui no loop do Manager");
    window.setTimeout(loop, 30);
  }

  loop();

}
