/*--------------------------------------
  usamos un condicional para evaluar si existen elementos
  antes de ejecutar el map

     condición ? expresion 1 : expresion 2;
      condición ? true : false

  { elemento.length > 0 ? (
           elemento.map(item => (
           <div>Mostramos el elemento</div>
           ))
         ) : (
           <div>No existen elementos</div>
   )}
 
*/