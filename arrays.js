// list de compras
var listadeCompras = []
listadeCompras [3] = "lechuga";
listadeCompras [1] = "tomates";
console.log(listadeCompras)
// ver lista de compras
var elementosDelArray = listadeCompras[1];
console.log(elementosDelArray);
//lenght
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
console.log(nombres);
// Push y Unshift
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('verde')
console.log(colores);
// POP Y SHIFT
colores.shift();
colores.pop();
console.log(colores);
//INCLUDES
var pintores = ['Picasso', 'Velazquez', 'Van Gogh', 'Dali'];
var existeDali = pintores.includes("Dali");
console.log(existeDali);
//EVERY
var numeros = [10,6,8,9,43];
var cumpleCondicion = numeros.every((num)=>{num > 1});
console.log(cumpleCondicion);
// EVERY
var numeros = [ 6, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

console.log(cumplenCondicion);
// split
var palabra = 'henri';
var palabraSeparada = palabra.split('');
console.log(palabraSeparada);
//join
var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);
//ForEach
var numeros = [1,2,3,4];
numeros.forEach((num)=> {console.log(num)})
//MAP
var numeros = [1,2,3,4];
var masUnos =numeros.map((num)=>{return num+1});
console.log(masUnos);