var deportes = {
    conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
};
deportes.conBalon.pop()
console.log(deportes.conBalon);

var persona = {nombre: 'Lucas', edad: 26, estudios: {esProgramador: true}};
console.log(persona.nombre)

//Acceder
var persona = { nombre: 'Lucas', edad: 26, estudios: {esProgramador:true}};
console.log(persona.edad);

//ASIGNAR
var persona = { nombre: 'Lucas', edad: 26, estudios: {esProgramador:true}};
persona.nombre = "Martin";
console.log(persona.nombre);

//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);
autos.marcas.push('Fiat');
console.log(autos.marcas);

//BORRAR
delete autos.marcas;
console.log(autos);

// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

console.log(tienePropiedad);

// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

// FOR IN in objects
var mundo = {
    continentes : 7,
    paises : 195,
    oceanos : 5
}
for (var prop in mundo){
    console.log("esta es la propiedad: "+prop);
    console.log("este es el valor: "+mundo[prop]);
}