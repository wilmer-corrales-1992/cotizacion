import React, {Component} from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import {calcularMarca, obtenerDiferenciaAnio} from "../helper"

class App extends Component {

  cotizarSeguro = (datos) => {
    const {marca, plan, year} = datos

    // Agregar una base de 2000
    let resultado = 2000

    // Obtener la diferencia de años
    const diferencia = obtenerDiferenciaAnio(year)

    // Por cada año restar el 3% al valor del seguro
    resultado -= ((diferencia * 3) * resultado) / 100

    // Americano 15%, Asiatico 5%, Europeo 30% de incremento al valor actual
    resultado = calcularMarca(marca) * resultado
    

    // el lplan del auto, el básico in

  }

  render(){
    return (
      <div className="contenedor">
        <Header titulo="Cotizador de seguro de auto"/>
        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro={this.cotizarSeguro}
          />
        </div>
      </div>
    )
  }
}

export default App

// function App() {

//   cotizarSeguro = () => {

//   }

//   return (
//     <div className="contenedor">
//       <Header titulo="Cotizador de Seguro de Auto"/>
//       <div className="contenedor-formulario">
//         <Formulario
//           cotizarSeguro={cotizarSeguro}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;
