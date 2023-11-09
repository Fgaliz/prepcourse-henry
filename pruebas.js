
class Peliculas {
constructor(){
  this.pelis = [];
}
}
Peliculas.prototype.agregarPeli = function(pelicula){
  this.pelis.push(pelicula);
}
var peliculasFavoritas = new Peliculas();
peliculasFavoritas.agregarPeli(["rocky 1", "Aliens", "naranja mecanica"]);
console.log("mis peliculas favoritas son "+peliculasFavoritas.pelis);

class CosasDeLaoficina {
  constructor(){
    this.parasentarse = [];
    this.paraTrabajar = [];
    this.paraEscribir = [];
  }
 informacion = function (){
  for (var i = 0;i<2;i++){
    console.log(this.parasentarse[i]);
    console.log("este es el i de parasentarse "+i);
  }
  for (var i = 0;i<this.paraTrabajar.length;i++){
    console.log(this.paraTrabajar[i]);
  }
  for (var i = 0; i<this.paraEscribir.length;i++){
    console.log(this.paraEscribir[i]);
  }

 } 
}
CosasDeLaoficina.prototype.agregarCosas = function(sillas,elementos,escritura){
this.parasentarse.push(sillas);
this.paraTrabajar.push(elementos);
this.paraEscribir.push(escritura);
}
var cosasDeMiOficina = new CosasDeLaoficina();
cosasDeMiOficina.agregarCosas("reposera","laptop","cuadernos");
cosasDeMiOficina.agregarCosas("sillon","crind","lapiz");
cosasDeMiOficina.informacion();
//cosasDeMiOficina.informacion();

class CosasDelEscritorio {
  constructor(){
    this.escritorio = [];
  }
  informacion = function(){
    console.log("estas son las cosas de mi escritorio "+this.escritorio);
  }
}
CosasDelEscritorio.prototype.agregarCosas = function(cosas){
  this.escritorio.push(cosas);
}
var miEscritorio = new CosasDelEscritorio();
miEscritorio.agregarCosas("bocinas");
miEscritorio.informacion();

Array.prototype.arregloNoZero = function(){
  var arregloModificado = [];
  for(var i = 0; i<this.length;i++){
    if(this[i] == 0){
      arregloModificado.push(false);
    }
    else{
      arregloModificado.push(this[i]);
    }

  }
  return arregloModificado;
}
var arregloNuevo = [1,2,3,4,"pepe",0,2,0];
console.log(arregloNuevo.arregloNoZero());



