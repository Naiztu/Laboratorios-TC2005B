import React from "react";

function Modal({ item }) {
  let { id, link, apa } = item || {};
  return (
    <>
      <input type="checkbox" id={`modal${id}`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Referencia Apa:</h3>
          <p className="mx-auto py-4 w-10/12 text-justify overflow-hidden">
            {apa}
            <a
              className="link link-primary"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              {link}
            </a>
          </p>
          <div className="modal-action">
            <label htmlFor={`modal${id}`} className="btn">
              Ok
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
