import React, { useState } from "react";

import Form from "./components/Form";
import Clima from "./components/Clima";
import Error from "./components/Error";
import Header from "./components/Header";

function App() {
 let component;
 const [clima, setClima] = useState({});

 if (clima.cod === "404") {
  component = <Error mensaje={"Cuidad no encontrada"} />;
 } else {
  component = <Clima resultado={clima} />;
 }

 return (
  <>
   <Header title="Clima React App" />
   <div className="contenedor-form">
    <div className="container">
     <div className="row">
      <div className="col m6 s12">
       <Form setClima={setClima} />
      </div>
      <div className="col m6 s12">{component}</div>
     </div>
    </div>
   </div>
  </>
 );
}

export default App;
