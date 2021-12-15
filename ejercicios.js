//Ejercicio 1

var numeros = [31, 23, 12, 6, 13];
function num() {
    console.log("Los numeros ingresados son " + numeros);
    numeros.sort(function (x, y) {
        return x - y;
    });
    var valor = numeros.length - 1;
    console.log("el numero mas grande es " + numeros[valor]);

    //numero descendente
    numeros.sort(function (x, y) {
        return y - x;
    });
    console.log("Los numeros descendentes son " + numeros);
    return;
}
num();

function mutiplicar() {
    console.log(numeros);
    //Aqui se multiplican
    for (i = 0; i < numeros.length; i++) {
        //Toma el valor y lo guarda
        var num = numeros[i];
        //Aqui se multiplica
        numeros[i] = num * 2;
    }
    console.log(numeros);
    return;
}
mutiplicar();

function sumaYProducto() {
    console.log(numeros);
}

sumaYProducto();

function ejercicio4() {
    var materias1 = ["Matematicas", "Fisica", "Español"];
    var materias2 = ["Quimica", "Programacion", "Fisica"];

    console.log("Los datos son");
    console.log(materias1);
    console.log(materias2);

    for (i = 0; i < materias1.length; i++) {
        for (j = 0; j < materias2.length; j++) {
            if (materias1[i] == materias2[j]) {
                console.log("Las materia que se repite es " + materias2[j]);
                break;
            }
        }
    }
    return;
}

var arr = ["This", "is", "a", "sentence."];
function printOutString() {
    console.log(arr[0]+" "+arr[1]+" "+arr[2]+" "+arr[3]);
}

printOutString();


ejercicio4();

function ejercicio5() {
    var personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];

    console.log(personas);
    console.log("Se elimino a Dani");
    personas.splice(1, 1);
    console.log(personas);
    console.log("Se elimino a Juan");
    personas.splice(2, 2);
    console.log(personas);
    console.log("Se añadio a pablo al principio");
    personas.unshift("Pablo");
    console.log(personas);
    console.log(personas);
    console.log("Se añadio a Brian al final de la lista");
    personas.push("Brian");
    console.log(personas);
    //Ordenar los nombre en orden alfabetico
    console.log("Los nombre ordenados son");
    personas.sort(function (x, y) {
        return x - y;
    });
    console.log(personas);

    return;
}

function someFunction(list) {
    if (list.length === 0) {
        console.log('No hay nada escrito')
    return 0;
    }
    
    return list.length;
}

ejercicio5();
//Se le ponde esto en el parametro para meter los datos
function gradeLabel(grade) {
    if (grade <= 6 && grade > 0) {
        console.log("Failed");
    } else if (grade > 6 && grade <= 9) {
        console.log("Insufficient");
    } else if (grade > 9 && grade <= 14) {
        console.log("Good");
    } else if (grade == 15) {
        console.log("Excelente");
    } else {
        console.log("Error, outside of bounds");
    }
}

gradeLabel();

function ejercicioAdicional() {
    var values1 = ["Apple", 1, false];
    var values2 = ["Fries", 2, true];
    var values3 = ["Mars", 9, "Apple"];

    for (i = 0 ; i < values1.length ; i++){
        for (j = 0 ; j < values2.length ; j++){
                if (values1[i]===values2[j]){
                    console.log("el valor igual es "+values2[j]);
                }
                if (values1[i]===values3[j]){
                    console.log("el valor igual es "+values3[j]);
                }
                if (values2[i]===values3[j]){
                    console.log("el valor igual es "+values2[j]);
                }
        }
    }
    return;
}

ejercicioAdicional ();