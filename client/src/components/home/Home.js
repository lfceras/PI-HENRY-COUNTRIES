import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByContinent,
  getAllCountries,
  sortByName,
} from "../../redux/actions";
import CountryCard from "../countryCard/CountryCard";
import styles from "./home.module.css";
import Paginado from "../paginado/Paginado";
import Searchbar from "../searchBar/Searchbar";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [orden, setOrden] = useState("");
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

  const handleFiltered = (e) => {
    dispatch(filterByContinent(e.target.value));
  };

  const handleSorted = (e) => {
    dispatch(sortByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  };

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <div>
      <Searchbar />
      <Link to={"/"}>
        <button>Inicio</button>
      </Link>
      <button onClick={(e) => recargarPaises(e)}>Recargar Paises</button>
      <Paginado
        countriesPerPage={countriesPerPage}
        countries={countries.length}
        paginado={paginado}
      />
      <div className={styles.filters}>
        <div>
          <label>Buscar por Continentes</label>
          <select onChange={(e) => handleFiltered(e)}>
            <option value="All">Todos</option>
            <option value="South America">America del sur</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>

        <div>
          <label>Buscar por actividad</label>
          <select>
            <option value="">----</option>
          </select>
        </div>

        <div>
          <label>Ordenar por: </label>
          <select onChange={(e) => handleSorted(e)}>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
          </select>
        </div>

        <div>
          <label>Ordenar por poblacion: </label>
          <select>
            <option value="mayor">Mayor</option>
            <option value="menor">Menor</option>
          </select>
        </div>
      </div>
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
