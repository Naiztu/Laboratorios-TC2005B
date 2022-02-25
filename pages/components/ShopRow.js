import React from "react";

export default function ShopRow({ item, setProducts, products }) {
  const options2 = { style: "currency", currency: "USD" };
  const numberFormat2 = new Intl.NumberFormat("en-US", options2);
  return (
    <tr>
      <td className="hidden pb-4 md:table-cell">
        <a href="#">
          <img src={`${item.img}`} className="w-20 rounded" alt={`${item.name}`} />
        </a>
      </td>
      <td>
        <a href="#">
          <p className="mb-2 md:ml-4">{`${item.name}`}</p>
        </a>
      </td>
      <td className="justify-center md:justify-end md:flex mt-6">
        <div className="w-20 h-10">
          <div className="relative flex flex-row w-full h-8">
            <input
              type="number"
              value={item.cant}
              min={0}
              max={100}
              onChange={(e) => {
                setProducts(
                  [...products].map((object) => {
                    if (object.id === item.id) {
                      return {
                        ...object,
                        cant: e.target.value,
                      };
                    } else return object;
                  })
                );
              }}
              className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
            />
          </div>
        </div>
      </td>
      <td className="hidden text-right md:table-cell">
        <span className="text-sm lg:text-base font-medium">{`${numberFormat2.format(
          item.unitPrice
        )}`}</span>
      </td>
      <td className="text-right">
        <span className="text-sm lg:text-base font-medium">{`${numberFormat2.format(
          item.unitPrice * item.cant
        )}`}</span>
      </td>
    </tr>
  );
}
