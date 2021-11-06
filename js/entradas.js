const resumen = document.getElementById("resumen");
const borrar = document.getElementById("borrar");

borrarCampos();

resumen.onclick = total;
borrar.onclick = borrarCampos;

function total(){
    const precio = 200;
    let precioTotal = 0;

    if(cantEntradas.value >= 0){
        switch(categoria.value){
            case "Estudiante": 
                precioTotal = (precio * cantEntradas.value) * 0.2;
                fname.value = `Total a Pagar:$ ${precioTotal}`;
                break;
    
            case "Trainee": 
                precioTotal = (precio * cantEntradas.value) * 0.5;
                fname.value = `Total a Pagar:$ ${precioTotal}`;
                break;
    
            case "Junior": 
                precioTotal = (precio * cantEntradas.value) * 0.85;
                fname.value = `Total a Pagar:$ ${precioTotal}`;
                break;
    
        }
    }
    else alert("No se puede realizar la operación")
}

function borrarCampos(){
    categoria.value = '';
    cantEntradas.value = '';
    fname.value = 'Total a Pagar:$'
}
