function capturarInfoForm(){

    const objetoInfo = {
        nombre : "",
        password : "",
        telefono : "",
        hobbies :  [],
        nacionalidad : ""
    }


    //capturar la información

    const nom = document.getElementById("nom")
    const pass = document.getElementById("pass")
    const tel = document.getElementById("tel")
    const hobbies = document.querySelectorAll('[name=hobbies]')
    const nacionalidad = document.querySelectorAll('[name=nacionalidad]')


    //Pasar información al Objeto

    objetoInfo.nombre = nom.value;
    objetoInfo.password = pass.value;
    objetoInfo.telefono = tel.value;

    hobbies.forEach( hobbie => {
        if (hobbie.checked){
            objetoInfo.hobbies.push(hobbie.id)
        }
    })

    nacionalidad.forEach(nacion => {
        if(nacion.checked){
            objetoInfo.nacionalidad = nacion.id
        }
    })

    return objetoInfo
}



//Vamos a generar el evento 

const form = document.querySelector("form")
form.addEventListener('submit', e => {
    e.preventDefault()

    const data = capturarInfoForm()

    console.log(data);

    const errores = validarInformacion(data)

    console.log(errores);

    renderizarErrores(errores)

})




//Mesa de Trabajo
/* Realizar un formulario desde cero en donde el usuario pueda colocar su 
nombre de usuario y e-mail 
el mismo debe estar almacenado en un objeto y enviar un mensaje por alert que los datos fueron recibidos */

/* OPCIONAL */

/* -------------------------------------------------------------------------- */
/*                         [3] FUNCION: validar datos                         */
/* -------------------------------------------------------------------------- */
// Desarrollar la funcion 3 de validar los datos.
// Esta funcion va a recibir un objeto con la misma estructura de objetoInfo
// Entonces dentro de esta función vamos a chequear ciertas validaciones.
// 1- La funcion devuelve un listado de errores según las comprobaciones que hace sobre el objeto.
// 2- Si el nombre no es un texto y tiene menos de 3 caracteres sumar el error: "El nombre debe tener al menos 3 caracteres."
// 3- Si la contraseña tiene menos de 6 caracteres, sin contar espacios al principio, en el medio o final, sumar el error: "La contraseña debe tener al menos 6 caracteres, entre letras y símbolos."
// 4- Si el telefono tiene menos de 10 números, sumar el error: "No es un teléfono válido."
// 5- Si la lista de hobbies tiene más de 4 items, sumar el error: "Sólo es posible seleccionar 4 hobbies."
// 5- Si no hay una nacionalidad definida, sumar el error: "Debe seleccionar una nacionalidad."


    const validarInformacion = usuario =>{

        let errores = []

        if(usuario.nombre.length < 3){
            errores.push("Los datos del nombre están mal")
        }

        if(usuario.password.trim().length < 6){
            errores.push("Los datos son insuficientes");
        }

        if(usuario.telefono.length < 10){
            errores.push("No es un teléfono")
        }
        if (usuario.hobbies.length > 4 || usuario.hobbies.length === 0) {
            errores.push("Solo puede seleccionar 4")
        }
        if (usuario.nacionalidad === "")
        {errores.push("Seleccione una nacionalidad")}

        return errores
    }
    

