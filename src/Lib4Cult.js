
/*
* @author Guilherme Paixão
*/

Lib4Cult = function( _id, _width, _height, _container ){

  var self = this;

  // Resetando o CSS do Body
  document.body.style.margin = "0px";
  document.body.style.padding = "0px";

  if( typeof _id !== 'string' || _id === undefined ){

    console.error( "asas" );
    return

  }

  // Declarando e settando a propriedades
  self.container = document.getElementById(_container) || document.body;
  self.id = _id;

  // Criando o 'canvas'
  var el = document.createElement('canvas');
  el.width = _width;
  el.height = _height;

  el.style.border = "solid 1px #000";

  var ctx = el.getContext('2d');

  var position = {
    x: el.offsetTop,
    y: el.offsetLeft
  }

  var size = {
    width: el.width,
    height: el.height
  }

  self.getX = function(){ return position.x; }
  self.getY = function(){ return position.y; }
  self.getWidth = function(){ return size.width; }
  self.getHeight = function(){ return size.height; }

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

  // Adicionando o 'canvas' no DOM
  self.container.appendChild( el );

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

    }

  }

  self.stage = new StageLib4Cult( ctx, position.x, position.y, size.width, size.height );

}
