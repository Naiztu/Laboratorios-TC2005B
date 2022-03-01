import React from "react";

export default function Card({ item }) {
  let { id, image, question, response } = item || {};
  return (
    <>
      <article className="card bg-base-100 articulo mt-8">
        <div
          className="imagen"
          style={{
            backgroundImage: `linear-gradient(rgba(5,7,12,.75),rgba(5,7,12,.75)),url("${image}")`,
          }}
        ></div>
        <div className="card-body md:w-7/12">
          <h2 className="card-title text-center">{question}</h2>
          <div className="m-auto pt-4">
            <div className="m-auto text-justify">
              <p dangerouslySetInnerHTML={{ __html: response }} />
            </div>
          </div>
          <div className="justify-end card-actions">
            <label htmlFor={`modal${id}`} className="btn modal-button">
              Apa
            </label>
          </div>
        </div>
      </article>
    </>
  );
}
