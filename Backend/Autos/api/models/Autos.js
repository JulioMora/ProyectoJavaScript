/**
 * Autos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    marca: {
      type: 'string',
      //defaultsTo: '111-222-3333'
    },
    modelo: {
      type: 'string',
      //defaultsTo: '111-222-3333'
    },
    anio: {
      type: 'string',
      //defaultsTo: '111-222-3333'
    },
    precio: {
      type: 'float',
      //defaultsTo: '111-222-3333'
    },
    foto: {
      type: 'string',
      //defaultsTo: '111-222-3333'
    },
    idAutos:{ //hijo
      model:'usuario'
    },
    nuevousado:{
      type: 'boolean'
    }
  }
};

