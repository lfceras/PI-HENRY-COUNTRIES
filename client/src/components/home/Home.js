import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import CountryCard from "../countryCard/CountryCard";
import styles from "./home.module.css";
import Paginado from "../paginado/Paginado";
import NavBar from "../navBar/NavBar";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const recargarPaises = (e) => {
    dispatch(getAllCountries());
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Link to={"/"}>
        <button>Inicio</button>
      </Link>
      <button onClick={(e) => recargarPaises(e)}>Recargar Paises</button>
      <Paginado
        countriesPerPage={countriesPerPage}
        countries={countries.length}
        paginado={paginado}
      />
      <div className={styles.countriesContainer}>
        {currentCountries?.map((el) => {
          return (
            <CountryCard
              key={el.id}
              id={el.id}
              flag={el.flag}
              name={el.name}
              continents={el.continents}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
