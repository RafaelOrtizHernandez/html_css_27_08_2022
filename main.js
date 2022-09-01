


let nombre = `Rafael Ortiz Hernandez`;
let edad = 37;
let altura = 1.73;
let soyInstructor = false;
let direcciones = null;
let cambioRopa = undefined;
let listaPasatiempo = ["Cine", "Comics", "Videojuegos", "Programar"];
let caracteristicasPC = {
    sistema: "Windows 11 Pro x64",
    ram: 16,
    disco: "SSD",
    iluminacion : function(){
        return "SI";
    }
}

let myStyle = `color:white;background: rgba(0, 255, 191, 0.76);font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;border-radius: 5px;padding: 5px;`
console.group(`%cNombre del desarrollador:`, myStyle);
    console.log(nombre);
console.groupEnd();

console.group(`%cEdad del desarrollador:`, myStyle);
    console.log(edad);
    console.groupEnd();

    console.group(`%cAltura del desarrollador:`, myStyle);
    console.log(altura);
    console.groupEnd();

    console.group(`%cPermiso para enseñar:`, myStyle);
    console.log(soyInstructor);
    console.groupEnd();

    console.group(`%cDireccion:`, myStyle);
    console.log(direcciones);
    console.groupEnd();

    console.group(`%cRopa del desarrollador:`, myStyle);
    console.log(cambioRopa);
    console.groupEnd();

    console.group(`%cPasatiempos del desarrollador:`, myStyle);
    console.log(listaPasatiempo);
    console.groupEnd();

    console.group(`%cPC del desarrollador:`, myStyle);
    console.log(caracteristicasPC);
    console.groupEnd();
