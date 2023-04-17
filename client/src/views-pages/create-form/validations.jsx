

export const validations = (input, error, setError) => {
    //**NAME */
    if(!input.name) setError({ ...error, name: "Ingrese un nombre de Raza" });
    else if(!/^[A-Za-z]+$/.test(input.name)) setErrors({ ...error, name: "El nombre solo puede contener letras" });
    else setError({...error, name: ""});

    //**PESO */
    if(!input.weightmin) setError({...error, weightmin: })

    //**ALTURA */

    //**TEMPERAMENTO */

    //**IMAGEN */

    //**VIDA */


  }

        //funcion validadora
//   const validate = (input) =>{
//     //! yo no tengo email
//     if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)){
//       setError({...error, email: "Formato invalido"});
//       return;
//     }
//     setError({...error, email: ""});

    // if(!userData.username)  setErrors({ ...errors, usernameE: "Ingrese email" });
    // else{
    //     const expRex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/
    //     if(expRex.test(userData.username)) setErrors({ ...errors, usernameE: "" });
    //     else setErrors({ ...errors, usernameE: "Email inválido" });  
    // }

    // if(userData.username.length > 35) {
    //     setErrors({ ...errors, usernameE: "El email no puede tener más de 35 caracteres." });
    // }





// export const validationPass = (userData, setErrors, errors) => {
//     /**PASSWORD */
//     if(!userData.password) setErrors({ ...errors, passwordE: "Ingresa tu contraseña" });
//     else if(!/\d/.test(userData.password)) {
//         setErrors({ ...errors, passwordE: "Debe tener al menos un numero" });
//         }
//         else if(userData.password.length < 6 || userData.password.length > 10) {
//             setErrors({ ...errors, passwordE: "Contraseña Invalida, debe tener entre 6 y 10 caracteres" });}
//             else setErrors({ ...errors, passwordE: ""});
// }
  
