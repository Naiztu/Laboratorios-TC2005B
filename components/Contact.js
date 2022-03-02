import { useForm } from "./hooks/useForm";
import Form from "./Form";
import FormLoading from "./FormLoading";

export default function Contact() {
  const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{15,255}$/;
    let regexPhone = /^[1-9]\d{9}$/;

    if (!form.name.trim()) {
      errors.name = "El campo 'Nombre' es requerido";
    } else if (!regexName.test(form.name.trim())) {
      errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
    }

    if (!form.email.trim()) {
      errors.email = "El campo 'Correo' es requerido";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "El campo 'Correo' es incorrecto";
    }

    if (!form.phone.trim()) {
      errors.phone = "El campo 'Telefono' es requerido";
    } else if (!regexPhone.test(form.phone.trim())) {
      errors.phone = "El campo 'Telefono' debe ser numerico y tener 10 digitos";
    }

    if (!form.message.trim()) {
      errors.message = "El campo 'Mensaje' es requerido";
    } else if (!regexComments.test(form.message.trim())) {
      errors.message =
        "El campo 'Mensaje' no debe tener menos de 15 caracteres o exceder los 255 caracteres";
    }

    return errors;
  };

  const initialData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const { data, errors, loading, handle, handleBlur, submit } = useForm(
    initialData,
    validationsForm
  );

  return (
    <>
      <section id="contact" className="w-full bg-repeat bg-body py-16 ">
        <div className="mx-auto my-auto flex items-center justify-center flex-col lg:flex-row">
          <div className="text-center w-11/12 lg:w-3/6 xl:w-7/12 mt-10">
            <h1 className="font-medium text-4xl sm:text-5xl text-bar uppercase">
              ¡Mandate un correo!
            </h1>
            <p className="leading-relaxed  w-9/12 mx-auto text-bar pt-3">
              Escríbete un mensaje que te llegara a tu correo (Recuerda revisar
              la bandeja de spam)
            </p>
            <img
              src="https://www.ricos.software/assets/contact.svg"
              alt="contact"
              className="w-10/12 sm:w-7/12 mx-auto"
            ></img>
          </div>
          {loading ? (
            <FormLoading />
          ) : (
            <Form
              data={data}
              errors={errors}
              handle={handle}
              handleBlur={handleBlur}
              submit={submit}
            />
          )}
        </div>
      </section>
    </>
  );
}
