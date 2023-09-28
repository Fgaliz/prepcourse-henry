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
