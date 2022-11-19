// En la Veterinaria Mundo Animal se prestan servicios de peluquería, baño, y veterinaria.
// Los empleados disponibles para prestar el servicio de peluquería son: Ana y Claudio. Los empleados
// disponibles para prestar el servicio de baño son Milena, Rosa y María. Los empleados disponibles para
// prestar el servicio de veterinaria son: Raúl y Laura. Las tarifas para los diferentes servicios ofrecidos
// por la veterinaria son:
// SERVICIO TARIFA
// PELUQUERÍA $30.000 PERROS, $40.000 GATOS
// BAÑO $25.000 GATOS, $35.000 PERROS
// VETERINARIA $30.000 CONSULTAS,
// $120.000 ESTERILIZACIÓN
// Cree una aplicación para la veterinaria Mundo Animal que permita a los usuarios seleccionar el
// servicio que desean y saber su precio, también seleccionar el empleado que atenderá la solicitud del
// servicio, por último, la aplicación debe permitir al usuario agendar el día y la hora en la que desea el
// servicio. Por último, una vez terminado el proceso por el usuario , la aplicación debe mostrarle a este
// un resumen de la transacción realizada, por ejemplo:
// Señor(a) Juan Mata, su cita para el servicio de Baño ha quedado agendada para el próximo 28 de
// septiembre de 2022 con un valor de $40.000.

function veterinaria(){
    let nombre = prompt("Ingrese su nombre: ");
    let precio;
    while(true){
        let servicio = prompt(`Los servicios disponibles son:\n1.Peluqueria\n2.Baño\n3.Veterinaria\nIngrese un servicio:`);
        if(servicio === 'peluqueria'){
            while(true){
                let empleado = prompt("Los empleados de esta area son:\n1.Anna\n2.Claudio\nIngrese empleado:");
                if(empleado === 'anna' || empleado === 'claudio'){
                    while(true){
                        let mascota = prompt(`PRECIOS PARA ESTE SERVICIO:\nGatos: $40.000\nPerros: $30.000\nIngrese tipo de mascota:`);
                        if(mascota === 'perro') precio = 40000;
                        else if(mascota === 'gato') precio = 30000;
                        else alert("ingrese una mascota valida");
                        if(precio === 40000 || precio === 30000) return `nombre del solicitante: ${nombre}\nServicio solicitado: ${servicio}\nEmpleado que lo atiende: ${empleado}\nTipo de mascota: ${mascota}\nValor a pagar: ${precio}`;
                    }
                }else alert("Ingrese un empleado disponible");
            } 
        }
        else if(servicio === 'baño'){
            while(true){
                let empleado = prompt("Los empleados de esta area son:\n1.Milena\n2.Rosa\n3.Maria\nIngrese empleado:");
                if(empleado === 'milena' || empleado === 'rosa' || empleado === 'maria'){
                    while(true){
                        let mascota = prompt(`PRECIOS PARA ESTE SERVICIO:\nGatos: $25.000\nPerros: $35.000\nIngrese tipo de mascota:`);
                        if(mascota === 'perro') precio = 35000;
                        else if(mascota === 'gato') precio = 25000;
                        else alert("ingrese una mascota valida");
                        if(precio === 35000 || precio === 25000) return `nombre del solicitante: ${nombre}\nServicio solicitado: ${servicio}\nEmpleado que lo atiende: ${empleado}\nTipo de mascota: ${mascota}\nValor a pagar: ${precio}`;
                    }
                }else alert("Ingrese un empleado disponible");
            } 
        }
        else if(servicio === 'veterinaria'){
            while(true){
                let empleado = prompt("Los empleados de esta area son:\n1.Raul\n2.Laura\nIngrese empleado:");
                if(empleado === 'raul' || empleado === 'laura'){
                    while(true){
                        let mascota = prompt(`Ingrese tipo de mascota:\n1.Perro\n2.Gato`);
                        if(mascota === 'perro' || mascota === 'gato'){
                            while(true){
                                let precioVet = prompt(`PRECIOS PARA ESTE SERVICIO:\nConsultas: $30.000\nEsterilizacion: $120.000\nIngrese opcion:`);
                                if(precioVet === 'consulta') precio = 30000;
                                else if(precioVet === 'esterilizacion') precio = 120000;
                                else alert("ingrese una opcion valida");
                                if(precio === 30000 || precio === 120000) return `nombre del solicitante: ${nombre}\nServicio solicitado: ${servicio}\nTipo de servicio: ${precioVet}\nEmpleado que lo atiende: ${empleado}\nTipo de mascota: ${mascota}\nValor a pagar: ${precio}`;
                            }
                        }else alert("Ingrese un tipo de mascota valida");
                    }
                }else alert("Ingrese un empleado disponible");
            } 
        }
        else alert("Ingrese un servicio valido");
    }
}
let citasVeterinaria = veterinaria();

function agendarCita(){
    while(true){
        let año = parseInt(prompt("Ingrese año en el que desea la cita:"));
        if(año >= 2022 && año <=10000){
            while(true){
                let mes = parseInt(prompt("Ingrese el numero del mes en el que desea la cita:"));
                if(mes >=1 && mes <=12){
                    while(true){
                        let dia = parseInt(prompt("Ingrese dia en el que desea la cita:"));
                        if(dia >= 1 && dia <=31){
                            return `su cita a sido asignada para el ${dia}/${mes}/${año}`;
                        }else alert("Ingrese un dia valido");
                    }
                }else alert("Ingrese un mes valido");
            }
        }else alert("Ingrese un año valido");
    }
}
let cita = agendarCita();

function factura(){
    alert(`${cita}\n----FACTURA----\n${citasVeterinaria}`);
}
factura();