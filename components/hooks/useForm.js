import { useState } from "react";
import Axios from "axios";
import swal from "sweetalert";

export const useForm = (initialData, validateForm) => {
  const initialError = {
    initial: "error main",
  };

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(initialError);
  const [data, setData] = useState(initialData);
  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const handleBlur = (e) => {
    handle(e);
    setErrors(validateForm(data));
  };

  const submit = (e) => {
    e.preventDefault();
    setLoading(true, sendMail());
  };

  async function sendMail() {
    try {
      const res = await Axios.post("/api/contact", data);

      res.status;
      res.data.success === "true"
        ? swal("¡Enviado!", "Pronto estaremos en contacto", "success").then(
            () => {
              setData(initialData);
              setErrors(initialError);
              setLoading(false);
            }
          )
        : swal(
            "¡No puede ser!",
            "No se pudo enviar los datos correctamente",
            "error"
          ).then(() => {
            setLoading(false);
          });
    } catch (exception) {
      swal(
        "¡No puede ser!",
        "No se pudo enviar los datos correctamente",
        "error"
      ).then(() => {
        setLoading(false);
      });
    }
  }
  return {
    data,
    errors,
    loading,
    handle,
    handleBlur,
    setErrors,
    submit,
  };
};
