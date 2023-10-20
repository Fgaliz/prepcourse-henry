class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log("Hola soy "+this.nombre+" y mi edad es de "+this.edad+" años");
    }
}
var martin = new Persona("Martin", 26);
martin.saludar();

class Programador extends Persona{
    constructor(nombre, edad, añosDeExperiencia){
        super(nombre, edad);
        this.añosDeExperiencia = añosDeExperiencia;
    }
    codear = function(){
        console.log("Hola soy "+this.nombre+" y mi edad es de "+this.edad+" años, y de eperiencia codeando son "+this.añosDeExperiencia+" años");
    }    
}
var maria = new Programador("maria",54,10);
maria.codear();
maria.saludar();