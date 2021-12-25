/*-------------------------------------------------
instalar react hook forms
npm install react-hook-form
---------------------------------------------------*/
import { useForm } from 'react-hook-form';

function HookForm() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }

  // ...register: funcion que obtiene los datos de los inputs con el operador spread
  // handleSubmit: funcion que le pasamos como parametro la funcion onSubmit del formulario.
  // errors : funcion para validar y mostrar errores.

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nombre de usuario</label>
        <input
          type="text"
          placeholder="nombre"
          {...register("name", { required: true, minLength: 7 })} />
        {errors.name && <p>Por favor complete el nombre</p>} //validaciones
        <button>Enviar</button>
      </div>
    </form>
  )
}
export default HookForm;























* /