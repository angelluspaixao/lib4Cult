
/*
* @author Guilherme Paixão
*/

Lib4Cult = function( _id, _sizeWidth, _sizeHeight, _container ){

  // Parse scope of Class 'Lib4Cult'
  var self = this;

  // -- Attributes
  var mode = { development: false }
  ,   container = document.getElementById( _container ) || document.body
  ,   id = _id || "l4c-canvas"
  ,   position = { x: 0, y: 0 }
  ,   size = { width: _sizeWidth, height: _sizeHeight }
  ,   canvas = document.createElement('canvas')
  ,   context = canvas.getContext('2d')
  ;

  // [ CONST ]
  self.angle = {
    DEGREES_0: 0,
    DEGREES_30: Math.PI /6,
    DEGREES_45: Math.PI /4,
    DEGREES_60: Math.PI /3,
    DEGREES_90: Math.PI /2,
    DEGREES_120: 2 *Math.PI /3,
    DEGREES_135: 3 *Math.PI /4,
    DEGREES_150: 5 *Math.PI /6,
    DEGREES_180: Math.PI,
    DEGREES_210: 7 *Math.PI /6,
    DEGREES_225: 5 *Math.PI /4,
    DEGREES_240: 4 *Math.PI /3,
    DEGREES_270: 3 *Math.PI /2,
    DEGREES_300: 5 * Math.PI /3,
    DEGREES_315: 7 *Math.PI /4,
    DEGREES_330: 11*Math.PI /6,
    DEGREES_360: 0
  }

  self.pivot = {
    TOP_LEFT: function( _size ){ return { x: 0, y: 0 } },
    TOP_CENTER: function( _size ){ return { x: -_size.width /2, y: 0 } },
    TOP_RIGHT: function( _size ){ return { x: -_size.width, y: 0 } },
    MIDDLE_LEFT: function( _size ){ return { x: 0, y: -_size.height /2 } },
    MIDDLE_CENTER: function( _size ){ return { x: -_size.width /2, y: -_size.height /2 } },
    MIDDLE_RIGHT: function( _size ){ return { x: -_size.width, y: -_size.height /2 } },
    DOWN_LEFT: function( _size ){ return { x: 0, y: -_size.height } },
    DOWN_CENTER: function( _size ){ return { x: -_size.width /2, y: -_size.height } },
    DOWN_RIGHT: function( _size ){ return { x: -_size.width, y: -_size.height } }
  }

  self.font = {
    ARIAL: "Arial",
    VERDANA: "Verdana",
    COMIC_SANS: "Comic Sans MS",
    AHARONI: "Aharoni",
    CALIBRI: "Calibri",
    CONSOLAS: "Consolas",
    COURIER_NEW: "Courier New",
    EUPHEMIA: "Euphemia",
    IMPACT: "Impact",
    TAHOMA: "Tahoma",
    TREBUCHET: "Trebuchet MS"
  }

  // Reset the style of body [ DOM ]
  document.body.style.margin = "0px";
  document.body.style.padding = "0px";

  // Parse function for loop of app
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();

  // -- Methods

  // [ INIT ] -- Settings for instance this Class 'Lib4Cult'
  canvas.id = id;
  canvas.offsetLeft = position.x;
  canvas.offsetTop = position.y;
  canvas.width = size.width;
  canvas.height = size.height;
  container.appendChild( canvas );

  // [ SET ]
  self.mode = {

    development:  function( _debug ){

      mode.development = _debug;
      if( mode.development ){

        canvas.style.border = "solid 1px #000";

      }else{

        canvas.style.border = "none";

      }

    }

  }
  self.setContainer = function( _container ){

    container = document.getElementById( _container );
    container.appendChild( canvas );

  }

  // [ GET ]
  self.getX = function(){ return position.x; }
  self.getY = function(){ return position.y; }
  self.getWidth = function(){ return size.width; }
  self.getHeight = function(){ return size.height; }
  self.getContainer = function(){ return container; }
  self.getId = function(){ return id; }

  // Object for helper create elements
  self.create = {

    scene: function( _flag ){
      var o = new SceneLib4Cult( _flag );
      return o;
    },

    rectangle: function( _positionX, _positionY, _sizeWidth, _sizeHeight, _hexColor ){
      var o = new RectangleLib4Cult( _positionX, _positionY, _sizeWidth, _sizeHeight, _hexColor );
      return o;
    },

    group: function( _positionX, _positionY ){
      var o = new GroupLib4Cult( _positionX, _positionY );
      return o;
    },

    text: function( _text, _positionX, _positionY, _fontSize, _color, _fontType ){
      var o = new TextLib4Cult( _text, _positionX, _positionY, _fontSize, _color, _fontType );
      return o;
    }

  }

  self.stage = new StageLib4Cult( context, position.x, position.y, size.width, size.height );

}
