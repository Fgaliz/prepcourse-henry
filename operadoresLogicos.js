//AND
var mayorYMenorYPar = function(num){
    if(num>5 && num<10 && num%2 === 0)
    console.log(true);
    else console.log(false);
}
mayorYMenorYPar(7);
mayorYMenorYPar(8);

// OR
var operadOR = function(str){
    if ( str === "Henry" || str.length < 2)
    console.log(true);
    else console.log(false);
}
operadOR("Henry");
operadOR("JAvascript");
operadOR("H");

//NOT
var negacion = function(permiso){
    if(!permiso)
    console.log("Tiene permiso");
}
negacion(0);