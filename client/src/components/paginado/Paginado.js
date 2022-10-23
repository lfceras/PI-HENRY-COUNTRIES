/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import styles from './paginado.module.css'

const Paginado = ({ countriesPerPage, countries, paginado }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(countries / countriesPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className={styles.prueba1}>
      <ul  className={styles.prueba2}>
        {pageNumber &&
          pageNumber.map((number) => (
            <div key={number}>
            <a onClick={() => paginado(number)}>{number}</a>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Paginado;
