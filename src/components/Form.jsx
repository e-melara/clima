import React, { useState } from "react";
import { apiOpenWeather } from "../helpers";

const Form = ({ setClima }) => {
 const [error, setError] = useState(false);
 const [busqueda, setBusqueda] = useState({
  cuidad: "",
  pais: "",
 });
 const { cuidad, pais } = busqueda;
 const handleChange = (e) => {
  setBusqueda({
   ...busqueda,
   [e.target.name]: e.target.value,
  });
 };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (cuidad.trim() === "" || pais.trim() === "") {
   setError(true);
   return;
  }
  setError(false);

  const response = await apiOpenWeather(pais, cuidad);
  setClima(response);
 };
 return (
  <form onSubmit={handleSubmit}>
   {error && (
    <p className="error red darken-4">Todos los campos son obligatorios</p>
   )}

   <div className="input-field col s12">
    <input
     type="text"
     name="cuidad"
     id="cuidad"
     value={cuidad}
     onChange={handleChange}
    />
    <label htmlFor="cuidad">Cuidad: </label>
   </div>
   <div className="input-field col s12">
    <select name="pais" id="pais" value={pais} onChange={handleChange}>
     <option value="US">--- Seleccione pais ----</option>
     <option value="US">Estados Unidos</option>
     <option value="MX">México</option>
     <option value="AR">Argentina</option>
     <option value="CO">Colombia</option>
     <option value="CR">Costa Rica</option>
     <option value="ES">España</option>
     <option value="PE">Perú</option>
    </select>
    <label htmlFor="pais">Pais: </label>
   </div>
   <div className="input-field col s12">
    <input
     type="submit"
     value="Buscar Clima"
     className="waves-effect waves-ligth btn-large btn-block yellow accent-4"
    />
   </div>
  </form>
 );
};

export default Form;
