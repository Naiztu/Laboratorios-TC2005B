import React from "react";

function Modal({ item }) {
  return (
    <>
      <input type="checkbox" id={`modal${item.id}`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Referencia Apa:</h3>
          <p className="mx-auto py-4 w-10/12 text-justify overflow-hidden">
            {item.apa}
            <a className="link link-primary" href={item.link} target="_blank">
              {item.link}
            </a>
          </p>
          <div className="modal-action">
            <label htmlFor={`modal${item.id}`} className="btn">
              Ok
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
