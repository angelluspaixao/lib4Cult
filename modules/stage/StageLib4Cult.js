var StageLib4Cult = function( _context, _canvasX, _canvasY, _canvasWidth, _canvasHeight ){

  var self = this;

  var scenesForManager = {};

  var currentScene = null;

  self.getCurrent = function(){

    return currentScene.flag;

  }

  self.add = function( _scene ){

    scenesForManager[ _scene.flag ] = _scene;
    currentScene = _scene;

  }

  self.goTo = function( _flag ){

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
