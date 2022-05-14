import React, {Component} from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import {calcularMarca, obtenerDiferenciaAnio, obtenerPlan} from "../helper"
import Resumen from "./Resumen"
import Resultado from "./Resultado";

class App extends Component {

  state = {
    resultado: "",
    datos: {}
  }

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
    

    // plan basico incrementa el valor 20% y cobertura 50%
    let incrementoPlan = obtenerPlan(plan)

    // dependiendo del plan incrementar
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2)

    // ya tenemos el costo
    this.setState({
      resultado: resultado,
      datos: datos,
    })

  }

  render(){
    return (
      <div className="contenedor">
        <Header titulo="Cotizador de seguro de auto"/>
        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro={this.cotizarSeguro}
          />
          <Resumen
            datos={this.state.datos}
          />
          <Resultado
              resultado={this.state.resultado}
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
