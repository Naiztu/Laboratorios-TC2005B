export default function Form({ data, errors, handle, handleBlur, submit }) {
  return (
    <div className="w-full lg:w-3/6 xl:w-5/12 mb-10 mt-10 ">
      <div className="w-9/12 bg-gray-50 px-8 py-7 flex flex-col lg:ml-auto rounded-md mx-auto shadow-md hover:drop-shadow">
        <div className="relative mb-4">
          <label className="label">Nombre</label>
          <input
            type="text"
            id="name"
            onChange={handle}
            onBlur={handleBlur}
            value={data.name}
            name="name"
            className="input h-10"
            placeholder="Nombre completo"
          />
        </div>
        {errors.name && (
          <p className="text-red-500 text-xs mb-4">{errors.name}</p>
        )}
        <div className="relative mb-4">
          <label className="label">Email</label>
          <input
            type="email"
            id="email"
            onChange={handle}
            onBlur={handleBlur}
            value={data.email}
            name="email"
            className="input h-10"
            placeholder="Email al que sera enviado el correo"
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-xs mb-4">{errors.email}</p>
        )}
        <div className="relative mb-4">
          <label className="label">Telefono</label>
          <input
            type="email"
            id="phone"
            onChange={handle}
            onBlur={handleBlur}
            value={data.phone}
            name="phone"
            className="input h-10"
            placeholder="Telefono celular"
          />
        </div>
        {errors.phone && (
          <p className="text-red-500 text-xs mb-4">{errors.phone}</p>
        )}
        <div className="relative mb-4">
          <label className="label">Mensaje</label>
          <textarea
            id="message"
            name="message"
            onChange={handleBlur}
            onBlur={handleBlur}
            value={data.message}
            rows="3"
            className="input h-32"
          >
            {""}
          </textarea>
        </div>
        {errors.message && (
          <p className="text-red-500 text-xs mb-4">{errors.message}</p>
        )}
        <button
          disabled={!(Object.keys(errors).length === 0)}
          className="submit"
          onClick={submit}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
