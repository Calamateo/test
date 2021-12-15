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