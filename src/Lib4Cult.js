
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

  var ctx = el.getContext('2d');

  self.position = {
    x: el.offsetTop,
    y: el.offsetLeft
  }

  self.size = {
    width: el.width,
    height: el.height
  }

  // el.style.border = "solid 1px #000";

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

  self.stage = new StageLib4Cult( ctx, self.position.x, self.position.y, self.size.width, self.size.height );

}
