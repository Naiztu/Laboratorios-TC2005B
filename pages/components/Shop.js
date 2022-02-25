import React, { useState } from "react";
import ShopRow from "./ShopRow";

export default function Shop() {
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Audifonos",
      cant: 1,
      img: "https://limg.app/i/Calm-Cormorant-Catholic-Pinball-Blaster-yM4oub.jpeg",
      unitPrice: 200,
    },
    {
      id: "2",
      name: "Tesla Model 3",
      cant: 1,
      img: "https://limg.app/i/Cute-Constrictor-Super-Sexy-Military-Enforcer-W7mvBp.png",
      unitPrice: 2000000,
    },
    {
      id: "3",
      name: "Pluma",
      cant: 1,
      img: "https://limg.app/i/Successful-Spider-Biblical-Mutant---Total-War-lKoE7D.jpeg",
      unitPrice: 20,
    },
  ]);

  function calculateTotal() {
    const options2 = { style: "currency", currency: "USD" };
    const numberFormat2 = new Intl.NumberFormat("en-US", options2);
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].cant * products[i].unitPrice;
    }
    return numberFormat2.format(total);
  }
  return (
    <div className="flex justify-center my-6">
      <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
        <div className="flex-1">
          <table className="w-full text-sm lg:text-base" cellSpacing={0}>
            <thead>
              <tr className="h-12 uppercase">
                <th className="hidden md:table-cell" />
                <th className="text-left">Producto</th>
                <th className="lg:text-right text-left pl-5 lg:pl-0">
                  <span className="lg:hidden" title="Cantidad">
                    CTN
                  </span>
                  <span className="hidden lg:inline">Cantidad</span>
                </th>
                <th className="hidden text-right md:table-cell">Precio/u</th>
                <th className="text-right">Precio Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <ShopRow
                  key={item.id}
                  item={item}
                  setProducts={setProducts}
                  products={products}
                />
              ))}
            </tbody>
          </table>
          <hr className="pb-6 mt-6" />
          <div className="my-4 mt-6 -mx-2 lg:flex">
            <div className="lg:px-2 lg:w-1/2">
              <div className="p-4 bg-gray-100 rounded-full">
                <h1 className="ml-2 font-bold uppercase">Cupón</h1>
              </div>
              <div className="p-4">
                <p className="mb-4 italic">
                  Si tienes un cupón, puedes escribirlo aqui:
                </p>
                <div className="justify-center md:flex">
                  <div className="flex items-center w-full h-13 pl-3 bg-gray-100 border rounded-full">
                    <input
                      type="coupon"
                      name="code"
                      id="coupon"
                      placeholder="Código de cupón"
                      className="w-full bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none"
                    />
                    <button
                      type="submit"
                      className="text-sm flex items-center px-3 py-1 text-white bg-gray-800 rounded-full outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none"
                    >
                      <svg
                        aria-hidden="true"
                        data-prefix="fas"
                        data-icon="gift"
                        className="w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
                        />
                      </svg>
                      <span className="font-medium">Aplicar Cupón</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 mt-6 bg-gray-100 rounded-full">
                <h1 className="ml-2 font-bold uppercase">
                  Instrucciones de envio
                </h1>
              </div>
              <div className="p-4">
                <p className="mb-4 italic">
                  Si tienes una instrucción especial para el envió, escríbela
                  aquí:
                </p>
                <textarea
                  className="w-full h-24 p-2 bg-gray-100 rounded"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="lg:px-2 lg:w-1/2">
              <div className="p-4 bg-gray-100 rounded-full">
                <h1 className="ml-2 font-bold uppercase">
                  Detalles de la compra
                </h1>
              </div>
              <div className="p-4">
                <p className="mb-6 italic">
                  Desgloce de los detalles de la compra incluyendo si hay
                  descuento.
                </p>
                <div className="flex justify-between border-b">
                  <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Subtotal
                  </div>
                  <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    {calculateTotal()}
                  </div>
                </div>

                <div className="flex justify-between pt-4 border-b">
                  <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Total
                  </div>
                  <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    {calculateTotal()}
                  </div>
                </div>
                <a>
                  <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                    <svg
                      aria-hidden="true"
                      data-prefix="far"
                      data-icon="credit-card"
                      className="w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                      />
                    </svg>
                    <span className="ml-2 mt-5px">Pagar</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
