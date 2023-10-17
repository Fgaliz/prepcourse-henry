// FUNCIÓN CONSTRUCTORA-.-.-.-.-.-.-.-.-.-.-.-.-
function Auto(puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
    this.informacion = function(){
        console.log('Este es '+this.marca+' de color '+this.color);
    }
 }
 let miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);
 console.log(miPrimerAuto);
 console.log(miPrimerAuto.marca);
 miPrimerAuto.informacion();

 // EXPRESIÓN DE CLASE-.-.-.-.-.-.-.-.-.-.-.-.-.-
class Auto {
    constructor(puertas, color, marca, año, ruedas) {
       this.puertas = puertas;
       this.color = color;
       this.marca = marca;
       this.año = año;
       this.ruedas = ruedas;
    }
    informacion = function(){
        console.log("Este "+this.marca+" es de color "+this.color);
    }
 }
 let miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);
 console.log(miSegundoAuto);
 console.log(miSegundoAuto.marca);
 miSegundoAuto.informacion();