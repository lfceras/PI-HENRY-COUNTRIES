import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./create.module.css";

const CreateActivity = () => {
  const [input, setInput] = useState({
    name: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    activities: [],
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e)=>{
    if(e.target.checked){
      setInput({
        ...input,
        season: e.target.value
      })
    }
  }
  return (
    <div className={styles.fondo}>
      <Link to={"/home"}>
        <button>Regresar</button>
      </Link>
      <h1>CreateActivity</h1>

      <div>
        <form>
          <div>
            <label>Nombre: </label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label>Dificultad: </label>
            <input
              type="number"
              name="dificultad"
              value={input.dificultad}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label>Duracion: </label>
            <input
              type="number"
              name="duracion"
              value={input.duracion}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label>Temporada: </label>
            <label>
              <input type="checkbox" 
              name="summer" 
              value="summer" 
              onChange={(e)=> handleChecked(e)}
              />
              Summer
            </label>

            <label>
              <input type="checkbox" 
              name="fall" 
              value="fall" 
              onChange={(e)=> handleChecked(e)}
              />
              Fall
            </label>

            <label>
              <input type="checkbox" 
              name="winter" 
              value="winter" 
              onChange={(e)=> handleChecked(e)}
              />
              Winter
            </label>

            <label>
              <input type="checkbox" 
              name="spring" 
              value="spring" 
              onChange={(e)=> handleChecked(e)}
              />
              Spring
            </label>
          </div>

          <button type="submit">Crear actividad</button>
        </form>
      </div>
    </div>
  );
};

export default CreateActivity;
